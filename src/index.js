import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import walletconnect from "./src/walletconnect";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
ReactDOM.render(
  <Provider walletconnect={walletconnect}>
  <walletconnect />
</Provider>,
  document.getElementById("connectwallet")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
