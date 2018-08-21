import React, { Component } from "react";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <div>
      <img src="Images/SelectFood.svg"></img>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      <img src="Images/Or.svg"></img>
      <img src="Images/SelectWine.svg"></img>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
    </div>
    )
};

export default Results;
