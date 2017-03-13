'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'
import store from './store'
import HomePage from './components/HomePage'
import Game from './components/Game'

const loadLocations = (nextState, replace, done) => {
  axios.get(`/api/game/${nextState.params.categoryName}`)
    .then(locations => {
      console.log(locations)
    })
    .catch(console.error)
}
    
//     store.dispatch(receiveProducts(products.data)))
//     .then(() => {
//       let authUser = store.getState().auth.id;

//       axios.get(`/api/cart/${authUser || 'unauthUser'}`)
//         .then(cart => cart.data)
//         .then(cart => store.dispatch(receiveLineItems(cart)))
//     })
//     .then(() => done())
//     .catch(console.error)
// }


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomePage} />
        <Route path="/game" component={Game} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)