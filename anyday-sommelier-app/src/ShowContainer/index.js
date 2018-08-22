import React, {Component} from 'react';
import HomeContainer from '../HomeContainer'


const ShowContainer = (props) => {
  
  // check submit button
  
  // let something you're going to set in some block scope before you set it
  // so delcare it before if statement

/**/
  let list;
  if (props.which == 'food') {
    list = props.foodPairing.map((wine, i) =>{
      return (
        <li>{wine.type}</li>
      )
    })
  } else if (props.which == 'wine') {
    list = props.winePairing.map((food, i) =>{
      return (
        <li>{food.type}</li>
      )
    })
  }

 // console.log(list)


/**/

    return(
     

      <ul>
          
        {list}

      </ul>
    )
}

export default ShowContainer;
