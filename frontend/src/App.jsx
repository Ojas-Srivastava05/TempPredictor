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
  CalendarDaysIcon,
  BeakerIcon,
  CogIcon,
  InformationCircleIcon,
  StarIcon,
  HeartIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  DocumentChartBarIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  WifiIcon,
  SignalIcon,
  BanknotesIcon,
  TrophyIcon,
  GiftIcon,
  MusicalNoteIcon,
  FilmIcon,
  CameraIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  RadioIcon,
  TvIcon,
  VideoCameraIcon,
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  ViewColumnsIcon,
  TableCellsIcon,
  ListBulletIcon,
  DocumentTextIcon,
  FolderIcon,
  ArchiveBoxIcon,
  InboxIcon,
  PaperClipIcon,
  LinkIcon,
  ShareIcon,
  BookmarkIcon,
  TagIcon,
  FlagIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  UsersIcon,
  BuildingOfficeIcon,
  HomeIcon,
  MapIcon,
  GlobeAmericasIcon,
  TruckIcon,
  RssIcon,
  NewspaperIcon,
  MegaphoneIcon,
  HandRaisedIcon,
  FaceSmileIcon,
  HeartIcon as HeartIconSolid,
  HandThumbUpIcon,
  ChatBubbleOvalLeftIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon,
  LockClosedIcon,
  KeyIcon,
  ShieldExclamationIcon,
  EyeSlashIcon,
  FingerPrintIcon,
  CreditCardIcon,
  BanknotesIcon as BanknotesIconOutline,
  CalculatorIcon,
  ScaleIcon,
  ChartPieIcon,
  PresentationChartBarIcon,
  CursorArrowRaysIcon,
  PuzzlePieceIcon,
  SwatchIcon,
  PaintBrushIcon,
  PhotoIcon,
  GifIcon,
  FilmIcon as FilmIconOutline,
  BookOpenIcon,
  AcademicCapIcon as AcademicCapIconOutline,
  BeakerIcon as BeakerIconOutline,
  MicrophoneIcon as MicrophoneIconOutline,
  SpeakerWaveIcon as SpeakerWaveIconOutline,
  MusicalNoteIcon as MusicalNoteIconOutline,
  PlayCircleIcon,
  StopIcon,
  PauseCircleIcon,
  SpeakerXMarkIcon,
  VideoCameraSlashIcon,
  PhoneXMarkIcon,
  ChatBubbleBottomCenterTextIcon,
  LanguageIcon,
  TranslateIcon,
  GlobeEuropeAfricaIcon,
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  CurrencyYenIcon,
  CurrencyRupeeIcon,
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  ReceiptRefundIcon,
  TicketIcon,
  GiftTopIcon,
  CakeIcon,
  TrophyIcon as TrophyIconOutline,
  StarIcon as StarIconOutline,
  LightBulbIcon as LightBulbIconOutline,
  BoltIcon as BoltIconOutline,
  FireIcon as FireIconOutline,
  SunIcon as SunIconOutline,
  MoonIcon as MoonIconOutline,
  CloudIcon as CloudIconOutline,
  GlobeAltIcon as GlobeAltIconOutline
} from '@heroicons/react/24/outline';

// Utility functions for animations and effects
const useParticles = (isDark) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 15000);
    return () => clearInterval(interval);
  }, [isDark]);

  return particles;
};

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-95
        ${isDark 
          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-yellow-500/25' 
          : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-500/25'
        }
        hover:shadow-xl backdrop-blur-sm border border-white/20
      `}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <SunIcon className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${isDark ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
        <MoonIcon className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${isDark ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
      </div>
    </button>
  );
};

const ParticleBackground = ({ particles, isDark }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-1 h-1 rounded-full animate-pulse ${
            isDark ? 'bg-blue-400' : 'bg-purple-300'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.speed}s`,
          }}
        />
      ))}
    </div>
  );
};

