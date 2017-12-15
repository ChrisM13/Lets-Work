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
import LandingVideo from '../../components/LandingVideo/LandingVideo'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allUsers: [],
      schedules: {}
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

      fetch('/api/users/get-all-users')
        .then(data => data.json())
        .then(users => this.setState({allUsers: users}))
  }

/*---------- Employee Schedules ----------*/
 
handleDropdownChange = (e, day, id) => {
  var currentSchedule = this.state.schedules

  if (currentSchedule[id] === undefined) {
    currentSchedule[id] = {}
    currentSchedule[id][day] = e.target.value
  } else {
    currentSchedule[id][day] = e.target.value
  }

  this.setState({
      schedules: currentSchedule
  })
}

saveSchedule = (e, id) => {
  return fetch(`api/employees/${id}/schedule`, {
          method: 'put',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
              schedules: this.state.schedules
          })  
      })
      .then(response => response.json())
      .then(data => console.log('app.js > saveScheulde > data =', data))
      .then(console.log(this.state.schedules))
      .catch(err => {
          console.error(err);
      });
}

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
            <div>
                <Header
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
                <LandingVideo />
            </div>
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
              <Route exact path='/scheduler' render={(props) =>
              <EmployeeSchedule
                {...props}
                user={this.state.user}
                handleDropdownChange={this.handleDropdownChange}
                saveSchedule = {this.saveSchedule}
                allUsers={this.state.allUsers}
                />
              }/>
              {/* <Route exact path='/employees' render={(props) =>
              <EmployeeSchedule
                {...props}
                user={this.state.user}
                handleDropdownChange={this.handleDropdownChange}
                saveSchedule = {this.saveSchedule}
                />
              }/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
