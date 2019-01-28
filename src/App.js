import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import StudentsGrid from './components/studentsGrid/studentsGrid'
import { Route  } from 'react-router-dom';
import Details from './components/Details/Details'
import SignIn from './components/Sign-in/sign-in'

class App extends Component {

render() {

    let val = 0;
        if(document.cookie.split('=').length > 1) {
          if(document.cookie.split('=')[1].length)
            val = 1;
        }
        if(!val) {
          console.log("sign in")
          return (
            <div>
              <Route path="/" component={SignIn} />
            </div>
          );
        }

        return (
            <div>
              <div className="iik">
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

