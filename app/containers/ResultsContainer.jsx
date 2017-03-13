import { connect } from 'react-redux';
import Results from '../components/Results';
import { changeCurrentLocations, changeLatLngGuess, changeDistance, addToTotal } from '../reducers/index';


export default connect(
  (state) => {
    return {
      currentLocations: state.currentLocations,
      latLngGuess: state.latLngGuess,
      distance: state.distance,
      totalDistance: state.totalDistance
    }
  }, 
  (dispatch) => {
    return {
      changeCurrentLocations: function(newCurrLocations) {
        dispatch(changeCurrentLocations(newCurrLocations));
      },
      changeLatLngGuess: function(newGuess) {
        dispatch(changeLatLngGuess(newGuess));
      },
      changeDistance: function(newDistance) {
        dispatch(changeDistance(newDistance));
      },
    }
  }
)(Results)