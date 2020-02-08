import React from 'react';
import './Searchbox.css';

const Searchbox = ({ handleChange }) => (
  <input className="search" type="search" placeholder="Search..." onChange={handleChange} />
)

export default Searchbox;