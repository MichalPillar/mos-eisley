import React from 'react';
import './App.css';

import Header from '../header/Header';
import Directory from '../directory/Directory';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      starships: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships/')
      .then(response => response.json())
      .then(ships => this.setState({ starships: ships }))
      .catch(err => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const starships = this.state.starships.results;
    const { searchField } = this.state;
    const filteredShips = starships && starships.filter(ship => ship.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="container" >
        <Header handleChange={this.handleChange} />
        <Directory starships={filteredShips} />
      </div>
    );
  }
}

export default App;
