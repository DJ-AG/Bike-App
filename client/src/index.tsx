import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./css/index.css";
import App from "./App";
const HTMLElement = document.querySelector("#root") as HTMLDivElement;

const root = createRoot(HTMLElement);

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
