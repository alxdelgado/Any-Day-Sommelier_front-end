import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DeleteContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        accounts: []
    }
  }
  deleteUser = async (id, e) => {
    e.preventDefault();
    console.log('deleteUser function is being called', id);
    try {
      const deleteUser = await fetch('' +id, {
        method: 'DELETE'
      });

      const parsedUser = await deleteUser.json();
      this.setState({user: this.state.user.filter((user, i) => user._id)});

    } catch(err) {
        console.log(err);
    }
  }

  render() {
    return(
      <div>
        <h1>This is the user</h1>
      </div>
    )
  }

};

export default DeleteContainer;
