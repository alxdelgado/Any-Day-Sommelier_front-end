import React, {Component} from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
    const registerResponse = await fetch('', {
      method: 'POST',
      credentials: 'include',
      body:JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse.data.loggedIn);
    if(parsedResponse.data.loggedIn === true){
      this.props.histroy.push('/home');
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return(
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type='text' name='email' onChange={this.handleChange}/>
          </label><br/>
          <label>
            Password:
            <input type='submit' value ='Register'/>
          </label><br/>
          <label>
            Confirm Password:
            <input type='text' name='confirm password' />
          </label>
            <input type='submit' value='login'/>
        </form>
      </div>
    )
  }

};

export default Register;
