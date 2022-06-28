import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
<div>
  <h2>Covid App</h2>
</div>
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById("root")
);
