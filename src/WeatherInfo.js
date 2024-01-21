import React from "react";
import ShowDayTime from "./showDayTime";
import { WiHumidity } from "weather-icons-react";
import { WiStrongWind } from "weather-icons-react";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <div className="row RowSecond">
          <div className="col-6 location">
            {props.info.city} , {props.info.country}
          </div>
          <div className="col-6 location" id="dayDateTime">
            <span>Last Updated: </span>
            <ShowDayTime date={props.info.date} />
          </div>{" "}
        </div>
        <div className="row RowThird">
          <div className="col-5 d-flex justify-content-center">
            <img
              src={props.info.icon}
              alt={props.info.description}
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
                    {Math.round(props.info.temperature)}
                  </h1>
                  <span className="units">
                    <a href="/" id="celsius-link">
                      °C
                    </a>
                    <span className="pipe">|</span>
                    <a href="/" id="fahrenheit-link">
                      F
                    </a>
                  </span>
                </div>
                <span id="maxMinTemp">
                  {Math.round(props.info.minTemp)}°C/
                  {Math.round(props.info.maxTemp)}°C
                </span>
              </div>{" "}
              <div className="col-6 DisplayExtraInfo">
                <h4 id="description">{props.info.description}</h4>
                <h6>
                  <WiHumidity size={24} color="#000" />
                  <strong>Humidity: </strong>
                  <span id="humid-data">
                    {Math.round(props.info.humidity)}%
                  </span>
                </h6>
                <h6>
                  <WiStrongWind size={24} color="#000" />
                  <strong>Wind Speed: </strong>
                  <span id="wind-data">
                    {Math.round(props.info.windSpeed)} km/h
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}