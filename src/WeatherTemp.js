import React, { useState } from "react";
import "./styles/Weather.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("Celsius");

  function handleCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  function handleFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  if(unit==="Celsius"){
      return (
        <div className="tempWrapper">
          <h1 id="current-temp">{Math.round(props.celsius)}</h1>
          <span className="units">
              °C
            <span className="pipe">|</span>
            <a
              onClick={handleFahrenheit}
              href="/"
              id="fahrenheit-link"
            >
              F
            </a>
          </span>
        </div>
      );
  }
  else{
    let tempFahrenheit = (9 * props.celsius) / 5 + 32;
      return (
        <div className="tempWrapper">
          <h1 id="current-temp">{Math.round(tempFahrenheit)}</h1>
          <span className="units">
            °<a onClick={handleCelsius} href="/" id="celsius-link">
              C
            </a>
            <span className="pipe">|</span>
              F
          </span>
        </div>
      );
  }
}
