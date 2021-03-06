import { connect } from 'react-redux';
import Game from '../components/Game';
import { changeLatLngGuess, changeDistance, addToTotal, addedMarker } from '../reducers/index';

export default connect(
  (state) => {
    return {
      currentLocations: state.currentLocations,
      markerAdded: state.markerAdded
    }
  }, 
  (dispatch) => {
      return {
          changeLatLngGuess: function(latLngArr) {
              dispatch(changeLatLngGuess(latLngArr));
          },
          changeDistance: function(distance) {
              dispatch(changeDistance(distance));
          },
          addToTotal: function(added) {
            dispatch(addToTotal(added));
          },
          addedMarker: function(bool) {
            dispatch(addedMarker(bool));
          }
      }
  }
)(Game)