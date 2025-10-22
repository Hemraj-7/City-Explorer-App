import React, { useState, useEffect } from "react";
import { Droplets, Wind, Thermometer, Gauge } from "lucide-react";

const OPEN_WEATHER_API_KEY = import.meta.env.VITE_WEATHER_KEY;

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState({
    condition: "",
    icon: "",
    temperature: 0,
    feelsLike: 0,
    humidity: 0,
    wind: 0,
    pressure: 0,
    tempMin: 0,
    tempMax: 0,
  });

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
        );
        const data = await response.json();
        if (data && data.weather && data.weather.length > 0) {
          setWeather({
            condition: data.weather[0].description,
            icon: data.weather[0].icon,  // store icon code here
            temperature: Math.round(data.main.temp),
            feelsLike: Math.round(data.main.feels_like),
            humidity: data.main.humidity,
            wind: data.wind.speed,
            pressure: data.main.pressure,
            tempMin: Math.round(data.main.temp_min),
            tempMax: Math.round(data.main.temp_max),
          });
        } else {
          setWeather((w) => ({ ...w, condition: "No data" }));
        }
      } catch (error) {
        console.error("Failed to fetch weather", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03]">
      {/* Top Section */}
      <div className="bg-gradient-to-tr from-orange-400 to-orange-500 px-6 pt-6 pb-4 text-white relative">
        <div className="absolute top-5 right-6">
          <span className="bg-white/20 rounded-full px-4 py-1 text-sm font-semibold backdrop-blur-md flex items-center gap-2">
            {weather.icon ? (
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.condition}
                className="w-6 h-6"
              />
            ) : (
              <span className="text-orange-200 font-bold">☀️</span>
            )}
            {weather.condition.charAt(0).toUpperCase() + weather.condition.slice(1)}
          </span>
        </div>
        <h2 className="text-xl font-semibold">Weather</h2>
        <p className="text-base opacity-90">{weather.condition}</p>

        <div className="flex flex-col mt-4">
          <div className="flex flex-col items-center gap-4">
            {weather.icon ? (
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.condition}
                className="w-12 h-12 mb-2"
              />
            ) : (
              <div className="w-12 h-12 bg-orange-300/50 rounded-full mb-2 shadow-lg"></div>
            )}
            <div>
              <h1 className="text-5xl font-bold leading-none">{weather.temperature}°</h1>
              <p className="text-base opacity-90">
                Feels like {weather.feelsLike}°
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-4 px-4 p-4 bg-white">
        <div className="flex flex-col justify-center items-center bg-blue-50 rounded-xl p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Droplets className="text-blue-500 mb-1" size={30} />
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Humidity</span>
              <span className="text-md font-semibold">{weather.humidity}%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-blue-50 rounded-xl p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Wind className="text-blue-500 mb-1" size={30} />
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Wind</span>
              <span className="text-md font-semibold">{weather.wind} m/s</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-orange-50 rounded-xl p-1 shadow-sm">
          <div className="flex items-center gap-2">
            <Gauge className="text-orange-500" size={30} />
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Pressure</span>
              <span className="text-md font-semibold">{weather.pressure} hPa</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-cyan-50 rounded-xl p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Thermometer className="text-cyan-500 mb-1" size={30} />
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Temp Range</span>
              <span className="text-md font-semibold">
                {weather.tempMin}° - {weather.tempMax}°
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
