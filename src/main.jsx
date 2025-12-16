import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import Portfolio from "./portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  </React.StrictMode>
);
