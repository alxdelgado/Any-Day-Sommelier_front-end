import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navBar" role="banner navigation">
      <nav>
        <div>
          <img className="navIcon" src="/Images/wine-glass-alt-solid.svg" alt="Site icon"></img>
        </div>
        <div className="navUl">
          <ul>
            <Link to='/user/register'>Register</Link>
            <Link to='/user/login'>Login</Link>
          </ul>
        </div>
      </nav>
    </header>
    )
};

export default Header;
