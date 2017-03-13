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
import { changeCurrentLocations } from './reducers/index';


const chooseFiveRandomly = function(arr) {
  let chosen = [];
  for (var i = 5; i > 0; i--) {
    let index = Math.floor(Math.random() * arr.length);
    chosen.push(arr[index]);
    arr.splice(index, 1);
  }
  return chosen
}

const chooseLocations = function() {
  let state = store.getState();
  let categoryLocations = [];
  for (var i = 0; i < state.locations.length; i++) {
    if (state.locations[i].category === state.selectedCategory) {
      categoryLocations.push(state.locations[i]);
    }
  }
  let selectedLocations = chooseFiveRandomly(categoryLocations)
  store.dispatch(changeCurrentLocations(selectedLocations));
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomePage} />
        <Route path="/game" component={GameContainer} onEnter={chooseLocations} />
        <Route path="/results" component={ResultsContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)