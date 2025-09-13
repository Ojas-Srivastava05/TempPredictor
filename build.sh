#!/bin/bash

# Install Node.js dependencies and build React app
cd frontend
npm install
npm run build

# Go back to root directory
cd ..

# Install Python dependencies
pip install -r requirements.txt
