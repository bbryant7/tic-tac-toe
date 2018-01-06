import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./containers/Board";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers/index";
let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById("root")
);
