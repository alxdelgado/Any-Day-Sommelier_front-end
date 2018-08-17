import React, {Component} from 'react';

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      home: []
    }
  }
  render() {
    return(
      <div>
        <h1>HomeContainer</h1>
        <p>Hello!</p>
      </div>
    )
  }

};

export default HomeContainer;
