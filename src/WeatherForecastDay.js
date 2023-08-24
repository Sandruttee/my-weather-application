import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  let icon = props.data.weather[0].icon;
  console.log(icon);
  return (
    <div>
      <div className="WeatherForecast-day"> {day()}</div>
      <img
        className="forecast-img"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={props.data.description}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperatures-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperatures-min">
          {minTemperature()}
        </span>
      </div>{" "}
    </div>
  );
}
