import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Pokemon from './components/Pokemon';

export default (
  <Router>
    <div>
      <Route path='/' component={Pokemon} />
    </div>
  </Router>
)