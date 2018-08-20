import React, {Component} from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const loginResponse = await fetch('', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await loginResponse.json();
    if(parsedResponse.data.loggedIn === true){
      this.props.history.push('/home');
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render(){
    return(
      <div>
        <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type='text' name='username' onChange={this.handleChange}/>
          </label><br/>
          <label>
            Password:
            <input type='password' name='password' onChange={this.handleChange}/>
          </label><br/>
            <input type='submit' value='login'/>
        </form>
      </div>
    )
  }

};

export default Login; 
