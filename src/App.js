import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import pokemon_logo from './pokemon_logo.png';

import Pokemon from './Pokemon';
import { getPokemon } from './components/Search'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      id: 6,
      name: '',
      img: ''
    }
  }

  componentDidMount(){
    getPokemon(this.state.id).then(pokemon => 
      {
        this.setState({
          name: pokemon.data.name,
          img: pokemon.data.sprites.front_default
        })
      }
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={pokemon_logo} className="App-logo" alt="logo" />
          </div>
            <input placeholder="poke-search"/>
            <button>Search</button>
          
          <div className='middleBox'>
            <Pokemon id={this.state.id} name={this.state.name} img={this.state.img} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
