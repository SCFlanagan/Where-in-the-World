import React from 'react';
import HomePageContainer from '../containers/HomePageContainer';
import store from '../store';
import { changeCurrentLocations, changeDistance, changeTotal, changeSelectedCategory, changeLatLngGuess } from '../reducers/index';
import axios from 'axios';

const loadAllLocations = (nextState, replace, done) => {
  axios.get('/api/locations')
    .then(locations => {
      return store.dispatch(receiveLocations(locations.data))
    })
    .then(() => done())
    .catch(console.error)
}

export default function(props) {
    return (
      <div>
        <HomePageContainer onLoad={loadAllLocations}/>
      </div>
    )
}
