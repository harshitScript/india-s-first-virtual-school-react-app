import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./ReduxStore/redux-store";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/auth-context-provider";



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
