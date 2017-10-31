'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from './views/layouts/Basic.jsx';
import HomePage from './views/Home.jsx';
import ContactPage from './views/Contact.jsx';
import Error404 from './views/errors/Http404.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path='/contact' component={ContactPage} />
      <Redirect from='/gohome' to='/' />
      <Route path='*' component={Error404} />
    </Route>
  </Router>
);
