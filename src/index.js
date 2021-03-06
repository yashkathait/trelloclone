import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/main/App";
import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
