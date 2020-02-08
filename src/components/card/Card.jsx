import React from 'react';
import './Card.css';

const Card = ({ starship }) => (
  <div className="card">
    <h2>{starship.name}</h2>
    <h3>{starship.model}</h3>
    <img src={`https://loremflickr.com/180/180/starship?${starship.crew}`} alt="ship" />
    <div className="description">
      Capacity: {starship.passengers}
      <br />
      Cost: ${starship.cost_in_credits}
    </div>
    <button>Purchase</button>
  </div>
)

export default Card;