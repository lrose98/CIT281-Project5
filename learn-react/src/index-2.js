// jshint esversion: 6

//see comp-demo-4.html

import React from "react";
import ReactDOM from "react-dom";
//optional: add style rules to index.css, and uncomment the following line
//import "./index.css";
import HelloWorld2 from "./HelloWorld2";
import * as serviceWorker from "./serviceWorker";

var destination = document.querySelector("#root");

//create an instance of a component, and add to DOM
ReactDOM.render(
  // call the component
  <HelloWorld2 greetTarget="Black Widow" />,
  destination
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
