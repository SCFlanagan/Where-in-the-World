'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import axios from 'axios';
import store from './store';

import AppContainer from './components/AppContainer';
import GameContainer from './containers/GameContainer';
import ResultsContainer from './containers/ResultsContainer';
import FinalContainer from './containers/FinalContainer';

import {receiveLocations, changeCurrentLocations, changeDistance, changeTotal, changeSelectedCategory, changeLatLngGuess, receiveScores} from './reducers/index';

const resetStore = function(nextState, replace, done) {
  axios.get('/api/locations')
    .then(locations => {
      store.dispatch(receiveLocations(locations.data));
      store.dispatch(changeCurrentLocations([]));
      store.dispatch(changeDistance(0));
      store.dispatch(changeTotal(0));
      store.dispatch(changeSelectedCategory('Random'));
      store.dispatch(changeLatLngGuess([]));
    })
    .then(() => {
      axios.get('/api/scores')
        .then (scores => {
          return scores.data;
        })
        .then(storesData => {
          let newArr = storesData.map(each => {
            each.score = Number(each.score);
            return each;
          });
          newArr.sort((a, b) => {
            return a.score - b.score;
          });
          return newArr;
        })
        .then(sortedScores => {
          store.dispatch(receiveScores(sortedScores))
        })
        .then(() => done())
        .catch(console.error)
    })
    .then(() => done())
    .catch(console.error)
}



render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" >
        <IndexRedirect to="/home" />
        <Route path="/home" component={AppContainer} onEnter={resetStore}/>
        <Route path="/game" component={GameContainer} />
        <Route path="/results" component={ResultsContainer}/>
        <Route path="/final" component={FinalContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)