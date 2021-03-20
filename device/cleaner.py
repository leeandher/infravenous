import cv2
import numpy as np

# Read image and convert to grayscale
candidate = cv2.imread("d_in.png")
candidate_gray = cv2.cvtColor(candidate, cv2.COLOR_BGR2GRAY)

# Apply adaptive histogram equalization
clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 24))
candidate_eq = clahe.apply(candidate_gray)

# Invert the image and erode it
candidate_inv = cv2.bitwise_not(candidate_eq)

# Erode the image
kernel_1 = np.ones((7, 7), np.uint8)
candidate_er = cv2.erode(candidate_eq, kernel_1, iterations=1)


# # Skeletonization
_, candidate_thres = cv2.threshold(candidate_eq, 127, 255, 0)
candidate_draft = candidate_thres.copy()
candidate_skel = np.zeros(candidate_eq.shape, np.uint8)
kernel = cv2.getStructuringElement(cv2.MORPH_CROSS, (5, 5))
iterations = 1

while True:
    print("Iteration #" + str(iterations))
    temp_open = cv2.morphologyEx(candidate_draft, cv2.MORPH_OPEN, kernel)
    temp_sub = cv2.subtract(candidate_draft, temp_open)
    temp_erode = cv2.erode(candidate_draft, kernel)
    candidate_skel = cv2.bitwise_or(candidate_skel, temp_sub)
    candidate_draft = temp_erode.copy()
    iterations += 1
    if cv2.countNonZero(candidate_draft) == 0:
        break

# Write the image to a file
cv2.imwrite("d_out.jpg", candidate_thres)
