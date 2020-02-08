import React from 'react';
import './Header.css';

import Searchbox from '../searchbox/Searchbox';

const Header = () => (
  <div className="header">
    <h1>Mos Eisley</h1>
    <Searchbox />
  </div>
)

export default Header;