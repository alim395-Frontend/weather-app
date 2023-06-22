import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { weatherIcons } from "../assets/icons/IconIndex";

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [city, setCity] = useState("");
  const apiKey = "1ffefd6009614b36a9e43225232206";

  const getIconPath = (conditionCode: number, isNight: boolean) => {
    let iN;
    if (isNight) {
      iN = weatherIcons.night[conditionCode];
    } else {
      iN = weatherIcons.day[conditionCode];
    }

    const iconName = iN;

    return `${iconName}`;
  };

  const isNight = false; // determine if it is night based on the current time
  const iconPath = weatherData?.current
    ? getIconPath(weatherData.current.condition.code, isNight)
    : "";

  const fetchData = async () => {
    try {
      const [currentResponse, forecastResponse] = await Promise.all([
        axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        ),
        axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`
        ),
      ]);
      setWeatherData(currentResponse.data);
      setForecastData(forecastResponse.data.forecast.forecastday);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleClick}>Get Weather</button>
      {weatherData ? (
        <div>
          <h2>{weatherData.location.name}</h2>
          <img src={iconPath} alt="Weather Icon" />
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      ) : (
        <div>Loading weather...</div>
      )}
      {forecastData ? (
        <div className="forecast-container">
          <div className="forecast-header">
            <h2>Forecast</h2>
          </div>
          {forecastData.map((forecast: any) => (
            <div key={forecast.date} className="forecast-item">
              <p>Date: {forecast.date}</p>
              <p>Max Temperature: {forecast.day.maxtemp_c}°C</p>
              <p>Min Temperature: {forecast.day.mintemp_c}°C</p>
              <p>Condition: {forecast.day.condition.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading forecast...</div>
      )}
      <div>
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </div>
      <div>
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          <img
            src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
            alt="Weather data by WeatherAPI.com"
          />
        </a>
      </div>
    </div>
  );
};

export default Weather;
