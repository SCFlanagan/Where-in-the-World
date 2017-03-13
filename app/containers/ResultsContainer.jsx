import { connect } from 'react-redux';
import Results from '../components/Results';



export default connect(
  (state) => {
      console.log('resultsContainer state: ', state)
    return {

    }
})(Results)