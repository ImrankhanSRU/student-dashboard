import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import StudentsGrid from "./components/StudentsGrid/StudentsGrid";
import { Route, Redirect } from "react-router-dom";
import Details from "./components/Details/Details";
import SignIn from "./components/Sign-in/Signin";

class App extends Component {
  render() {
    let val = 0;
    if (document.cookie.split("=").length > 1) {
      if (document.cookie.split("=")[1].length) val = 1;
    }
    // if (!val) {
    //   return (
    //     <div>
    //       <Route path="/login" component={SignIn} />
    //       <Redirect from = "/" to = "login" />
    //     </div>
    //   );
    // }

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
