import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";

import Store from "./redux/Store";          // Store.js
import RootApp from "./containers/RootApp"; // RootApp.js

let root = document.getElementById("app");

render(
<Provider store={ Store }>
    <RootApp />
</Provider>,root);





