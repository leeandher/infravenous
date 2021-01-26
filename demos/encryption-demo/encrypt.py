from PIL import Image
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto import Random

# Set a secret key and initialization vector for AES
key = Random.new().read(AES.block_size)
iv = Random.new().read(AES.block_size)

# Extract the byte data
input_image = Image.open('test-image.bmp')
input_data = input_image.tobytes()
input_image.close()

# Pad and encrypt the image data
cipher = AES.new(key, AES.MODE_CBC, iv)
enc_data = cipher.encrypt(pad(input_data, AES.block_size))

# Create an image from the encrypted result
enc_image = Image.frombytes(
    mode=input_image.mode,
    size=input_image.size,
    data=enc_data
)
enc_image.save('test-image-enc.bmp')

# Setup the decrypter with the same key, and initialization vector
decipher = AES.new(key, AES.MODE_CBC, iv)

# Decrypt the image data and unpad it
unenc_data = unpad(decipher.decrypt(enc_data), AES.block_size)

# Create an image from the decrypted result
dec_image = Image.frombytes(
    mode=input_image.mode,
    size=input_image.size,
    data=unenc_data
)
dec_image.save('test-image-dec.bmp')
