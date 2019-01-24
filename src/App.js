import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import StudentsGrid from './components/studentsGrid/studentsGrid'
import { BrowserRouter, Route  } from 'react-router-dom';
import Details from './components/Details/Details'
import SignIn from './components/Sign-in/sign-in'
import {withRouter} from 'react-router'

class App extends Component {
  
  render() {

    if(!document.cookie.length) {
      return (
          <div>
              <Route path="/" component={SignIn} />
          </div>

      );
    }
    return (
          <div>
            <div className="App">
              <Route exact path="/" component={Header} />
              <Route exact path="/" component={StudentsGrid} />
            </div>

            <div>
              <Route path="/:Id" component={Details} />
            </div>
          </div>
    );
  }
}

export default App;

