import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getPokemon } from '../utils/api';

import './Pokemon.css';
import pokemon_logo from './pokemon_logo.png';

import Details from './Details'
import Interface from './Interface'

export default class Pokemon extends Component {
  constructor(props){
    super(props)

    this.state = {
      id: '',
      name: '',
      img: '',
      type: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  componentWillMount() {
    this.setState({ id: Math.floor(Math.random() * (499) + 1)})
  }

  componentDidMount(){
    this.fetchPokemon();
  }

  fetchPokemon() {
    getPokemon(this.state.id).then(pokemon => 
      {
        console.log(pokemon)
        this.setState({
          name: pokemon.name,
          img: pokemon.sprites.front_default,
          type: [...this.state.type, pokemon.types]
        })
      }
    )
  }

  handleChange(e) {
    this.setState({ id: e.target.value })
  }

  render(){

    return(
      <div className="App">

        <div className="App-header">
          <Link to='/'><img src={pokemon_logo} className="App-logo" alt="logo" /></Link>
        </div>

        <Interface 
          fetchPokemon={this.fetchPokemon} 
          handleChange={this.handleChange} 
        />

        <div className='picView'>
          <Link to=""><img src={this.state.img} alt='pokemon_image' /></Link>
        </div>

        {/* <Details type={this.state.type} /> */}

        <div className='nameView'>
          <p>{this.state.name}</p>
        </div>

      </div>
    )}
}