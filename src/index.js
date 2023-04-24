import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { app } from "./utilities/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode app={app}>
    <App />
  </React.StrictMode>
);
