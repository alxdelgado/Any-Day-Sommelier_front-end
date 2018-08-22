import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navBar" role="banner navigation">
      <nav>
<<<<<<< HEAD


        <div className="navIcon">
          <img src="/Images/wine-glass-alt-solid.svg" alt="Site icon"></img>
=======
        <div>
          <img className="navIcon" src="/Images/wine-glass-alt-solid.svg" alt="Site icon"></img>
>>>>>>> f36949d9a4fa6bf3373e27317495dd11738c3251
        </div>
        <div className="navUl">
          <ul>
            <Link to='/user/register'>Register</Link>
            <Link to='/user/login'>Login</Link>
          </ul>
        </div>
<<<<<<< HEAD


=======
>>>>>>> f36949d9a4fa6bf3373e27317495dd11738c3251
      </nav>
    </header>
    )
};

export default Header;
