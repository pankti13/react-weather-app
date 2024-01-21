import React from "react";
import ShowDayTime from "./showDayTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
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
          <div id="mainIcon" className="col-5 d-flex justify-content-center">
            <WeatherIcon code={props.info.icon} />
          </div>{" "}
          <div className="col-6">
            <div className="row embeddedRow1">
              <div className="current">Currently</div>
            </div>
            <div className="row embeddedRow2">
              <div className="col-6 DisplayTemp">
                <WeatherTemp celsius={props.info.temperature} />
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