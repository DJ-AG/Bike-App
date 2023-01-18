import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./css/index.css";
import App from "./App";
import { AppProvider } from "./Redux/Context/appContext";
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
