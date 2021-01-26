import cv2 as cv

raw_image = cv.imread('tree.jpg', cv.IMREAD_COLOR)


def displayImage(image, image_name):
    # Reduce size to display on screen
    h, w = raw_image.shape[:2]
    new_h = int(h / 2)
    new_w = int(w / 2)
    # Create a window to display
    cv.namedWindow(image_name, cv.WINDOW_NORMAL)
    cv.resizeWindow(image_name, new_w, new_h)
    cv.imshow(image_name, image)
    cv.waitKey(0)


# Greyscale
grey_image = cv.cvtColor(raw_image, cv.COLOR_BGR2GRAY)
displayImage(grey_image, "greyscale")
cv.imwrite("tree-greyscale.jpg", grey_image)

# Binary Thresholding
_, bin_image = cv.threshold(grey_image, 140, 255, cv.THRESH_BINARY)
displayImage(bin_image, "binary thresholding")
cv.imwrite("tree-binary.jpg", bin_image)

# Blurring (Noise reduction)
blur_image = cv.medianBlur(bin_image, 13).astype('uint8')
displayImage(blur_image, "blurred binary thresholding")
cv.imwrite("tree-binblur.jpg", blur_image)

# Gaussian Adaptive Thresholding
adapt_image = cv.adaptiveThreshold(
    blur_image, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 13, 3)
displayImage(adapt_image, "gaussian adaptive")
cv.imwrite("tree-adapt.jpg", adapt_image)
