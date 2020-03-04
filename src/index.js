import ReactDOM from "react-dom";
import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import App from "./App";
import "./App.scss";
import Loader from "./components/Loader";

const root = document.getElementById("root");

ReactDOM.render(
  <>
    <Loader />
  </>,
  root
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    root
  );
});
