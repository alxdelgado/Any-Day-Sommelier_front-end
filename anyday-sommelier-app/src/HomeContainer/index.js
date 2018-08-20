import React, {Component} from 'react';

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      wine: [],
      entree: []
    }
  }
  render() {
    return(
      <div>
        <img className="placeholderName" src="#" alt="Logo"></img>

        <img className="Hero" src="/Images/TypeLogo.svg"></img>

        <img className="placeholderName" src="#" alt="Example Pairing"></img>
        <img className="placeholderName" src="#" alt="Example Pairing"></img>
        <img className="placeholderName" src="#" alt="Example Pairing"></img>
        <p>Welcome to Anyday Sommelier- the handy app for discovering your new favorite wine and entre pairings. Tap the icons to get started or sign in below to create an account, allowing to save, vote, and favorite pairings.</p>
      </div>
    )
  }

};

export default HomeContainer;
