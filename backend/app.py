import os, json, requests
from flask import Flask, request, jsonify, send_from_directory

# Update static folder path to point to React build
app = Flask(__name__, static_folder="../frontend/build", static_url_path="")

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

# Serve React app for any non-API routes
@app.route('/<path:path>')
def serve_react_app(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

MODEL_FILE = "model.json"
API_KEY = os.environ.get("OPENWEATHER_API_KEY")
DEFAULT_CITY = os.environ.get("CITY", "Delhi")

def load_model():
    if not os.path.exists(MODEL_FILE):
        return None
    with open(MODEL_FILE) as f:
        return json.load(f)

def fetch_temp_for_city(city):
    if not API_KEY:
        raise RuntimeError("OPENWEATHER_API_KEY not set.")
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    r = requests.get(url, timeout=10)
    r.raise_for_status()
    return float(r.json()["main"]["temp"])

@app.route("/api/predict", methods=["POST"])
def predict():
    body = request.get_json() or {}
    if "today_temp" not in body:
        return jsonify({"error":"send JSON {today_temp: number}"}), 400
    today = float(body["today_temp"])
    model = load_model()
    if not model:
        return jsonify({"error":"model not found. Run training."}), 500
    w = model["w"]; b = model["b"]
    pred = w * today + b
    return jsonify({"today": today, "predicted_tomorrow": round(pred, 3)})

@app.route("/api/current-temp")
def current_temp():
    city = request.args.get("city", DEFAULT_CITY)
    try:
        temp = fetch_temp_for_city(city)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    model = load_model()
    if not model:
        return jsonify({"error":"model not found. Run training."}), 500
    pred = model["w"] * temp + model["b"]
    return jsonify({"city":city, "current_temp": temp, "predicted_tomorrow": round(pred, 3)})

if __name__ == "__main__":
    app.run(debug=True, port=5000)