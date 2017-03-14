import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { changeSelectedCategory, changeCurrentLocations, changeDistance, changeTotal, changeLatLngGuess } from '../reducers/index';


export default connect(
  (state) => {
    return {
      locations: state.locations,
      currentLocations: state.currentLocations,
      selectedCategory: state.selectedCategory
    }
  }, 
  (dispatch) => {
    return {
      changeSelectedCategory: function(newCurrLocations) {
        dispatch(changeSelectedCategory(newCurrLocations));
      },
      changeCurrentLocations: function(newLocations) {
        dispatch(changeCurrentLocations(newLocations));
      },
      changeDistance: function() {
        dispatch(changeDistance(0));
      },
      changeTotal: function() {
        dispatch(changeTotal(0));
      },
      changeLatLngGuess: function() {
        dispatch(changeLatLngGuess([]));
      }
    }
  }
)(HomePage)