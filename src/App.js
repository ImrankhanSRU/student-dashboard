import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import StudentDetails from './components/studentDetails/studentDetails'
import { BrowserRouter,Route } from 'react-router-dom';
import Details from './components/Details/Details'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div>
            <div className="App">
              <Route exact path="/" component={Header} />
              <Route exact path="/" component={StudentDetails} />
            </div>

            <div>
              <Route path="/:Id" component={Details} />
            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
