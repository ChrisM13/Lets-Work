import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Schedule: []
    }
  }

  render() {
    return (
      <div>
        Hell World
        <Router>
          <Switch>
            {/* <Route exact path='/' /> */}
            <Route exact path='/signup' render={(props) =>
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
                />}
              />
            <Route exact path='/login' render={(props) =>
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
                />
              }/>
          </Switch>
        </Router>
       
      </div>
    );
  }
}

export default App;
