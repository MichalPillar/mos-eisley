import React from 'react';
import './App.css';

import Header from '../header/Header';
import Directory from '../directory/Directory';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      starships: []
    };
  }

  render() {
    return (
      <div className="container" >
        <Header />
        <Directory />
      </div>
    );
  }
}

export default App;
