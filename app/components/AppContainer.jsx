import React from 'react';
import HomePageContainer from '../containers/HomePageContainer';
import store from '../store';
import { changeCurrentLocations, changeDistance, changeTotal, changeSelectedCategory, changeLatLngGuess, receiveScores } from '../reducers/index';
import axios from 'axios';



export default function(props) {
    return (
      <div>
        <HomePageContainer />
      </div>
    )
}
