import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import About from "./About";

const Base = () => {
  return (

      <Router>
       
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />

      </Router> 

  );
};

export default Base; 