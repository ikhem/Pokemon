import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Pokemon from '../../components/Pokemon';

import Details from '../../container/Details';
import Type from '../../container/Type';
import Search from '../../container/Search';

export default (
  <Router>
    <div>
      <Route path='/search' component={Pokemon} />
      <Route path='/details/:id' component={Details} />
      <Route path='/type/:type' component={Type} />
    </div>
  </Router>
)