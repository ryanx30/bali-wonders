import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./weather.css";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);

  const apiKey = 'd8e21f9d6501a3306cbfd4e965cd48d0';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
        if (response.data.weather && response.data.weather.length > 0) {
          const iconCode = response.data.weather[0].icon;
          const description = response.data.weather[0].description;
          setWeatherInfo({ icon: iconCode, description: description });
        }
      } catch (error) {
        setError('Location not found or API request failed.');
        console.error('Error fetching the weather data:', error);
      }
    };

    if (location) {
      fetchData();
    }
  }, [location, url]);

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setLocation('');
    }
  };

  const renderTemperature = () => {
    if (data.main) {
      const celsius = ((data.main.temp - 32) * 5) / 9;
      return <h1>{celsius.toFixed()}°C</h1>;
    }
    return null;
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        {error && <p className="error">{error}</p>}
        <div className="top">
          <div className="location">
            <h2>{data.name}</h2>
          </div>
          <div className="temp">
            {renderTemperature()}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            {weatherInfo && (
              <div className="weather-info">
                <div className="description">
                  <img src={`https://openweathermap.org/img/w/${weatherInfo.icon}.png`} alt="Weather Icon" />
                  <p>{weatherInfo.description}</p>
                </div>
              </div>
            )}
            <div className="feels">
              {data.main ? <p className='bold'>{((data.main.feels_like - 32) * 5 / 9).toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Weather;
