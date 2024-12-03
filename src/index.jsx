import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TemperatureUnitProvider } from "./context/TemperatureUnitContext"; // Import providera

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TemperatureUnitProvider> {/* Owijamy całą aplikację */}
      <App />
    </TemperatureUnitProvider>
  </React.StrictMode>
);
