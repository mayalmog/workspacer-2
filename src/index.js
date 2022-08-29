import React from "react";
import ReactDOM from "react-dom/client";
import { RootCmp } from "./root-cmp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootCmp />
  </React.StrictMode>
);
