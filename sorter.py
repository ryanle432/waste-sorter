# python -m pip install --upgrade pip

# CHOOSE ONE
# pip install lobe[all]
# pip install lobe[tf]
# pip install lobe[tflite]
# pip install lobe[onnx]

# pip install opencv-python


import cv2
from time import sleep

from lobe import ImageModel

model = ImageModel.load('./waste-sorter-TFLite')

# Take Photo
def take_photo():
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    if ret:
        cv2.imwrite('image.jpg', frame)
    else:
        print("Error capturing frame")
    cap.release()

# Identify prediction and turn on appropriate LED
def led_select(label):
    # print(label)
    if label == "cardboard":
        print("cardboard")
    if label == "compost":
        print("compost")
    if label == "glass":
        print("glass")
    if label == "metal":
        print("metal")
    if label == "not trash":
        print("not trash")
    if label == "plastic":
        print("plastic")

take_photo()
result = model.predict_from_file('./image.jpg')
print(result.prediction)