import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavbarComp from "./components/NavbarComp";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <NavbarComp />
    <App />
  </React.StrictMode>
);
