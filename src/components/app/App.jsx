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

  componentDidMount() {
    fetch('https://swapi.co/api/starships/')
      .then(response => response.json())
      .then(ships => this.setState({ starships: ships }))
      .catch(err => console.log(err));
  }

  render() {
    const { starships } = this.state;

    return (
      <div className="container" >
        <Header />
        <Directory starships={starships.results} />
      </div>
    );
  }
}

export default App;
