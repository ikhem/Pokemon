import React, { Component } from 'react';
import './Pokemon.css';

export default class Pokemon extends Component {
  render(){
    return(
      <div className='mainView'>
        <div className='picView'>
          <p>Bulbasure</p>
        </div>

        <div className='nameView'>
          <p>Venasaur</p>
        </div>
      </div>
    );
  }
}