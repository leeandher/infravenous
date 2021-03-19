# -*- coding: utf-8 -*-
"""
Created on Wed Mar  3 22:31:51 2021

@author: Rumaysa
"""
# Import libraries
import os,cv2
import numpy as np
import matplotlib.pyplot as plt
import json
import time

from sklearn.utils import shuffle
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report,confusion_matrix
import itertools

from keras import backend as K
#K.set_image_dim_ordering('th')

from keras.utils import np_utils
from keras.models import Sequential
from keras.layers.core import Dense, Dropout, Activation, Flatten
from keras.layers.convolutional import Convolution2D, MaxPooling2D
from keras.optimizers import SGD,RMSprop,Adam

PATH = os.chdir(r'C:\Users\2x3lu\OneDrive\Desktop\Published_database_FV-USM_Dec2013\1st_session\extractedvein')

PATH = os.getcwd()

#Define data path
data_path = PATH 
data_dir_list = os.listdir(data_path)
data_dir_list = data_dir_list[3:494]
label_numbers = list(range(1, 493))

#Create dictionary
zip_iterator = zip(data_dir_list, label_numbers)
labels_name = dict(zip_iterator)


img_rows = 100
img_cols = 300
num_channel = 1
num_epoch = 200

#Define number of classes
num_classes = 500

img_data_list=[]
labels_list = []


for dataset in data_dir_list:
    img_list=os.listdir(data_path+'/'+ dataset)
    print ('Loading the images of dataset-'+'{}\n'.format(dataset))
    label = labels_name[dataset]
    for img in img_list:
        if str(img)[-3:] == "jpg":
            input_img=cv2.imread(data_path + '/'+ dataset + '/'+ img )
            if input_img is not None:
                input_img=cv2.cvtColor(input_img, cv2.COLOR_BGR2GRAY)
                input_img_resize=cv2.resize(input_img,(100,300))
                img_data_list.append(input_img_resize)
                labels_list.append(label)

    
img_data = np.array(img_data_list)
img_data = img_data.astype('float32')
img_data /= 255

print (img_data.shape)

labels = np.array(labels_list)

# print the count of number of samples for different classes
print(np.unique(labels,return_counts=True))

if num_channel==1:
    if K.image_data_format()=='th':
        img_data= np.expand_dims(img_data, axis=1) 
        print (img_data.shape)
    else:
        img_data= np.expand_dims(img_data, axis=(4,0)) 
        print (img_data.shape)
        
else:
    if K.image_dim_ordering()=='th':
        img_data=np.rollaxis(img_data,3,1)
        print (img_data.shape)

img_data = img_data[0]

# Convert class labels to on-hot encoding
Y = np_utils.to_categorical(labels, num_classes)

print("image_data.\n")
print(img_data.shape)
print("Y.shape\n")
print(Y.shape)


# Shuffle the dataset
x,y = shuffle(img_data,Y, random_state=2)

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=2)

print("X_train shape = {}".format(X_train.shape))
print("X_test shape = {}".format(X_test.shape))

#Shuffle the dataset
x,y = shuffle(img_data,Y, random_state=2)

#Split the dataset
X_train, X_test, y_train, y_test = train_test_split(x,y,test_size=0.2,random_state=2)

#Visualize some images
image = X_train[2230,:].reshape((300,100))
# plt.imshow(image)
# plt.show()

#Initializing the input shape
input_shape = img_data[0].shape
print(input_shape)

#Design CNN sequential model
model = Sequential ([
    Convolution2D(32,3,3, padding = 'same', activation = 'relu', input_shape = input_shape),
    Convolution2D(32,3,3, padding = 'same',activation = 'relu'),
    MaxPooling2D((2,2), padding='same'),
    Dropout(0),
    
    #Convolution2D(64,3,3, padding = 'same',activation = 'relu'),

    Convolution2D(64,3,3, padding = 'same',activation = 'relu'),
    MaxPooling2D(pool_size = (2,2)),
    Dropout(0), 

    Flatten(),
    Dense(64, activation = 'relu'),
    Dropout(0.1),
    Dense(num_classes, activation = 'softmax')
])
#Compiling the model
model.compile(
    loss = 'categorical_crossentropy', 
    optimizer = 'adam',
    metrics = ['accuracy'])

model.summary()

hist = model.fit(
    X_train, 
    y_train,
    batch_size=250, #16,
    epochs=num_epoch,
    verbose=1,
    validation_data=(X_test, y_test)
    )

# visualizing losses and accuracy
train_loss=hist.history['loss']
val_loss=hist.history['val_loss']
train_acc=hist.history['accuracy']
val_acc=hist.history['val_accuracy']
xc=range(num_epoch)

plt.figure(1,figsize=(7,5))
plt.plot(xc,train_loss)
plt.plot(xc,val_loss)
plt.xlabel('num of Epochs')
plt.ylabel('loss')
plt.title('train_loss vs val_loss')
plt.grid(True)
plt.legend(['train','val'])
#print plt.style.available # use bmh, classic,ggplot for big pictures
plt.style.use(['classic'])

plt.figure(2,figsize=(7,5))
plt.plot(xc,train_acc)
plt.plot(xc,val_acc)
plt.xlabel('num of Epochs')
plt.ylabel('accuracy')
plt.title('train_acc vs val_acc')
plt.grid(True)
plt.legend(['train','val'],loc=4)
#print plt.style.available # use bmh, classic,ggplot for big pictures
plt.style.use(['classic'])

# Evaluating the model

score = model.evaluate(X_test, y_test, verbose=0)
print('Test Loss:', score[0])
print('Test Accuracy:', score[1])

test_image = X_test[0:1]
print (test_image.shape)

# print(model.predict(test_image))
# print(model.predict_classes(test_image))
print("------------")
print(np.argmax(model.predict(test_image), axis=-1))
print("------------")
print(np.argmax(y_test[0:1][0]))

# image = test_image.reshape((300,100))
# plt.figure(3)
# plt.imshow(image)
# plt.show()

# model.save(os.path.dirname(__file__) + "/" + time.strftime("%d_%b_%Y_%H:%M:%S", time.localtime()) + ".h5")

os.chdir(os.path.dirname(__file__))
model.save("model.h5")