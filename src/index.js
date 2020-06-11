import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { TasksProvider } from "./lib/TasksProvider";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  //wrapping the entire App in the "Provider".What's inside the tags
  // will be passed to Auth.js as props.children
  <React.StrictMode>
    <Router>
      <TasksProvider>
        <App />
      </TasksProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
