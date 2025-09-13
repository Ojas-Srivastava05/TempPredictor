# fetch_weather.py
import os, requests, csv
from datetime import datetime

API_KEY = os.environ.get("OPENWEATHER_API_KEY")
if not API_KEY:
    raise SystemExit("Set OPENWEATHER_API_KEY in environment (export OPENWEATHER_API_KEY=yourkey)")

# For Delhi, hardcode latitude and longitude
CITY = os.environ.get("CITY", "Delhi")  # default city; you can override via env
LAT = 28.6139
LON = 77.2090
CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"

def ensure_csv_header(fn="weather_data.csv"):
    if not os.path.exists(fn):
        with open(fn, "w", newline="") as f:
            writer = csv.writer(f)
            writer.writerow(["date", "temp"])

def log_today_temp_delhi(fn="weather_data.csv"):
    params = {
        "lat": LAT,
        "lon": LON,
        "appid": API_KEY,
        "units": "metric"
    }
    r = requests.get(CURRENT_WEATHER_URL, params=params, timeout=10)
    r.raise_for_status()
    data = r.json()
    temp = None
    if "main" in data and "temp" in data["main"]:
        temp = float(data["main"]["temp"])
    date_str = datetime.utcnow().strftime("%Y-%m-%d")
    with open(fn, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow([date_str, temp])
    print(f"Logged {temp}°C for {CITY} at {date_str}")

if __name__ == "__main__":
    ensure_csv_header()
    log_today_temp_delhi()