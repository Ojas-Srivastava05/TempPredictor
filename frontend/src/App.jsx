import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  CloudIcon, 
  FireIcon, 
  MapPinIcon, 
  SparklesIcon,
  SunIcon,
  MoonIcon,
  ChartBarIcon,
  ClockIcon,
  GlobeAltIcon,
  CpuChipIcon,
  LightBulbIcon,
  BoltIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  HeartIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  UsersIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

function App() {
  const [city, setCity] = useState('Delhi');
  const [manualTemp, setManualTemp] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [particles, setParticles] = useState([]);

  // Popular cities for suggestions
  const popularCities = useMemo(() => [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad',
    'London', 'New York', 'Tokyo', 'Paris', 'Berlin', 'Sydney'
  ], []);

  // Initialize particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);
  }, []);

  // Theme toggle
  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  // Fetch current temperature for a city
  const fetchCurrentTemp = async () => {
    if (!city.trim()) {
      setResult('Please enter a city name');
      return;
    }
    
    setLoading(true);
    setResult('Loading...');
    
    try {
      const response = await fetch(`/api/current-temp?city=${encodeURIComponent(city)}`);
      const data = await response.json();
      
      if (!response.ok) {
        setResult(`Error: ${data.error || JSON.stringify(data)}`);
        return;
      }
      
      setResult(`City: ${data.city} — Current: ${data.current_temp}°C — Predicted tomorrow: ${data.predicted_tomorrow}°C`);
    } catch (error) {
      setResult(`Network error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Predict from manual temperature input
  const predictFromManualTemp = async () => {
    const temp = parseFloat(manualTemp);
    if (isNaN(temp)) {
      setResult('Please enter a valid number');
      return;
    }
    
    setLoading(true);
    setResult('Predicting...');
    
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ today_temp: temp })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setResult(`Error: ${data.error || JSON.stringify(data)}`);
        return;
      }
      
      setResult(`Today: ${data.today}°C — Predicted tomorrow: ${data.predicted_tomorrow}°C`);
    } catch (error) {
      setResult(`Network error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500'
    } flex items-center justify-center p-4 relative overflow-hidden`}>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${
              isDark ? 'bg-blue-400' : 'bg-white'
            } animate-float`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.1}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
            } shadow-lg hover:scale-110`}
          >
            {isDark ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Main Card */}
        <div className={`backdrop-blur-xl rounded-3xl shadow-2xl border overflow-hidden animate-fade-in ${
          isDark 
            ? 'bg-gray-800/20 border-gray-700/30' 
            : 'bg-white/20 border-white/30'
        }`}>
          
          {/* Header */}
          <div className={`px-8 py-6 ${
            isDark 
              ? 'bg-gradient-to-r from-blue-600 to-purple-700' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } text-white`}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <CloudIcon className="w-8 h-8 animate-float" />
              <h1 className="text-3xl font-bold">Weather Predictor</h1>
              <SparklesIcon className="w-8 h-8 animate-float" style={{animationDelay: '0.5s'}} />
            </div>
            <p className="text-center text-blue-100 text-lg">
              Predict tomorrow's temperature with AI precision
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* City Temperature Section */}
            <div className={`rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${
              isDark 
                ? 'bg-blue-900/20 border-blue-700/30' 
                : 'bg-blue-50/80 border-blue-200'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <MapPinIcon className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Get Current Temperature
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    City Name
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name..."
                    className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 text-lg ${
                      isDark 
                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400 focus:border-blue-400' 
                        : 'bg-white/80 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                    } focus:ring-2 focus:border-transparent`}
                    onKeyPress={(e) => e.key === 'Enter' && fetchCurrentTemp()}
                  />
                  
                  {/* City Suggestions */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {popularCities.slice(0, 6).map(cityName => (
                      <button
                        key={cityName}
                        onClick={() => setCity(cityName)}
                        className={`px-3 py-1 text-sm rounded-full transition-all duration-200 ${
                          isDark
                            ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                            : 'bg-gray-200/80 text-gray-600 hover:bg-gray-300/80'
                        }`}
                      >
                        {cityName}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={fetchCurrentTemp}
                  disabled={loading}
                  className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                    isDark
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                  }`}
                >
                  <CloudIcon className="w-5 h-5" />
                  {loading ? 'Fetching...' : 'Use Current Temperature'}
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className={`flex-1 h-px ${
                isDark ? 'bg-gradient-to-r from-transparent via-gray-600 to-transparent' 
                       : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
              }`}></div>
              <span className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>OR</span>
              <div className={`flex-1 h-px ${
                isDark ? 'bg-gradient-to-r from-transparent via-gray-600 to-transparent' 
                       : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
              }`}></div>
            </div>

            {/* Manual Temperature Section */}
            <div className={`rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${
              isDark 
                ? 'bg-purple-900/20 border-purple-700/30' 
                : 'bg-purple-50/80 border-purple-200'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <FireIcon className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Manual Temperature Input
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Today's Temperature (°C)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={manualTemp}
                    onChange={(e) => setManualTemp(e.target.value)}
                    placeholder="e.g. 28.5"
                    className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 text-lg ${
                      isDark 
                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-400 focus:border-purple-400' 
                        : 'bg-white/80 border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500'
                    } focus:ring-2 focus:border-transparent`}
                    onKeyPress={(e) => e.key === 'Enter' && predictFromManualTemp()}
                  />
                </div>
                
                <button
                  onClick={predictFromManualTemp}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <SparklesIcon className="w-5 h-5" />
                  {loading ? 'Predicting...' : 'Predict Tomorrow\'s Temperature'}
                </button>
              </div>
            </div>

            {/* Results Section */}
            {result && (
              <div className={`rounded-2xl p-6 border-2 transition-all duration-500 ${
                result.includes('Error') || result.includes('Please') 
                  ? isDark ? 'bg-red-900/20 border-red-500/50 text-red-300' : 'bg-red-50 border-red-200 text-red-800'
                  : result.includes('Loading') || result.includes('Predicting')
                  ? isDark ? 'bg-yellow-900/20 border-yellow-500/50 text-yellow-300' : 'bg-yellow-50 border-yellow-200 text-yellow-800'
                  : isDark ? 'bg-green-900/20 border-green-500/50 text-green-300' : 'bg-green-50 border-green-200 text-green-800'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    result.includes('Error') || result.includes('Please')
                      ? 'bg-red-500'
                      : result.includes('Loading') || result.includes('Predicting')
                      ? 'bg-yellow-500 animate-pulse'
                      : 'bg-green-500'
                  }`}></div>
                  <p className="text-lg font-medium">{result}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-white/80'}`}>
            Powered by advanced machine learning algorithms
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;