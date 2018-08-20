import React, {Component} from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
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
            Username:
            <input type='text' name='username' onChange={this.handleChange}/>
          </label><br/>
          <label>
            Password:
            <input type='submit' value ='Register'/>
          </label>
        </form>
      </div>
    )
  }

};

export default Register;
