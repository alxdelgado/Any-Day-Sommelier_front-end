import React, {Component} from 'react';
import { Link }from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to = '/Register'>Register</Link></li>

      </ul>
    </header>
  )
};

export default Header;
