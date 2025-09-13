# 🌤️ ClimaTrack — Temperature Predictor

ClimaTrack is my very first Machine Learning project 🎉  
It predicts tomorrow’s temperature using **Linear Regression with Gradient Descent** trained from scratch in Python.  

👉 Live Demo: https://climatrack-2o3u.onrender.com  

---

```bash
# Clone the project
git clone https://github.com/Ojas-Srivastava05/TempPredictor.git
cd TempPredictor

# Setup backend
cd backend
python3 -m venv venv
source venv/bin/activate   # (Linux/Mac)
venv\Scripts\activate      # (Windows)
pip install flask requests

# Set OpenWeather API key
export OPENWEATHER_API_KEY="your_api_key"

# Fetch today’s weather and log to CSV
python fetch_weather.py

# Train the model
python trainmodel.py
# Example output:
# Trained w,b: 0.8732 2.1478

# Start Flask server
python app.py
# Server runs at http://localhost:5000

# In another terminal → setup frontend
cd frontend
npm install
npm run build
# React build will be served automatically by Flask backend

# Open browser
http://localhost:5000

Try it live here: https://climatrack-2o3u.onrender.com
