import React, {useState} from 'react';
import "./Weather.css";
import { WiHumidity } from "weather-icons-react";
import { WiStrongWind } from "weather-icons-react";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";

export default function Weather(props){
  const apiKey = "57b2c40fdae71a6ba41d72685e3226e2";

  // const [ready, setReady]=useState(false);
  const [weatherData, setWeatherData]= useState({ready:false});

  function displayWeather(response){
    // setReady(true);
    setWeatherData({
      ready: true,
      country: response.data.sys.country,
      date: "Wednesday 07:00",
      temperature: response.data.main.temp,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if(weatherData.ready){
    return (
      <div className="innerContainer">
        <h1 className="heading">React Weather Made Easy</h1>
        <form id="search-bar" className="rowFirst">
          <input
            type="text"
            id="cityName"
            className="search"
            placeholder="Enter a city name"
            autoComplete="off"
            autoFocus="on"
          />
          <input type="submit" defaultValue="Search" className="btn" />
        </form>
        <div className="row RowSecond">
          <div className="col-6 location">
            {props.cityName} , {weatherData.country}
          </div>
          <div className="col-6 location" id="dayDateTime">
            <span>Last Updated: </span>
            <span className="date">{weatherData.date}</span>{" "}
          </div>{" "}
        </div>
        <div className="row RowThird">
          <div className="col-5 d-flex justify-content-center">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              id="mainIcon"
            />
          </div>{" "}
          <div className="col-6">
            <div className="row embeddedRow1">
              <div className="current">Currently</div>
            </div>
            <div className="row embeddedRow2">
              <div className="col-6 DisplayTemp">
                <div className="tempWrapper">
                  <h1 id="current-temp">
                    {Math.round(weatherData.temperature)}
                  </h1>
                  <span className="units">
                    <a href="/" id="celsius-link">
                      C
                    </a>
                    <span className="pipe">|</span>
                    <a href="/" id="fahrenheit-link">
                      F
                    </a>
                  </span>
                </div>
                <span id="maxMinTemp">
                  {Math.round(weatherData.minTemp)}°C/
                  {Math.round(weatherData.maxTemp)}°C
                </span>
              </div>{" "}
              <div className="col-6 DisplayExtraInfo">
                <h4 id="description">{weatherData.description}</h4>
                <h6>
                  <WiHumidity size={24} color="#000" />
                  <strong>Humidity: </strong>
                  <span id="humid-data">
                    {Math.round(weatherData.humidity)}%
                  </span>
                </h6>
                <h6>
                  <WiStrongWind size={24} color="#000" />
                  <strong>Wind Speed: </strong>
                  <span id="wind-data">
                    {Math.round(weatherData.windSpeed)} km/h
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return (
      <RotatingLines
        visible={true}
        height="40"
        width="40"
        color="black"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}