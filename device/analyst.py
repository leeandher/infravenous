import h5py
import numpy as np
import os
import tensorflow as tf
from keras.models import load_model
from keras.preprocessing import image

def authenticate():
    """
        Returns [Auth_Node, Confidence]
    """
    # Load the model and the attempt image
    os.chdir(os.path.dirname(__file__))
    model = load_model("./model/model.h5")
    attempt_image = image.load_img(r"attempt.jpg", grayscale=True)

    # Pre-process the image (Normalize + Reshape)
    input_array = image.img_to_array(attempt_image)/255.
    input_array = input_array.reshape((1,) + input_array.shape)

    # Read the results
    result_matrix = model.predict(input_array)
    result = [np.argmax(result_matrix), np.amax(result_matrix)*100]
    
    # Clean up, delete the image
    os.remove('attempt.jpg')
    return result