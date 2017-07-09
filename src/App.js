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
      id: 1,
      name: '',
      img: ''
    }

    this.fetchPokemon = this.fetchPokemon.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    this.fetchPokemon();
  }

  fetchPokemon(){
    getPokemon(this.state.id).then(pokemon => 
      {
        this.setState({
          name: pokemon.data.name,
          img: pokemon.data.sprites.front_default
        })
      }
    )
  }

  handleChange(e){
    this.setState({ id: e.target.value })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={pokemon_logo} className="App-logo" alt="logo" />
          </div>
            <input placeholder="poke-search" onChange={this.handleChange}/>
            <button onClick={this.fetchPokemon}>Search</button>
          
          <div className='middleBox'>
            <Pokemon id={this.state.id} name={this.state.name} img={this.state.img} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
