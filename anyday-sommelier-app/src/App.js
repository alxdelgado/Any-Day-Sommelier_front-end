import React, { Component } from 'react';
import HomeContainer from './HomeContainer/index.js';
import DeleteContainer from './DeleteContainer/index.js';
import ShowContainer from './ShowContainer/index.js';
import logo from './logo.svg';
<<<<<<< HEAD
import Header from "./Header";
import Footer from "./Footer";
import FormLogin from './FormLogin';
import Results from './Results';
=======
import Header from './Header/index.js';
import Footer from './Footer/index.js';
import FormLogin from './FormLogin/index.js';
>>>>>>> f36949d9a4fa6bf3373e27317495dd11738c3251
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Register from './Register/index.js';
import Login from './Login/index.js';


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
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/FormLogin' component={FormLogin}/>
            <Route exact path='/Header' component={Header}/>
            <Route exact path='/Footer' component={Footer}/>
            <Route exact path='/DeleteContainer' component={DeleteContainer}/>
            <Route exact path='/ShowContainer' component={ShowContainer}/>
            <Route component={My404}/>

          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
