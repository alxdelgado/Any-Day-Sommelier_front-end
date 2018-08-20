import React, { Component } from 'react';
import HomeContainer from './HomeContainer/index.js';
import logo from './logo.svg';
import Header from "./Header";
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';


const My404 = () => {
  return (
    <div>
        <h1>404</h1>
        <h3>Sorry, the page connot be found</h3>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component= {HomeContainer}/>
          </Switch>
      </div>
    );
  }
}

export default App;
