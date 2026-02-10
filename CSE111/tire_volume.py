import math

width = float(input("Enter the width of the tire in mm (ex 205): "))
aspect = float(input("Enter the aspect ratio of the tire (ex 60): "))
diameter = float(input("Enter the diameter of the wheel in inches (ex 15): "))

first = math.pi * width**2 * aspect
second = width * aspect + 2540 * diameter
volume = (first * second) / 10000000000

print(f"The approximate volume is {volume:.2f}")