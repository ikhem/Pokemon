import React, { Component } from 'react';
import pokemon_logo from './pokemon_logo.png';
import './App.css';

import Pokemon from './Pokemon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={pokemon_logo} className="App-logo" alt="logo" />
        </div>
        <input placeholder="poke-search" />
        <button>Search</button>
        
        <div className='middleBox'>
          <Pokemon />
        </div>
      </div>
    );
  }
}

export default App;
