import csv
import json
import sys
import os

MODEL_FILE = "model.json"
LEARNING_RATE = 0.001
EPOCHS = 1000

# Load CSV data
temps = []
next_temps = []

if not os.path.exists("weather_data.csv"):
    print("Error: CSV file 'weather_data.csv' does not exist.")
    sys.exit(1)

try:
    with open("weather_data.csv") as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        if len(rows) < 2:
            print("Error: CSV file must contain at least two rows.")
            sys.exit(1)
        for i in range(len(rows)-1):
            temps.append(float(rows[i]["temp"]))
            next_temps.append(float(rows[i+1]["temp"]))
except KeyError:
    print("Error: CSV file is missing the 'temp' column.")
    sys.exit(1)
except ValueError:
    print("Error: CSV file contains non-numeric temperature values.")
    sys.exit(1)

# Initialize w and b
w, b = 0.0, 0.0
N = len(temps)

# Gradient Descent
for _ in range(EPOCHS):
    dw = sum((w*temps[i] + b - next_temps[i]) * temps[i] for i in range(N)) / N
    db = sum((w*temps[i] + b - next_temps[i]) for i in range(N)) / N

    # prevent NaN
    if abs(dw) > 1e6 or abs(db) > 1e6:
        print("Gradient too large, stopping")
        break

    w -= LEARNING_RATE * dw
    b -= LEARNING_RATE * db



# Save model
with open(MODEL_FILE, "w") as f:
    json.dump({"w": w, "b": b}, f)

print("Trained w,b:", w, b)
