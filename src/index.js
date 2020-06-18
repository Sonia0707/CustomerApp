import React from "react";
import ReactDOM from "react-dom";
//Importar a la aplicación el provider y el store:
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Generamos constante para que quede mejor
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);
//Se lo padamos al render:
ReactDOM.render(rootComponent, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
