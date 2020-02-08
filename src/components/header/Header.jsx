import React from 'react';
import './Header.css';

import Searchbox from '../searchbox/Searchbox';

const Header = ({ handleChange }) => (
  <div className="header">
    <h1>Mos Eisley</h1>
    <Searchbox handleChange={handleChange} />
  </div>
)

export default Header;