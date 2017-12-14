import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Header from '../../components/Header/NavBar/NavBar';
import EmployeeSchedule from '../../pages/EmployeeSchedule/EmployeeSchedule'
import userService from '../../utils/userService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allUsers: []
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

/*---------- Lifecycle Methods ----------*/

  componentDidMount() {
      let user = userService.getUser();
      this.setState({user});
  }
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
                <Header
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              }/>
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
            <Route exact path='/manager/scheduler' render={(props) =>
              <EmployeeSchedule
                {...props}
                user={this.state.user}
                />
              }/>
            <Route exact path='/employees' render={(props) =>
              <EmployeeSchedule
                {...props}
                user={this.state.user}
                />
              }/>
          </Switch>
        </Router>
       
      </div>
    );
  }
}

export default App;
