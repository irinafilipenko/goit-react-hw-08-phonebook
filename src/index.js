import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";
// import * as store from './redux/store'

// console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"...LOADING"} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
