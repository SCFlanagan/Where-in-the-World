import { connect } from 'react-redux';
import Game from '../components/Game';
import { changeLatLngGuess, changeDistance } from '../reducers/index';

export default connect(
  (state) => {

    return {
      currentLocations: state.currentLocations
    }
  }, 
  (dispatch) => {
      return {
          changeLatLngGuess: function(latLngArr) {
              dispatch(changeLatLngGuess(latLngArr));
          },
          changeDistance: function(distance) {
              dispatch(changeDistance(distance));
          }
      }
  }
)(Game)