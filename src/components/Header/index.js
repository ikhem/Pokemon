import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/pokemon_logo.png';

const Header = () => {
  return (
    <div className="App-header">
      <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
    </div>
  );
};

export default Header;