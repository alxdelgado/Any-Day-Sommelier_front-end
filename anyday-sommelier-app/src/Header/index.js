import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navBar" role="banner navigation">
      <nav>
<<<<<<< HEAD
        <ul className="navUl">
          <img src="public/Images/wine-glass-alt-solid.svg" class="navIcon" alt="Site icon"></img>
          <Link to='/user/register'>Register</Link>
          <Link to='/user/login'>Login</Link>
        </ul>
=======
        <div>
          <img className="navIcon" src="/Images/wine-glass-alt-solid.svg" alt="Site icon"></img>
        </div>
        <div className="navUl">
          <ul>
            <Link to='/user/register'>Register</Link>
            <Link to='/user/login'>Login</Link>
          </ul>
        </div>
>>>>>>> ee7c6661c07237230c90bed97657c2bd22715b2f
      </nav>
    </header>
    )
};

export default Header;
