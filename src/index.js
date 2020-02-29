import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from "./store";
import { App } from "./App";
import "./App.scss";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
