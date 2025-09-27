import React from "react";
import ReactDOM from "react-dom/client"; // make sure using React 18+
import App from "./App";
import "./index.css"; // Tailwind import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
