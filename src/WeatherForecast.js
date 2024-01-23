import React, { useState, useEffect} from "react";
import "./styles/WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

export default function WeatherForecast(props){

  const [loaded, setLoaded]=useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleForecast(response){
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  // whever the co-ordinates change, we want to set setLoaded to false
  useEffect(()=>{
    setLoaded(false);
  },[props.coordinates])
  
  if(loaded){
    return (
      <div className="weather-forecast">
        <div className="row rowFourth justify-content-center">
          <div className="thisWeek"> This Week</div>
        </div>
        <div className="row rowFifth justify-content-center">
          {
            forecastData.map((dailyForecast, index)=>{
              if(index>=1 && index<=5){
                return <WeatherForecastDay data={dailyForecast} />;
              }
            })
          }
        </div>
      </div>
    );
  } 
  else{
    const apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);

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