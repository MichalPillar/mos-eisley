import React from 'react';
import './Card.css';

const Card = () => (
  <div className="card">
    <h2>Test ship</h2>
    <h3>Model</h3>
    <img src={`https://loremflickr.com/180/180/starship`} alt="ship" />
    <div className="description">
      Capacity: text
      <br />
      $Cost: text
      </div>
    <button>Purchase</button>
  </div>
)

export default Card;