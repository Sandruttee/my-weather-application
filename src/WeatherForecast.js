import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = `1a2b7258ebd456c01aef9175dfe8b709`;
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric
`;

  axios.get(apiUrl).then(handleResponse);
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
