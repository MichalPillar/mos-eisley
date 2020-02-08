import React from 'react';
import './Directory.css';

import Card from '../card/Card';

const Directory = props => (
  <div className="card-list">
    {props.starships && props.starships.map(starship => (
      <Card key={starship.url} starship={starship} />
    ))}
  </div>
)

export default Directory;