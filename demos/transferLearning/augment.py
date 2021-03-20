import os
import cv2
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from keras.preprocessing import image
from keras.preprocessing.image import ImageDataGenerator
from keras import backend as K
from keras.utils import np_utils

# PATH = os.chdir(r'C:\Users\2x3lu\OneDrive\Desktop\Published_database_FV-USM_Dec2013\1st_session\extractedvein')
PATH = os.chdir(r'C:\Users\2x3lu\OneDrive\Desktop\Published_database_FV-USM_Dec2013\1st_session\extractedvein\l_pink')

PATH = os.getcwd()

# #Define data path
# data_path = PATH 
# data_dir_list = os.listdir(data_path)
# data_dir_list = data_dir_list[3:494]
# label_numbers = list(range(1, 493))

# #Create dictionary
# zip_iterator = zip(data_dir_list, label_numbers)
# labels_name = dict(zip_iterator)

# img_rows = 100
# img_cols = 300
# num_channel = 1
# num_epoch = 300

# #Define number of classes
# num_classes = 492

# img_data_list=[]
# labels_list = []

# for dataset in data_dir_list:
#     img_list=os.listdir(data_path + '/' + dataset)
#     print ('Loading the images of dataset-'+'{}\n'.format(dataset))
#     label = labels_name[dataset]
#     for img in img_list:
#         if str(img)[-3:] == "jpg":
#             input_img=cv2.imread(data_path + '/' + dataset + '/' + img)
#             if input_img is not None:
#                 input_img=cv2.cvtColor(input_img, cv2.COLOR_BGR2GRAY)
#                 input_img_resize=cv2.resize(input_img,(100,300))
#                 img_data_list.append(input_img_resize)
#                 labels_list.append(label)

# img_data = np.array(img_data_list)
# img_data = img_data.astype('float32')
# img_data /= 255

# print (img_data.shape)

# labels = np.array(labels_list)

# # print the count of number of samples for different classes
# print(np.unique(labels,return_counts=True))

# if num_channel==1:
#     if K.image_data_format()=='th':
#         img_data= np.expand_dims(img_data, axis=1) 
#         print (img_data.shape)
#     else:
#         img_data= np.expand_dims(img_data, axis=(4,0)) 
#         print (img_data.shape)

# else:
#     if K.image_dim_ordering()=='th':
#         img_data=np.rollaxis(img_data,3,1)
#         print (img_data.shape)

# img_data = img_data[0]

# # Convert class labels to on-hot encoding
# Y = np_utils.to_categorical(labels, num_classes)

# print("image_data.\n")
# print(img_data.shape)
# print("Y.shape\n")
# print(Y.shape)

# # Shuffle the dataset
# x,y = shuffle(img_data, Y, random_state=2)

# # Split the dataset
# X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=2)

# creates a data generator object that transforms images
datagen = ImageDataGenerator(
rotation_range=10,
width_shift_range=0.1,
height_shift_range=0.1,
shear_range=0.05,
zoom_range=0.2,
horizontal_flip=False,
fill_mode='nearest')

# pick an image to transform
# test_img = img_data[0]
# img = image.img_to_array(test_img)  # convert image to numpy arry
# img = img.reshape((1,) + img.shape)  # reshape image

pic = tf.keras.preprocessing.image.load_img(r"C:\Users\2x3lu\OneDrive\Desktop\Published_database_FV-USM_Dec2013\1st_session\extractedvein\l_pink\lrop3_1.png")
input_arr =  image.img_to_array(pic)/255.
input_arr = np.array([input_arr])
# plt.figure(69)
# plt.imshow(image.img_to_array(test_img))
# plt.imshow(image.img_to_array(input_arr[0]))


i = 0

for batch in datagen.flow(input_arr, save_prefix='test', save_format='png', save_to_dir=os.getcwd()):  # this loops runs forever until we break, saving images to current directory with specified prefix
    # plt.figure(i)
    # plot = plt.imshow(image.img_to_array(batch[0]))
    i += 1
    if i > 10:  # show 4 images
        break

plt.show()