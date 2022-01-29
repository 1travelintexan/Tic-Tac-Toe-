import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/game";
import Splash from "./components/Splash";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Splash />
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
