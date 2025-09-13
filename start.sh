#!/bin/bash

# Start the Flask application
cd backend
gunicorn --bind 0.0.0.0:${PORT:-5000} app:app
