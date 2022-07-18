# Sports-Celebrity-Identification

The project is aimed at classifying sports celebrities from the image passed to it. The model can classify a celebrity among the 5 celebrities. This model is trained using SVM and I have used data science concepts such as data load and cleaning, feature engineering , gridsearchcv for hyperparameter tunning, k fold cross validation . 

Also created a web app using HTML, CSS and JQuery where we can pass an image and it will call the python flask server to retrieve the results and display it.

# Celebrities

1. Virat Kohli 
2. Mithali Raj
3. Saina Nehwal
4. Leonel Messi
5. Neeraj Chopra

# How the model is trained
1. Since majorly for classifying a person we see the face and recognize him/her . So First and foremost we will try to detect a face in the image from the dataset we created.
2. Because there are chances that the image may not have a person’s face or it might be obstructed and ultimately it won't be of any use for training purpose.

   <img src="https://user-images.githubusercontent.com/43903557/179525062-61d2c6dd-f0d2-44b6-968b-9f0f5ee485ad.png" width=25% height=25%>    <img src="https://user-images.githubusercontent.com/43903557/179527845-569599ac-707c-447b-ac2b-8f30ee3fd8f6.jpg" width=25% height=25%>
   
   The first image is not considered as the face is not completely visible but on the other hand the second iamge can be considered as face and 2 eyes are clearly visible.
  
3. For deciding this what we will do is , we will check if we can clearly detect a face which  has 2 eyes .If it doesn’t have the required data then we will discard it.
  For detecting eyes and face we will use opencv and it's technique called haar cascade
  
   <img src="https://user-images.githubusercontent.com/43903557/179527066-d7e36340-0537-49d0-9ce1-014170d1f37e.png" width=20% height=20%>
  
4. Next we will crop the images and apply wavelet transform to extract more meaningful features from the image which will help us to classify the image. 

   <img src="https://user-images.githubusercontent.com/43903557/179524257-2f88df07-78f8-43c6-a767-20add2b112e4.png" width=20% height=20%>

5. Once its done we will vertically stack the cropped original image and the raw (wavelet image) image . Combining meaingful features from both the type of images will ultimately help in better classification.
6. This data is used to train the model.

# How to run the app
1. Download the folder
2. Navigate to server folder
3. Run the python file "server.py" in cmd (This will start the flask server)
4. Now run the HTML file "app.html"

# Dependencies
- Python
- Jupyter notebook
- Numpy and Pandas
- Matplotlib
- Sklearn
- Python flask for http server
- HTML/CSS/Javascript for UI

# What the app loks like

<img src="https://user-images.githubusercontent.com/43903557/179529933-29ef4778-84d8-4e3a-bb91-599d841e6c25.jpeg" width=60% height=60%>

   
