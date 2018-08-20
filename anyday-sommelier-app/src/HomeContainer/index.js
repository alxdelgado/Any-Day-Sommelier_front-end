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
        <img className="placeholderName" src="#" alt="Logo"></img>
        <h1>ANYDAY SOMMELIER</h1>
        <img className="placeholderName" src="#" alt="Example Pairing"></img>
        <img className="placeholderName" src="#" alt="Example Pairing"></img>
        <img className="placeholderName" src="#" alt="Example Pairing"></img>
        <p>Welcome to Anyday Sommelier- the handy app for discovering your new favorite wine and entre pairings. Tap the icons to get started or sign in below to create an account, allowing to save, vote, and favorite pairings.</p>
      </div>
    )
  }

};

export default HomeContainer;
