import { connect } from 'react-redux';
import Final from '../components/Final';
import axios from 'axios';

export default connect(
  (state) => {
    console.log('new score: ', state.newScore)
    return {
      scores: state.scores,
      totalDistance: state.totalDistance,
      newScore: state.newScore
    }
  }, 
  (dispatch) => {
    return {    
      addScore: function(newScore) {
        axios.post('/api/scores/', newScore)
          .then((created) => created)
          .catch(console.error)
      },
      deleteScore: function(scoreId) {
        axios.delete(`/api/scores/${scoreId}`)
          .then(deleted => deleted)
          .catch(console.error)
      }
    }
  }
)(Final)