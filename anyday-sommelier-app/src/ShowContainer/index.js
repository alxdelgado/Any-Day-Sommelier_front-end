import React, {Component} from 'react';


class ShowContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      wine: [],
      meat: []
    }
  }

  render() {
    return(
      <div>
        <h1>Show Page</h1>
          <label>
            <input type='text' placeholder='Wine' value='wine' />
            <input type='text' placeholder='Meat' value='Meat' />
            <input type='text' placeholder='Secondary' value='Secondary Option' />
            <input type='text' placeholder='Tertiary' value='Tertiary Option' />
          </label>
      </div>
    )
  }

};

export default ShowContainer;
