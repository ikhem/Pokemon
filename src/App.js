import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Pokemon from './components/Pokemon';
import Details from './container/Details';
import routes from './utils/routes';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Pokemon />
        </div>
      </Router>
    );
  }
}
