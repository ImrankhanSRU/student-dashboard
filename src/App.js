import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import StudentsGrid from "./components/StudentsGrid/StudentsGrid";
import { Route, Redirect } from "react-router-dom";
import Details from "./components/Details/Details";

class App extends Component {
  render() {


    return (
      <>
        <Redirect from = "/" to = "dashboard" />
        <Route exact path="/dashboard" component={Header} />
        <Route exact path="/dashboard" component={StudentsGrid} />
        <Route path="/student/:Id" component={Details} />
      </>
    );
  }
}

export default App;
