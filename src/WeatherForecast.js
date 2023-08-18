import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> monday</div>
          <img //src={props.data.iconUrl} alt={props.data.description}
          />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">29°</span>
            <span className="WeatherForecast-temperatures-min">25°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
