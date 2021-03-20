import os, cv2
import numpy as np
import matplotlib.pyplot as plt
import json
import time
import h5py

from sklearn.utils import shuffle
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix
import itertools

from keras import backend as K

# K.set_image_dim_ordering('th')

from keras.models import load_model
from keras.utils import np_utils
from keras.models import Sequential
from keras.layers.core import Dense, Dropout, Activation, Flatten
from keras.layers.convolutional import Convolution2D, MaxPooling2D
from keras.optimizers import SGD, RMSprop, Adam

PATH = os.chdir(
    r"C:\Users\2x3lu\OneDrive\Desktop\Published_database_FV-USM_Dec2013\1st_session\extractedvein"
)

PATH = os.getcwd()

# Define data path
data_path = PATH
data_dir_list = os.listdir(data_path)
data_dir_list = data_dir_list[2:]
label_numbers = list(range(0, 500))

# Create dictionary
zip_iterator = zip(data_dir_list, label_numbers)
labels_name = dict(zip_iterator)


img_rows = 100
img_cols = 300
num_channel = 1
num_epoch = 200

# Define number of classes
num_classes = 500

img_data_list = []
labels_list = []


for dataset in data_dir_list:
    img_list = os.listdir(data_path + "/" + dataset)
    # print("Loading the images of dataset-" + "{}\n".format(dataset))
    label = labels_name[dataset]
    for img in img_list:
        if str(img)[-3:] == "jpg":
            input_img = cv2.imread(data_path + "/" + dataset + "/" + img)
            if input_img is not None:
                input_img = cv2.cvtColor(input_img, cv2.COLOR_BGR2GRAY)
                input_img_resize = cv2.resize(input_img, (100, 300))
                img_data_list.append(input_img_resize)
                labels_list.append(label)


img_data = np.array(img_data_list)
img_data = img_data.astype("float32")
img_data /= 255

# print(img_data.shape)

labels = np.array(labels_list)

# print the count of number of samples for different classes
# print(np.unique(labels, return_counts=True))

if num_channel == 1:
    if K.image_data_format() == "th":
        img_data = np.expand_dims(img_data, axis=1)
        # print(img_data.shape)
    else:
        img_data = np.expand_dims(img_data, axis=(4, 0))
        # print(img_data.shape)

else:
    if K.image_dim_ordering() == "th":
        img_data = np.rollaxis(img_data, 3, 1)
        # print(img_data.shape)

img_data = img_data[0]

# Convert class labels to on-hot encoding
Y = np_utils.to_categorical(labels, num_classes)

# print("image_data.\n")
# print(img_data.shape)
# print("Y.shape\n")
# print(Y.shape)


# Shuffle the dataset
x, y = shuffle(img_data, Y, random_state=2)

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=2)

# print("X_train shape = {}".format(X_train.shape))
# print("X_test shape = {}".format(X_test.shape))

# Shuffle the dataset
x, y = shuffle(img_data, Y, random_state=2)

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=2)

# Visualize some images
image = X_train[2230, :].reshape((300, 100))
# plt.imshow(image)
# plt.show()

# Initializing the input shape
input_shape = img_data[0].shape
# print(input_shape)

os.chdir(os.path.dirname(__file__))

model = load_model("model.h5")

model.summary()

start = time.time()
np.argmax(model.predict(X_test[0:1]), axis=-1)
end = time.time()
# print(end - start)

Y_pred = model.predict(X_test)
# print(Y_pred)
y_pred = np.argmax(Y_pred, axis=1)
# print(y_pred)

# print(confusion_matrix(np.argmax(y_test,axis=1), y_pred))


def plot_confusion_matrix(
    cm, normalize=False, title="Confusion matrix", cmap=plt.cm.Blues
):
    """
    This function prints and plots the confusion matrix.
    Normalization can be applied by setting `normalize=True`.
    """
    plt.imshow(cm, interpolation="nearest", cmap=cmap)
    plt.title(title)
    plt.colorbar()
    # tick_marks = np.arange(len(classes))
    # plt.xticks(tick_marks, classes, rotation=45)
    # plt.yticks(tick_marks, classes)

    if normalize:
        cm = cm.astype("float") / cm.sum(axis=1)[:, np.newaxis]
        # print("Normalized confusion matrix")
    # else:
        # print("Confusion matrix, without normalization")

    # print(cm)

    # thresh = cm.max() / 2.
    # for i, j in itertools.product(range(cm.shape[0]), range(cm.shape[1])):
    #     plt.text(j, i, cm[i, j],
    #              horizontalalignment="center",
    #              color="white" if cm[i, j] > thresh else "black")

    plt.tight_layout()
    plt.ylabel("True label")
    plt.xlabel("Predicted label")
    plt.figure(1)
    plt.show()


# Compute confusion matrix
cnf_matrix = confusion_matrix(np.argmax(y_test, axis=1), y_pred)

np.set_printoptions(precision=2)

# plt.figure(1)

# Plot non-normalized confusion matrix
plot_confusion_matrix(cnf_matrix, normalize=False, title="Confusion matrix")
# plt.figure()
# Plot normalized confusion matrix
# plot_confusion_matrix(cnf_matrix, classes=target_names, normalize=True,
#                      title='Normalized confusion matrix')
# plt.figure()
# plt.show()