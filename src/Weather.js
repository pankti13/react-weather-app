import React from 'react';
import "./Weather.css";
import { WiHumidity } from "weather-icons-react";
import { WiStrongWind } from "weather-icons-react";

export default function Weather(){
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
          <div className="col-6 location">Patan, IN</div>
          <div className="col-6 location" id="dayDateTime">
            <span>Last Updated: </span>
            <span className="day">Monday,</span>{" "}
            <span className="date">May 31,</span>{" "}
            <span className="time">1:30</span>
          </div>{" "}
        </div>
        <div className="row RowThird">
          <div className="col-5 d-flex justify-content-center">
            <img
              src={`https://openweathermap.org/img/wn/10d@2x.png`}
              alt="clear"
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
                  <h1 id="current-temp">20</h1>
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
                <span id="maxMinTemp">20°C/4°C</span>
              </div>{" "}
              <div className="col-6 DisplayExtraInfo">
                <h4 id="description">Overcast Clouds</h4>
                <h6>
                  <WiHumidity size={24} color="#000" />
                  <strong>Humidity: </strong>
                  <span id="humid-data">4%</span>
                </h6>
                <h6>
                  <WiStrongWind size={24} color="#000" />
                  <strong>Wind Speed: </strong>
                  <span id="wind-data">2m/s</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}