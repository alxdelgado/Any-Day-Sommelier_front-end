import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navBar" role="banner navigation">
      <nav>
        <ul className="navUl">
          <img src="public/Images/wine-glass-alt-solid.svg" class="navIcon" alt="Site icon"></img>
          <Link to='/user/register'>Register</Link>
          <Link to='/user/login'>Login</Link>
        </ul>
      </nav>
    </header>
    )
};

export default Header;
