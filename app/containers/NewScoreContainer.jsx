import { connect } from 'react-redux';
import Game from '../components/Game';
import { addNewScore } from '../reducers/index';
import NewScore from '../components/NewScore';

export default connect(
  (state) => {
    return {
      totalDistance: state.totalDistance
    }
  }, 
  (dispatch) => {
      return {
          addNewScore: function(newScore) {
              console.log('newScore in newScore container: ', newScore)
              dispatch(addNewScore(newScore));
          }
      }
  }
)(NewScore)