import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom'
import { getPokemon } from '../utils/api';

import './Pokemon.css';
// import pokemon_logo from './pokemon_logo.png';
import Header from '../components/Header';
import Details from '../container/Details';

import Interface from './Interface'

import Screen from './Screen';

export default class Pokemon extends Component {
  constructor(props){
    super(props)

    this.state = {
      id: Math.floor(Math.random() * (499) + 1),
      name: '',
      img: '',
      type: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
  }

  componentWillMount() {
    // this.setState({ id: Math.floor(Math.random() * (499) + 1)})
    this.fetchPokemon();
  }

  // componentWillReceiveProps() {
  //   this.fetchPokemon();
  // }

  // componentDidMount(){
  //   this.fetchPokemon();
  // }

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

  renderScreen(img, id) {
    if(img) {
      return(
        <Link to={`/details/${id}`}>
          <Screen img={img} />
        </Link>
      )
    }
  }

  handleChange(e) {
    this.setState({ id: e.target.value })
  }

  render(){

    const { img, id } = this.state;
    console.log('Parent Img', img)

    return(
      <div className="App">

        <Header />

        <Interface 
          fetchPokemon={this.fetchPokemon} 
          handleChange={this.handleChange} 
        />

        { 
          img ? 
          this.renderScreen(img, id) 
          : null
        }

        <Route path='/details/:id' component={Details} />

        <div className='nameView'>
          <p>{this.state.name}</p>
        </div>

      </div>
    )}
}