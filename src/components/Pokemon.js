import React, { Component } from 'react';
import './Pokemon.css';

export default class Pokemon extends Component {

  render(){
    return(
      <div className='mainView'>
        <div className='picView'>
          <img src={this.props.img} alt='pokemon_image' />
        </div>

        <div className='nameView'>
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}