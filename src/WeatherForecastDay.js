import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecast-day"> {props.data.dt}</div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperatures-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="WeatherForecast-temperatures-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>{" "}
    </div>
  );
}
