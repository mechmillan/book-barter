import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import './index.css';

// import store and Provider
import { Provider } from "react-redux";
import store from "./store"; // assumes index.js

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
