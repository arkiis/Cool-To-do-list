import ReactDOM from "react-dom";
import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import App from "./App";
import "./App.scss";

const root = document.getElementById("root");

ReactDOM.render(
  <>
    <div>
      <p>Loading...</p>
    </div>
  </>,
  root
);

// store.firebaseAuthIsReady.then(() => {
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  root
);
// });
