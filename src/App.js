import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import StudentsGrid from "./components/StudentsGrid/StudentsGrid";
import { Route } from "react-router-dom";
import Details from "./components/Details/Details";
import SignIn from "./components/Sign-in/Signin";

class App extends Component {
  render() {
    let val = 0;
    if (document.cookie.split("=").length > 1) {
      if (document.cookie.split("=")[1].length) val = 1;
    }
    if (!val) {
      return (
        <div>
          <Route path="/" component={SignIn} />
        </div>
      );
    }

    return (
      <div>
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={StudentsGrid} />
        <Route path="/:Id" component={Details} />
      </div>
    );
  }
}

export default App;
