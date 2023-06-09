# python -m pip install --upgrade pip

# CHOOSE ONE
# pip install lobe[all]
# pip install lobe[tf]
# pip install lobe[tflite]
# pip install lobe[onnx]

# pip install opencv-python

#import Pi GPIO library button class
from gpiozero import Button, LED, PWMLED, AngularServo
import cv2
from time import sleep

from lobe import ImageModel

model = ImageModel.load('./waste-sorter-TFLite')

#Create input, output, and camera objects
button = Button(2)

yellow_led = LED(17) #recycle
blue_led = LED(27) #compost
green_led = LED(22) 
white_led = PWMLED(24) #Status light and retake photo

recycle_servo1 = AngularServo(8, min_pulse_width=0.0006, max_pulse_width=0.0023)
recycle_servo2 = AngularServo(7, min_pulse_width=0.0006, max_pulse_width=0.0023)

recycle_servo1.angle = 90
recycle_servo2.angle = 90

compost_servo1 = AngularServo(20, min_pulse_width=0.0006, max_pulse_width=0.0023)
compost_servo2 = AngularServo(21, min_pulse_width=0.0006, max_pulse_width=0.0023)

compost_servo1.angle = 90
compost_servo2.angle = 90

#camera = PiCamera()

print("Press button to take a photo.")

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
        yellow_led.on()
        recycle_servo1.angle = -90
        recycle_servo2.angle= -90

        print("cardboard")
        sleep(5)

        yellow_led.off()
        recycle_servo1.angle = 90
        recycle_servo2.angle = 90

    elif label == "glass":
        yellow_led.on()
        recycle_servo1.angle = -90
        recycle_servo2.angle= -90

        print("glass")
        sleep(5)

        yellow_led.off()
        recycle_servo1.angle = 0
        recycle_servo2.angle = 0
        
    elif label == "metal":
        yellow_led.on()
        recycle_servo1.angle = -90
        recycle_servo2.angle= -90

        print("metal")
        sleep(5)

        yellow_led.off()
        recycle_servo1.angle = 0
        recycle_servo2.angle = 0

    elif label == "plastic":
        yellow_led.on()
        recycle_servo1.angle = -90
        recycle_servo2.angle= -90

        print("plastic")
        sleep(5)

        yellow_led.off()
        recycle_servo1.angle = 0
        recycle_servo2.angle = 0

    elif label == "paper":
        yellow_led.on()
        recycle_servo1.angle = -90
        recycle_servo2.angle= -90

        print("cardboard")
        sleep(5)

        yellow_led.off()
        recycle_servo1.angle = 0
        recycle_servo2.angle = 0

    elif label == "compost":
        blue_led.on()
        compost_servo1.angle = -90
        compost_servo2.angle= -90

        print("compost")
        sleep(5)

        blue_led.off()
        compost_servo1.angle = 0
        compost_servo2.angle= 0

    else:
        yellow_led.off()
        blue_led.off()
        green_led.off()

#take_photo()
#result = model.predict_from_file('./image.jpg')
#print(result.prediction)

# Main Function
while True:
    #take_photo()
    #result = model.predict_from_file('./image.jpg')
    #print(result.prediction)

    if button.is_pressed:
        take_photo()
        # Run photo through Lobe TF model
        result = model.predict_from_file('./image.jpg')
        # --> Change image path
        led_select(result.prediction)
    else:
        # Pulse status light
        white_led.pulse(2,1)

    sleep(0.5)
