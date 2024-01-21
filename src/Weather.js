import React, {useState} from 'react';
import WeatherInfo from "./WeatherInfo";
import "./styles/Weather.css";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";

export default function Weather(props){
  
  // const [ready, setReady]=useState(false);
  const [cityName, setCityName]= useState(props.defaultCity);
  const [weatherData, setWeatherData]= useState({ready:false});
  
  function displayWeather(response){
    // setReady(true);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }
  
  function search(){
    const apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCityName(event.target.value);
  }

  if(weatherData.ready){
    return (
      <div className="innerContainer">
        <h1 className="heading">React Weather Made Easy</h1>
        <form onSubmit={handleSubmit} id="search-bar" className="rowFirst">
          <input
            type="text"
            id="cityName"
            onChange={handleCityChange}
            className="search"
            placeholder="Enter a city name"
            autoComplete="off"
            autoFocus="on"
          />
          <input type="submit" defaultValue="Search" className="btn" />
        </form>
        <WeatherInfo info={weatherData}/>
      </div>
    );
  }
  else{
    search();
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