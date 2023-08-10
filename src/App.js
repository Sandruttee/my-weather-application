import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Sandra Plačenytė and is{" "}
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
