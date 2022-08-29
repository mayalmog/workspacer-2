import React from "react";
import ReactDOM from "react-dom/client";
import { RootCmp } from "./root-cmp";
import "./assets/styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootCmp />
  </React.StrictMode>
);
