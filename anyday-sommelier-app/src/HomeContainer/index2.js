import React, {Component} from 'react';
import ShowContainer from '../ShowContainer'

class HomeContainer extends Component {
  constructor() {
    super()
      this.state = {
        wine: [],
        food: [], 
        selectedWine: 0,
        selectedFood: 0,
        winePairing: [],
        foodPairing: [],
        submitButton: ''
      }
  }

  componentDidMount() {
    this.getData().then((data) => {
      this.setState({
        wine: data[1],
        food: data[0]
      })
    })
  }

  getData = async () => {
    try{
      const wine = await fetch('http://localhost:8000/api/wines/', {method: 'GET'})
      const parsedWine = await wine.json()
      console.log(parsedWine, "this is wine")
      
      const food = await fetch('http://localhost:8000/api/food', {method: 'GET'})
      const parsedFood = await food.json()
      return [parsedFood, parsedWine]
    } catch (err) {
      console.log(err)
    }

  }

  wineHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const chosenWine = await fetch('http://localhost:8000/api/wine-pairing/' + this.state.selectedWine, {method: 'GET'})
      const parsedChosenWine = await chosenWine.json()
      this.setState({
        winePairing: parsedChosenWine,
        submitButton: 'wine'
      })

    } catch (err) {
      console.log(err)
    }
  }

  foodHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const chosenFood = await fetch('http://localhost:8000/api/food-pairing/' + this.state.selectedFood, {method: 'GET'})
      const parsedChosenFood = await chosenFood.json()
      this.setState({
        foodPairing: parsedChosenFood,
        submitButton: 'food'
      })
      console.log(this.food.type)
    } catch (err) {
      console.log(err)
    }
  }

  foodHandleChange = (e) => {
    this.setState({selectedFood: e.target.value})
  }

  wineHandleChange = (e) => {
    this.setState({selectedWine: e.target.value})
  }
  

  render() { 
    console.log("render"); 
    console.log(this.state)
    const wineList = this.state.wine.map((wine, i) => { 
      return(
       <option value={wine.id}>{wine.type}</option>

      );

    })

    const foodList = this.state.food.map((food, i) => { 
      return(
       <option value={food.id}>{food.type}</option>

      );

    })



    return(

        <div>
        
        <img className="Hero" src="/Images/TypeLogo.svg"></img>
        <form>
        <select onChange={this.wineHandleChange} value={this.state.selectedWine}>
          <option value="0" disabled>Choose a Wine</option>
          {wineList}
        </select>
         <button onClick={this.wineHandleSubmit}>Submit</button>
         </form>
         <form>
         <select onChange={this.foodHandleChange} value={this.state.selectedFood}>
         <option value="0" disabled>Choose a Food</option>
          {foodList}
        </select>
         <button onClick={this.foodHandleSubmit}>Submit</button>
         </form>
         {this.state.submitButton == '' ? null : <ShowContainer foodPairing={this.state.foodPairing} winePairing={this.state.winePairing} which={this.state.submitButton}/>}
        </div> 
      )
  }















}


export default HomeContainer;




