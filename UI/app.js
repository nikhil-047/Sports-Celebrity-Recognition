// Dropzone.autoDiscover = false

// function init(){
//     let dz = new Dropzone("#dropzone",{
//         url:"/",
//         maxFiles:1,
//         addRemovelLinks : true,
//         dictDefaultMessage:"Some Message",
//         autoProcessQueue:false
//     });

//     dz.on("addedfile",function(){
//         if (dz.files[1]!=null){
//             dz.removeFile(dz.files[0]);
//         }
//     });

Dropzone.autoDiscover = false;

function init() {
    let dz = new Dropzone("#dropzone", {
        url: "/",
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Some Message",
        autoProcessQueue: false
    });
    
    dz.on("addedfile", function() {
        if (dz.files[1]!=null) {
            dz.removeFile(dz.files[0]);        
        }
    });

    dz.on("complete", function (file) {
        let imageData = file.dataURL;

        var url="http://127.0.0.1:5000/classify_image";
        $.post(url,{
            image_data:imageData
        },function(data,status){
            console.log(data);

            if(!data || data.length==0){
                $("#resultHolder").hide();
                $("#divClassTable").hide();
                $("#error").show();
            }

            let match = null;
            let bestScore = -1;

            for(let i=0;i<data.length;++i){
                let maxScoreForThisClass = Math.max(...data[i].class_probability);
                if(maxScoreForThisClass>bestScore){
                    match = data[i];
                    bestScore = maxScoreForThisClass;
                }
                
                // console.log(Object.keys(match).length)
                // console.log(match)
                if(data){
                    // console.log(data[0].class)
                    // objectLength = Object.keys(match).length - 1 
                    
                    $("#error").hide();
                    $("#resultHolder").show();
                    $("#divClassTable").show();
                    $("#resultHolder2").hide();
                    $("#divClassTable2").hide();
                    $("#resultHolder").html($(`[data-player="${data[0].class}"`).html());
                    let classDictionary = data[0].class_dictionary;
                    for (let personName in classDictionary){
                        let index = classDictionary[personName];
                        let probabilityScore = data[0].class_probability[index];
                        console.log(index);
                        console.log(personName);
                        console.log(probabilityScore);
                        let elementName = "#score_" + personName;
                        $(elementName).html(probabilityScore);
                    }
                    if (data.length>=2){
                        $("#resultHolder2").show();
                        $("#divClassTable2").show();
                        $("#resultHolder2").html($(`[data-player="${data[1].class}"`).html());
                        let classDictionary = data[1].class_dictionary;
                        for (let personName in classDictionary){
                            let index = classDictionary[personName];
                            let probabilityScore = data[1].class_probability[index];
                            console.log(index);
                            console.log(personName);
                            console.log(probabilityScore);
                            let elementName = "#score2_" + personName;
                            $(elementName).html(probabilityScore);
                        }
                    }
                    //match->data[0] 
                    
                }
                
 /*               if(match){
                    console.log(data[0].class)
                    objectLength = Object.keys(match).length - 1 
                    $("#error").hide();
                    $("#resultHolder").show();
                    $("#divClassTable").show();

                    //match->data[0] 
                    $("#resultHolder").html($(`[data-player="${data[0].class}"`).html());
                    let classDictionary = data[0].class_dictionary;
                    for (let personName in classDictionary){
                        let index = classDictionary[personName];
                        let probabilityScore = data[0].class_probability[index];
                        // console.log(index);
                        // console.log(personName);
                        // console.log(probabilityScore);
                        let elementName = "#score_" + personName;
                        $(elementName).html(probabilityScore);
                    }
                } */
            }   

        });
    });

    $("#submitBtn").on('click',function(e){
        dz.processQueue();
    });
}

$(document).ready(function(){
    console.log("ready!");
    $("#error").hide();
    $("#resultHolder").hide();
    $("#divClassTable").hide();
    $("#resultHolder2").hide();
    $("#divClassTable2").hide();

    init();
});