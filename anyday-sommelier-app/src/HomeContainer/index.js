<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {Component} from 'react';
import ShowContainer from '../ShowContainer/index.js'
>>>>>>> f36949d9a4fa6bf3373e27317495dd11738c3251

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      wines: [],
      meat: []
    }
  }
<<<<<<< HEAD
=======
  getWines = async () => {
    try {
      const wineData = await fetch ("http://localhost:8000/api/wines/");
      const wines = await wineData.json();
      console.log(wines)
      return wines;
    } catch(err) {
      console.log(err);
      return err;
    }
  }

  // this will happen automatically after render()
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
      const createdWines = await fetch("http://localhost:8000/api/wines/", {
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

  handleSubmit = async (event) => {
    event.preventDefault();
    // if person submitted wine, hit the wine paring api endpoint and do all the stuff with the data you get back
    // or if they "  food, " " " food paring api endpoint " " " " " "
    try {

      const wineResponse = await fetch("http://localhost:8000/api/wines/", {
        method: "POST",
        body: JSON.stringify(this.state.wine),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const parsedResponse = await wineResponse.json();
      if(parsedResponse.data === true) {
        this.props.history.push("/wine");
      }

    } catch(err) {
      console.log(err);
    }
  }

  handleChange = (event) => {
    // change what wine is chosen in state
    // or change what food is chosen in state

    // ahve a var in state that corresponds to those choices
    // and this should change it?

    // this.setState({
    //   [event.target.name]: event.target.value
    // });
  }
>>>>>>> f36949d9a4fa6bf3373e27317495dd11738c3251

  render() {
    // .map() here to create <option> tags to include inside your select tags below
    return(
      <div>
<<<<<<< HEAD
        <img className="Hero2" src="/Images/MainLogo.svg" alt="Logo"></img>
        <img className="Hero" src="/Images/TypeLogo.svg" alt="Decorative Text Logo"></img>
=======
        <img className="placeholderName" src="#" alt="Logo"></img>
        <img className="Hero" src="/Images/TypeLogo.svg"></img>

>>>>>>> f36949d9a4fa6bf3373e27317495dd11738c3251
        <p>Welcome to Anyday Sommelier- the handy app for discovering your new favorite wine and entre pairings. Tap the icons to get started or sign in below to create an account, allowing to save, vote, and favorite pairings.</p>

        <form className="formField" onSubmit={this.handleSubmit}>
          <label>
            <select select="option" placeholder="Wine Type"/><br/>
            <input type="submit" value="Submit"/><br/>
          </label>


          <label>
            <select select="option" placeholder="Food Type"/><br/>
            <input type="submit" value="Submit"/><br/>
          </label>
        </form>
      </div>
    )
  }

};

export default HomeContainer;
