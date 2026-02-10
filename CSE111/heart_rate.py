text = input ("Please enter your age: ")
age = int(text)

max_rate = 220 - age
slowest = max_rate * 0.65
fastest = max_rate * 0.85

print("When you excercise to strengthen your heart, you should")
print(f"keep your heart rate between {slowest:.0f} and {fastest:.0f}")
print("beats per minute.")