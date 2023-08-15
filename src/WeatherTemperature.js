import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="#" onClick={convertToFah}>
            °F{" "}
          </a>
        </span>{" "}
      </span>
    );
  } else {
    let fahTemp = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(fahTemp)}</span>
        <span className="unit">
          <a href="#" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F{" "}
        </span>{" "}
      </span>
    );
  }
}
