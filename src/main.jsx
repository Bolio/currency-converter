import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
