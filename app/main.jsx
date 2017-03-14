'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import AppContainer from './components/AppContainer';
import GameContainer from './containers/GameContainer';
import ResultsContainer from './containers/ResultsContainer';
import {receiveLocations, changeCurrentLocations, changeDistance, changeTotal, changeSelectedCategory, changeLatLngGuess} from './reducers/index';

const resetStore = function() {
  store.dispatch(changeCurrentLocations([]));
  store.dispatch(changeDistance(0));
  store.dispatch(changeTotal(0));
  store.dispatch(changeSelectedCategory('random'));
  store.dispatch(changeLatLngGuess([]));
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRedirect to="/home" />
        <Route path="/home" component={AppContainer} onEnter={resetStore}/>
        <Route path="/game" component={GameContainer} />
        <Route path="/results" component={ResultsContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)