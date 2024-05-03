// WeatherApp.jsx

import React, { useState } from "react";
import "./Weatherapp.css";

const Weatherapp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "e67ef490a9dc45169e4174953240305";

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch weather data");
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading data...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-cards">
          <div className="weather-card">
            <p>Temperature: {weatherData.current.temp_c}°C</p>
          </div>
          <div className="weather-card">
            <p>Humidity: {weatherData.current.humidity}%</p>
          </div>
          <div className="weather-card">
            <p>Condition: {weatherData.current.condition.text}</p>
          </div>
          <div className="weather-card">
            <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weatherapp;
