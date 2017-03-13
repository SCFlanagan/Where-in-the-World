import { connect } from 'react-redux';
import Results from '../components/Results';



export default connect(
  (state) => {
      
    return {
      currentLocations: state.currentLocations,
      latLngGuess: state.latLngGuess,
      distance: state.distance
    }
})(Results)