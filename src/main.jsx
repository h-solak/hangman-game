import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ColorThemeProvider from "./Contexts/Theme/ColorThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorThemeProvider>
      <App />
    </ColorThemeProvider>
  </React.StrictMode>
);
