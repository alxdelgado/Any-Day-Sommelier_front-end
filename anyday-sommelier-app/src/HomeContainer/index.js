import React, { Component } from 'react';

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
        <img className="Hero2" src="/Images/MainLogo.svg" alt="Logo"></img>
        <img className="Hero" src="/Images/TypeLogo.svg" alt="Decorative Text Logo"></img>
        <p>Welcome to Anyday Sommelier- the handy app for discovering your new favorite wine and entre pairings. Tap the icons to get started or sign in below to create an account, allowing to save, vote, and favorite pairings.</p>
      </div>
    )
  }

};

export default HomeContainer;
