'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import axios from 'axios';
import store from './store';
import HomePage from './components/HomePage';
import GameContainer from './containers/GameContainer';
import ResultsContainer from './containers/ResultsContainer';



render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomePage} />
        <Route path="/game" component={GameContainer} />
        <Route path="/results" component={ResultsContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)