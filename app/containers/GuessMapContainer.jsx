import { connect } from 'react-redux';
import GuessMap from '../components/GuessMap';
import { changeLatLngGuess, changeDistance, addToTotal } from '../reducers/index';

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
          },
          addToTotal: function(added) {
            dispatch(addToTotal(added));
          }
      }
  }
)(GuessMap)