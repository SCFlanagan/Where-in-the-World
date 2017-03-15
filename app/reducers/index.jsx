import axios from 'axios'

//REDUCER

const initialState = {
  locations: [],
  selectedCategory: 'Random',
  currentLocations: [],
  latLngGuess: [],
  distance: 0,
  totalDistance: 0,
  scores: [],
  newScore: {}
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case "RECEIVE_LOCATIONS":
      newState.locations = action.locations
      break;

    case "CHANGE_SELECTED_CATEGORY":
      newState.selectedCategory = action.selectedCategory;
      break;

    case "CHANGE_CURRENT_LOCATIONS":
      newState.currentLocations = action.currentLocations;
      break;

    case "ADD_LAT_LNG_GUESS":
      newState.latLngGuess = action.latLngArr;
      break;

    case "CHANGE_DISTANCE":
      newState.distance = action.distance;
      break;

    case "ADD_TO_TOTAL":
      newState.totalDistance += +action.added;
      break;

    case "CHANGE_TOTAL":
      newState.totalDistance = action.total;
      break;

    case "RECEIVE_SCORES":
      newState.scores = action.scores;
      break;

    case "ADD_NEW_SCORE":
      newState.newScore = action.newScore;
      break;

    default: return state;

    }
  return newState
}

//ACTION CREATORS

export const receiveLocations = (locations) => {
  return {
    type: "RECEIVE_LOCATIONS",
    locations
  }
}

export const changeSelectedCategory = (selectedCategory) => {
  return {
    type: "CHANGE_SELECTED_CATEGORY",
    selectedCategory
  }
}

export const changeCurrentLocations = (currentLocations) => {
  return {
    type: "CHANGE_CURRENT_LOCATIONS",
    currentLocations
  }
}

export const changeLatLngGuess = (latLngArr) => {
  return {
    type: "ADD_LAT_LNG_GUESS",
    latLngArr
  }
}

export const changeDistance = (distance) => {
  return {
    type: "CHANGE_DISTANCE",
    distance
  }
}

export const changeTotal = (total) => {
  return {
    type: "CHANGE_TOTAL",
    total
  }
}

export const addToTotal = (added) => {
  return {
    type: "ADD_TO_TOTAL",
    added
  }
}

export const receiveScores = (scores) => {
  return {
    type: "RECEIVE_SCORES",
    scores
  }
}

export const addNewScore = (scoreObj) => {
  return {
    type: "ADD_NEW_SCORE",
    scoreObj
  }
}


export default reducer

