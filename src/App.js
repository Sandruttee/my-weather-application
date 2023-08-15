import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Vilnius" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/sandra-pla%C4%8Denyt%C4%97-208403191/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sandra Plačenytė
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Sandruttee/my-weather-application"
          target="_blank"
          rel="noopener noreferrer"
        >
          open sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
