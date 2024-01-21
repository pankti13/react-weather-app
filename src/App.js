import React from 'react';
import Weather from "./Weather";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Mumbai"/>
      <div className="footer">
        <strong>
          <a
            href="https://github.com/pankti13/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source code
          </a>{" "}
        </strong>
        by{" "}
        <strong>
          <a
            href="https://github.com/pankti13"
            target="_blank"
            rel="noreferrer"
          >
            Pankti Salvi
          </a>{" "}
        </strong>
        and this project is hosted on{" "}
        <strong>
          <a
            href="https://react-weather-made-easy.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </strong>
      </div>
    </div>
  );
}
