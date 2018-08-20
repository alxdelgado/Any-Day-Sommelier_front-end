import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navBar" role="banner">
      <nav role="navigation">
        <ul className="navUl">
          <a href="#"><img src="/Users/kyder/funky-ducks/portfolio/MyPortfolio/icon1.svg" class="navIcon" alt="Site icon"></img></a>
          <li><a href="#" title="Login">Login</a></li>
          <li><a href="#" title="About Anyday Sommelier">About</a></li>
          <Link to='/user/register'>Register</Link>
          <Link to='/user/login'>Login</Link>
        </ul>
      </nav>
    </header>
    )
};

export default Header;
