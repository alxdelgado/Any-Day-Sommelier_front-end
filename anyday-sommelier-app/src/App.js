import React, { Component } from 'react';
import HomeContainer from './HomeContainer/index.js';
import logo from './logo.svg';
import Header from "./Header";
import Footer from "./Footer";
import FormLogin from './FormLogin';
import Results from './Results';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Register from './Register'

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
            <Route exact path='/Register' component={Register}/>
            <Route exact path='/FormLogin' component={FormLogin}/>
            <Route component={My404}/>

          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
