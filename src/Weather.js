import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control "
                autoFocus="on"
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-dark w-100"
              />
            </div>
          </div>
        </form>
        <h1>Vilnius</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src="#" alt="#" />{" "}
            <span className="temperature">{temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity 72%</li>
              <li>Wind 13km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "64469ac67e6dc941feb5b50915a18dc7";
    let cityName = "Vilnius";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
