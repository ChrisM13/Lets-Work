import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Schedule: []
    }
  }

  // componentDidMount() {
  //   fetch('/products').then(res => res.json())
  //   .then(products => {
  //     this.setState({
  //       products
  //     })
  //   })
  // }

  render() {
    return (
      <div>
       
      </div>
    );
  }
}

export default App;
