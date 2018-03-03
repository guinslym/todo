import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unstated";
import TodoApp from "./TodoApp";
import "./index.css";

ReactDOM.render(
  <Provider>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
