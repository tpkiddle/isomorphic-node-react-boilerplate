'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Main from './views/layouts/Main.jsx';
import HomePage from './views/Home.jsx';
import ContactPage from './views/Contact.jsx';
import SettingsPage from './views/Settings.jsx';
import Error404 from './views/errors/Http404.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomePage}/>
      <Route path='/contact' component={ContactPage} />
      <Route path='/settings' component={SettingsPage} />
      <Redirect from='/gohome' to='/' />
      <Route path='*' component={Error404} />
    </Route>
  </Router>
);
