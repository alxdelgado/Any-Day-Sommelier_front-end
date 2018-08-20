import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const FormLogin = () => {
  return (
    <div className='FormLogin'>
      <label>
        Username:
        <input type='text' placeholder='username' name='username'/>
      </label><br/>
    </div>
  )
};

export default FormLogin;
