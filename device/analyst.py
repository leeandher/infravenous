import tensorflow as tf
from keras.models import load_model
from keras.preprocessing import image

# Load the model and the attempt image
model = load_model("./model/model.h5")
attempt_image = tf.preprocessing.image.load_img("./attempt.jpg")

# Pre-process the image
input_array = image.img_to_array(attempt_image)

result = model.predict(input_array)

print(result)