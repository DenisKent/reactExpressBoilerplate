import React from "react"
import { render } from "react-dom";
import Router from "./Router"

const App = () => {
  return <Router />;
};

render(<App />, document.getElementById("app"));
