import React, {Component} from 'react';

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      wine: [],
      meat: []
    }
  }
  getWines = async () => {
    try {
      const wineData = await fetch ("http://localhost:8000/api/wines");
      const wines = wineData.json();
      return wines;
    } catch(err) {
      console.log(err);
      return err;
    }
  }

  componentDidMount() {
    this.getWines().then((res) => {
      this.setState({
        wines: res.wineData
      });
    });
  }

  addWines = async (wines, event) => {
    event.preventDefault();
    try {
      const createdWines = await fetch("http://localhost:8000/api/wines", {
        method: "POST",
        body: JSON.stringify(wines),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const parsedResponse = await createdWines.json();
      console.log(wines);
      this.state = wines;
      console.log(wines);
      this.props.history.push("/wines/");

    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return(
      <div>
        <img className="placeholderName" src="#" alt="Logo"></img>
        <img className="Hero" src="/Images/TypeLogo.svg"></img>

        <p>Welcome to Anyday Sommelier- the handy app for discovering your new favorite wine and entre pairings. Tap the icons to get started or sign in below to create an account, allowing to save, vote, and favorite pairings.</p>

        <input type='text' placeholder='wine' value='wine' />

        {this.state.wine}

      </div>
    )
  }

};

export default HomeContainer;
