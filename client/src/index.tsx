import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./css/index.css";
import App from "./App";
import dotenv from 'dotenv'
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
