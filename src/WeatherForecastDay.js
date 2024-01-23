import react from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    let week = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    function getDay(){
      let date= new Date(props.data.dt * 1000);
      return week[date.getDay()];
    }

    return (
      <div className="col-2 dayElement justify-content-center">
        <h5 className="forecast-day">{getDay()}</h5>
        <WeatherIcon code={props.data.weather[0].icon} size={35} />
        <h6 id="forecastMaxMin">
          <span className="forecast-max-temp">
            {Math.round(props.data.temp.max)}°
          </span>
          <span className="forecast-min-temp">
            {Math.round(props.data.temp.min)}°
          </span>
        </h6>
      </div>
    );
}