import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { RootCmp } from "./root-cmp";
import store from "./store/store";
import { Provider } from "react-redux";
import "./assets/styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RootCmp />
      </Router>
    </Provider>
  </React.StrictMode>
);