const WeatherIcon = ({ weather, size = "w-8 h-8" }) => {
  const iconMap = {
    sunny: SunIcon,
    cloudy: CloudIcon,
    rainy: CloudIcon,
    stormy: BoltIcon,
    snowy: CloudIcon,
    windy: CloudIcon,
    hot: FireIcon,
    cold: SunIcon,
  };
  
  const IconComponent = iconMap[weather] || CloudIcon;
  return <IconComponent className={size} />;
};

const LoadingSpinner = ({ isDark }) => {
  return (
    <div className="flex items-center justify-center">
      <div className={`animate-spin rounded-full h-8 w-8 border-4 ${
        isDark ? 'border-blue-400 border-t-transparent' : 'border-purple-500 border-t-transparent'
      }`}></div>
    </div>
  );
};

const GradientText = ({ children, isDark, className = "" }) => {
  return (
    <span className={`
      ${className}
      bg-gradient-to-r ${isDark 
        ? 'from-blue-400 via-purple-400 to-pink-400' 
        : 'from-purple-600 via-blue-600 to-indigo-600'
      } 
      bg-clip-text text-transparent font-bold
    `}>
      {children}
    </span>
  );
};

const FeatureCard = ({ icon: Icon, title, description, isDark, delay = 0 }) => {
  return (
    <div 
      className={`
        p-6 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2
        ${isDark 
          ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50' 
          : 'bg-white/50 border-gray-200/50 hover:bg-white/70'
        }
        border backdrop-blur-xl shadow-xl hover:shadow-2xl
        animate-fade-in-up
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`
        w-12 h-12 rounded-full flex items-center justify-center mb-4
        ${isDark 
          ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
          : 'bg-gradient-to-r from-purple-500 to-pink-500'
        }
      `}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
        {description}
      </p>
    </div>
  );
};

const StatCard = ({ label, value, icon: Icon, isDark, trend }) => {
  return (
    <div className={`
      p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105
      ${isDark 
        ? 'bg-gray-800/30 border-gray-700/30' 
        : 'bg-white/30 border-gray-200/30'
      }
    `}>
      <div className="flex items-center justify-between mb-2">
        <Icon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-purple-500'}`} />
        {trend && (
          <div className={`flex items-center ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? <ArrowTrendingUpIcon className="w-4 h-4" /> : <ArrowTrendingDownIcon className="w-4 h-4" />}
            <span className="text-xs ml-1">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
        {value}
      </div>
      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {label}
      </div>
    </div>
  );
};

const AdvancedChart = ({ data, isDark }) => {
  const chartData = useMemo(() => {
    return data.map((point, index) => ({
      ...point,
      x: (index / (data.length - 1)) * 100,
      y: ((point.value - Math.min(...data.map(d => d.value))) / 
          (Math.max(...data.map(d => d.value)) - Math.min(...data.map(d => d.value)))) * 100
    }));
  }, [data]);

  return (
    <div className={`
      p-6 rounded-2xl border backdrop-blur-xl
      ${isDark 
        ? 'bg-gray-800/50 border-gray-700/50' 
        : 'bg-white/50 border-gray-200/50'
      }
    `}>
      <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Temperature Trend
      </h3>
      <div className="relative h-48 w-full">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#3B82F6" : "#8B5CF6"} stopOpacity="0.3" />
              <stop offset="100%" stopColor={isDark ? "#3B82F6" : "#8B5CF6"} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map(y => (
            <line 
              key={y} 
              x1="0" 
              y1={y} 
              x2="100" 
              y2={y} 
              stroke={isDark ? "#374151" : "#E5E7EB"} 
              strokeWidth="0.2"
            />
          ))}
          
          {/* Chart line */}
          <polyline
            fill="none"
            stroke={isDark ? "#3B82F6" : "#8B5CF6"}
            strokeWidth="2"
            points={chartData.map(point => `${point.x},${100 - point.y}`).join(' ')}
            className="animate-draw-line"
          />
          
          {/* Chart area */}
          <polygon
            fill="url(#chartGradient)"
            points={`0,100 ${chartData.map(point => `${point.x},${100 - point.y}`).join(' ')} 100,100`}
            className="animate-fill-area"
          />
          
          {/* Data points */}
          {chartData.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={100 - point.y}
              r="1"
              fill={isDark ? "#60A5FA" : "#A855F7"}
              className="animate-pulse"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

const WeatherDetails = ({ weatherData, isDark }) => {
  const details = [
    { label: "Humidity", value: `${weatherData?.humidity || 65}%`, icon: CloudIcon },
    { label: "Wind Speed", value: `${weatherData?.windSpeed || 12} km/h`, icon: BoltIcon },
    { label: "Pressure", value: `${weatherData?.pressure || 1013} hPa`, icon: GlobeAltIcon },
    { label: "Visibility", value: `${weatherData?.visibility || 10} km`, icon: EyeIcon },
    { label: "UV Index", value: weatherData?.uvIndex || 6, icon: SunIcon },
    { label: "Feels Like", value: `${weatherData?.feelsLike || 28}°C`, icon: FireIcon },
  ];

  return (
    <div className={`
      p-6 rounded-2xl border backdrop-blur-xl
      ${isDark 
        ? 'bg-gray-800/50 border-gray-700/50' 
        : 'bg-white/50 border-gray-200/50'
      }
    `}>
      <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Weather Details
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {details.map((detail, index) => (
          <div key={detail.label} className="flex items-center space-x-3">
            <detail.icon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-purple-500'}`} />
            <div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {detail.label}
              </div>
              <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {detail.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HourlyForecast = ({ hourlyData, isDark }) => {
  const hours = Array.from({ length: 12 }, (_, i) => {
    const hour = new Date();
    hour.setHours(hour.getHours() + i);
    return {
      time: hour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      temp: Math.round(25 + Math.sin(i * 0.5) * 5),
      icon: ['sunny', 'cloudy', 'rainy'][Math.floor(Math.random() * 3)],
      precipitation: Math.round(Math.random() * 100),
    };
  });

  return (
    <div className={`
      p-6 rounded-2xl border backdrop-blur-xl
      ${isDark 
        ? 'bg-gray-800/50 border-gray-700/50' 
        : 'bg-white/50 border-gray-200/50'
      }
    `}>
      <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        24-Hour Forecast
      </h3>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {hours.map((hour, index) => (
            <div 
              key={index} 
              className={`
                flex flex-col items-center p-3 rounded-xl min-w-[80px] transition-all duration-300 hover:scale-105
                ${isDark 
                  ? 'bg-gray-700/30 hover:bg-gray-700/50' 
                  : 'bg-gray-100/30 hover:bg-gray-100/50'
                }
              `}
            >
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                {hour.time}
              </div>
              <WeatherIcon weather={hour.icon} size="w-6 h-6" />
              <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mt-2`}>
                {hour.temp}°
              </div>
              <div className={`text-xs ${isDark ? 'text-blue-400' : 'text-purple-500'} mt-1`}>
                {hour.precipitation}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WeeklyForecast = ({ weeklyData, isDark }) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => ({
    day,
    high: Math.round(25 + Math.random() * 10),
    low: Math.round(15 + Math.random() * 8),
    icon: ['sunny', 'cloudy', 'rainy', 'stormy'][Math.floor(Math.random() * 4)],
    precipitation: Math.round(Math.random() * 100),
  }));

  return (
    <div className={`
      p-6 rounded-2xl border backdrop-blur-xl
      ${isDark 
        ? 'bg-gray-800/50 border-gray-700/50' 
        : 'bg-white/50 border-gray-200/50'
      }
    `}>
      <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        7-Day Forecast
      </h3>
      <div className="space-y-3">
        {days.map((day, index) => (
          <div 
            key={index} 
            className={`
              flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:scale-[1.02]
              ${isDark 
                ? 'bg-gray-700/30 hover:bg-gray-700/50' 
                : 'bg-gray-100/30 hover:bg-gray-100/50'
              }
            `}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {day.day}
              </div>
              <WeatherIcon weather={day.icon} size="w-6 h-6" />
              <div className={`text-xs ${isDark ? 'text-blue-400' : 'text-purple-500'}`}>
                {day.precipitation}%
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {day.low}°
              </span>
              <div className={`w-16 h-1 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'} relative`}>
                <div 
                  className={`absolute left-0 top-0 h-full rounded-full ${
                    isDark ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}
                  style={{ width: `${(day.high - day.low) * 3}%` }}
                />
              </div>
              <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {day.high}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AIInsights = ({ predictionData, isDark }) => {
  const insights = [
    {
      icon: LightBulbIcon,
      title: "Smart Prediction",
      description: "Our AI model uses advanced machine learning algorithms trained on historical weather patterns to provide accurate forecasts.",
      accuracy: "94.5%"
    },
    {
      icon: ChartBarIcon,
      title: "Data Analysis",
      description: "Real-time analysis of atmospheric conditions, temperature trends, and meteorological data from multiple sources.",
      accuracy: "98.2%"
    },
    {
      icon: CpuChipIcon,
      title: "Neural Network",
      description: "Deep learning neural networks process thousands of data points to deliver precise temperature predictions.",
      accuracy: "96.8%"
    },
    {
      icon: RocketLaunchIcon,
      title: "Performance",
      description: "Optimized algorithms ensure lightning-fast predictions with minimal computational overhead.",
      accuracy: "99.1%"
    }
  ];

  return (
    <div className={`
      p-6 rounded-2xl border backdrop-blur-xl
      ${isDark 
        ? 'bg-gray-800/50 border-gray-700/50' 
        : 'bg-white/50 border-gray-200/50'
      }
    `}>
      <div className="flex items-center space-x-3 mb-6">
        <CpuChipIcon className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-purple-500'}`} />
        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          AI Insights
        </h3>
      </div>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className={`
              p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02]
              ${isDark 
                ? 'bg-gray-700/30 border-gray-600/30 hover:bg-gray-700/50' 
                : 'bg-gray-50/30 border-gray-200/30 hover:bg-gray-50/50'
              }
            `}
          >
            <div className="flex items-start space-x-4">
              <div className={`
                p-2 rounded-lg
                ${isDark 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }
              `}>
                <insight.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {insight.title}
                  </h4>
                  <span className={`
                    text-xs px-2 py-1 rounded-full font-medium
                    ${isDark 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-green-500/20 text-green-600'
                    }
                  `}>
                    {insight.accuracy}
                  </span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LocationSearch = ({ onLocationSelect, isDark }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const popularCities = [
    { name: 'New York', country: 'US', lat: 40.7128, lon: -74.0060 },
    { name: 'London', country: 'UK', lat: 51.5074, lon: -0.1278 },
    { name: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503 },
    { name: 'Paris', country: 'FR', lat: 48.8566, lon: 2.3522 },
    { name: 'Sydney', country: 'AU', lat: -33.8688, lon: 151.2093 },
    { name: 'Dubai', country: 'AE', lat: 25.2048, lon: 55.2708 },
    { name: 'Mumbai', country: 'IN', lat: 19.0760, lon: 72.8777 },
    { name: 'Singapore', country: 'SG', lat: 1.3521, lon: 103.8198 },
  ];

  useEffect(() => {
    if (searchTerm.length > 2) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const filtered = popularCities.filter(city =>
          city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          city.country.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSuggestions(filtered);
        setIsSearching(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <div className={`
      p-6 rounded-2xl border backdrop-blur-xl
      ${isDark 
        ? 'bg-gray-800/50 border-gray-700/50' 
        : 'bg-white/50 border-gray-200/50'
      }
    `}>
      <div className="flex items-center space-x-3 mb-4">
        <MapPinIcon className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-purple-500'}`} />
        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Location Search
        </h3>
      </div>
      
      <div className="relative mb-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a city..."
            className={`
              w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200
              ${isDark 
                ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
              }
              focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-blue-500/20' : 'focus:ring-purple-500/20'}
            `}
          />
          <MagnifyingGlassIcon className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`} />
          {isSearching && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <LoadingSpinner isDark={isDark} />
            </div>
          )}
        </div>
        
        {suggestions.length > 0 && (
          <div className={`
            absolute top-full left-0 right-0 mt-2 rounded-xl border backdrop-blur-xl z-10
            ${isDark 
              ? 'bg-gray-800/90 border-gray-700' 
              : 'bg-white/90 border-gray-200'
            }
            shadow-xl max-h-60 overflow-y-auto
          `}>
            {suggestions.map((city, index) => (
              <button
                key={index}
                onClick={() => {
                  onLocationSelect(city);
                  setSearchTerm('');
                  setSuggestions([]);
                }}
                className={`
                  w-full text-left px-4 py-3 transition-colors duration-200
                  ${isDark 
                    ? 'hover:bg-gray-700/50 text-white' 
                    : 'hover:bg-gray-100/50 text-gray-900'
                  }
                  ${index === 0 ? 'rounded-t-xl' : ''}
                  ${index === suggestions.length - 1 ? 'rounded-b-xl' : ''}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{city.name}</span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {city.country}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div>
        <h4 className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
          Popular Cities
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {popularCities.slice(0, 6).map((city, index) => (
            <button
              key={index}
              onClick={() => onLocationSelect(city)}
              className={`
                text-left p-2 rounded-lg transition-all duration-200 hover:scale-105
                ${isDark 
                  ? 'bg-gray-700/30 hover:bg-gray-700/50 text-gray-300' 
                  : 'bg-gray-100/30 hover:bg-gray-100/50 text-gray-700'
                }
              `}
            >
              <div className="font-medium text-sm">{city.name}</div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {city.country}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const AdvancedMetrics = ({ isDark }) => {
  const metrics = [
    { label: "Prediction Accuracy", value: "94.5%", icon: ChartBarIcon, trend: 2.3 },
    { label: "Response Time", value: "0.3s", icon: BoltIcon, trend: -5.2 },
    { label: "Data Sources", value: "127", icon: GlobeAltIcon, trend: 12.1 },
    { label: "API Calls", value: "50.2K", icon: CommandLineIcon, trend: 8.7 },
    { label: "Active Users", value: "12.8K", icon: UsersIcon, trend: 15.3 },
    { label: "Success Rate", value: "99.8%", icon: CheckCircleIcon, trend: 0.5 },
  ];

  return (
    <div className={`
      p-6 rounded-2xl border backdrop-blur-xl
      ${isDark 
        ? 'bg-gray-800/50 border-gray-700/50' 
        : 'bg-white/50 border-gray-200/50'
      }
    `}>
      <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        System Metrics
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <StatCard
            key={index}
            label={metric.label}
            value={metric.value}
            icon={metric.icon}
            isDark={isDark}
            trend={metric.trend}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [city, setCity] = useState('Delhi');
  const [manualTemp, setManualTemp] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const particles = useParticles(isDark);

  // Chart data for demonstration
  const chartData = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => ({
      day: i,
      value: 20 + Math.sin(i * 0.8) * 8 + Math.random() * 4
    }));
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

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
      
      setWeatherData({
        city: data.city,
        currentTemp: data.current_temp,
        predictedTemp: data.predicted_tomorrow,
        humidity: 65 + Math.random() * 20,
        windSpeed: 10 + Math.random() * 15,
        pressure: 1010 + Math.random() * 20,
        visibility: 8 + Math.random() * 4,
        uvIndex: Math.floor(Math.random() * 11),
        feelsLike: data.current_temp + (Math.random() - 0.5) * 4,
      });
      
      setResult(`City: ${data.city} — Current: ${data.current_temp}°C — Predicted tomorrow: ${data.predicted_tomorrow}°C`);
    } catch (error) {
      setResult(`Network error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

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

  const handleLocationSelect = useCallback((location) => {
    setSelectedLocation(location);
    setCity(location.name);
  }, []);

  return (
    <div className={`
      min-h-screen transition-all duration-1000 relative overflow-x-hidden
      ${isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }
    `}>
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className={`
          absolute inset-0 bg-gradient-to-r 
          ${isDark 
            ? 'from-blue-600/20 via-purple-600/20 to-pink-600/20' 
            : 'from-purple-400/20 via-pink-400/20 to-blue-400/20'
          }
          animate-gradient-x
        `} />
      </div>

      {/* Particle Background */}
      <ParticleBackground particles={particles} isDark={isDark} />

      {/* Theme Toggle */}
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`
                p-4 rounded-full
                ${isDark 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }
                shadow-2xl animate-bounce
              `}>
                <CloudIcon className="w-12 h-12 text-white" />
              </div>
              <h1 className={`
                text-6xl font-black tracking-tight
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                <GradientText isDark={isDark}>Weather AI</GradientText>
              </h1>
              <div className={`
                p-4 rounded-full
                ${isDark 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }
                shadow-2xl animate-bounce
              `} style={{ animationDelay: '0.5s' }}>
                <SparklesIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <p className={`
              text-2xl mb-6 max-w-3xl mx-auto leading-relaxed
              ${isDark ? 'text-gray-300' : 'text-gray-600'}
            `}>
              Experience the future of weather prediction with our revolutionary AI-powered platform
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <ClockIcon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-purple-500'}`} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {currentTime.toLocaleTimeString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <GlobeAltIcon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-purple-500'}`} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {currentTime.toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Main Prediction Interface */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className={`
              bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden
              ${isDark ? 'shadow-blue-500/10' : 'shadow-purple-500/10'}
              animate-fade-in-up
            `}>
              {/* Header */}
              <div className={`
                px-8 py-6 text-white
                ${isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600'
                }
              `}>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <CloudIcon className="w-8 h-8 animate-pulse" />
                  <h2 className="text-3xl font-bold">Weather Predictor</h2>
                  <SparklesIcon className="w-8 h-8 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <p className="text-center text-blue-100 text-lg">
                  Predict tomorrow's temperature with AI precision
                </p>
              </div>

              <div className="p-8 space-y-8">
                {/* City Temperature Section */}
                <div className={`
                  rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                  ${isDark 
                    ? 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20 hover:border-blue-400/30' 
                    : 'bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border-blue-200/50 hover:border-blue-300/50'
                  }
                `}>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPinIcon className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      Get Current Temperature
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        City Name
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name..."
                        className={`
                          w-full px-4 py-3 rounded-xl border transition-all duration-200 text-lg
                          ${isDark 
                            ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                            : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                          }
                          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-transparent
                        `}
                        onKeyPress={(e) => e.key === 'Enter' && fetchCurrentTemp()}
                      />
                    </div>
                    
                    <button
                      onClick={fetchCurrentTemp}
                      disabled={loading}
                      className={`
                        w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95
                        disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2
                        ${isDark 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' 
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                        }
                        text-white shadow-xl hover:shadow-2xl
                      `}
                    >
                      {loading ? (
                        <LoadingSpinner isDark={isDark} />
                      ) : (
                        <>
                          <CloudIcon className="w-5 h-5" />
                          Use Current Temperature
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${
                    isDark ? 'via-gray-600' : 'via-gray-300'
                  } to-transparent`}></div>
                  <span className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>OR</span>
                  <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${
                    isDark ? 'via-gray-600' : 'via-gray-300'
                  } to-transparent`}></div>
                </div>

                {/* Manual Temperature Section */}
                <div className={`
                  rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                  ${isDark 
                    ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-400/30' 
                    : 'bg-gradient-to-r from-purple-50/50 to-pink-50/50 border-purple-200/50 hover:border-purple-300/50'
                  }
                `}>
                  <div className="flex items-center gap-3 mb-4">
                    <FireIcon className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      Manual Temperature Input
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Today's Temperature (°C)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={manualTemp}
                        onChange={(e) => setManualTemp(e.target.value)}
                        placeholder="e.g. 28.5"
                        className={`
                          w-full px-4 py-3 rounded-xl border transition-all duration-200 text-lg
                          ${isDark 
                            ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                            : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                          }
                          focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-transparent
                        `}
                        onKeyPress={(e) => e.key === 'Enter' && predictFromManualTemp()}
                      />
                    </div>
                    
                    <button
                      onClick={predictFromManualTemp}
                      disabled={loading}
                      className={`
                        w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95
                        disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2
                        ${isDark 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                        }
                        text-white shadow-xl hover:shadow-2xl
                      `}
                    >
                      {loading ? (
                        <LoadingSpinner isDark={isDark} />
                      ) : (
                        <>
                          <SparklesIcon className="w-5 h-5" />
                          Predict Tomorrow's Temperature
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Results Section */}
                {result && (
                  <div className={`
                    rounded-2xl p-6 border-2 transition-all duration-500 animate-fade-in-up
                    ${result.includes('Error') || result.includes('Please') 
                      ? isDark 
                        ? 'bg-red-500/10 border-red-500/30 text-red-400' 
                        : 'bg-red-50/80 border-red-200/80 text-red-800'
                      : result.includes('Loading') || result.includes('Predicting')
                      ? isDark 
                        ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' 
                        : 'bg-yellow-50/80 border-yellow-200/80 text-yellow-800'
                      : isDark 
                        ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                        : 'bg-green-50/80 border-green-200/80 text-green-800'
                    }
                  `}>
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${
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
          </div>

          {/* Advanced Features Toggle */}
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`
                px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                ${isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                }
                text-white shadow-xl hover:shadow-2xl
              `}
            >
              {showAdvanced ? 'Hide Advanced Features' : 'Show Advanced Features'}
            </button>
          </div>

          {/* Advanced Features */}
          {showAdvanced && (
            <div className="space-y-12 animate-fade-in-up">
              {/* Weather Details and Charts Row */}
              {weatherData && (
                <div className="grid lg:grid-cols-2 gap-8">
                  <WeatherDetails weatherData={weatherData} isDark={isDark} />
                  <AdvancedChart data={chartData} isDark={isDark} />
                </div>
              )}

              {/* Forecast Sections */}
              <div className="grid lg:grid-cols-2 gap-8">
                <HourlyForecast isDark={isDark} />
                <WeeklyForecast isDark={isDark} />
              </div>

              {/* Location Search and AI Insights */}
              <div className="grid lg:grid-cols-2 gap-8">
                <LocationSearch onLocationSelect={handleLocationSelect} isDark={isDark} />
                <AIInsights isDark={isDark} />
              </div>

              {/* Advanced Metrics */}
              <AdvancedMetrics isDark={isDark} />

              {/* Feature Cards */}
              <div>
                <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <GradientText isDark={isDark}>Powerful Features</GradientText>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <FeatureCard
                    icon={CpuChipIcon}
                    title="AI-Powered Predictions"
                    description="Advanced machine learning algorithms analyze weather patterns to provide accurate temperature forecasts with 94.5% accuracy."
                    isDark={isDark}
                    delay={0}
                  />
                  <FeatureCard
                    icon={BoltIcon}
                    title="Real-time Processing"
                    description="Lightning-fast API responses with sub-second processing times for instant weather predictions and analysis."
                    isDark={isDark}
                    delay={100}
                  />
                  <FeatureCard
                    icon={GlobeAltIcon}
                    title="Global Coverage"
                    description="Access weather data for thousands of cities worldwide with comprehensive coverage and localized predictions."
                    isDark={isDark}
                    delay={200}
                  />
                  <FeatureCard
                    icon={ChartBarIcon}
                    title="Advanced Analytics"
                    description="Detailed weather analytics with trend analysis, historical comparisons, and predictive insights."
                    isDark={isDark}
                    delay={300}
                  />
                  <FeatureCard
                    icon={ShieldCheckIcon}
                    title="Reliable & Secure"
                    description="Enterprise-grade security and 99.9% uptime guarantee ensure your weather data is always available."
                    isDark={isDark}
                    delay={400}
                  />
                  <FeatureCard
                    icon={RocketLaunchIcon}
                    title="Performance Optimized"
                    description="Highly optimized infrastructure delivers exceptional performance with minimal latency worldwide."
                    isDark={isDark}
                    delay={500}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className={`text-center mt-16 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <SparklesIcon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-purple-500'}`} />
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Powered by advanced machine learning algorithms
              </p>
              <SparklesIcon className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-pink-500'}`} />
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <HeartIcon className={`w-4 h-4 ${isDark ? 'text-red-400' : 'text-red-500'}`} />
                <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                  Made with love for weather enthusiasts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;