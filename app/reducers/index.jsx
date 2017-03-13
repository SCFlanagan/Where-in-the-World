import axios from 'axios'

//REDUCER

const hardcodedLocations = [
  {id: 0, name: 'Eiffel Tower', lat: 48.856309, lng: 2.297707, category: 'international'},
  {id: 1, name: 'Kremlin', lat: 55.752204, lng: 37.617521, category: 'international'},
  {id: 2, name: 'Sydney Opera House', lat: -33.856579, lng: 151.215275, category: 'international'},
  {id: 3, name: 'Christ the Redeemer', lat: -22.951689, lng: -43.210498, category: 'international'},
  {id: 4, name: 'Vatican', lat: 41.903369, lng: 12.453370, category: 'international'},
  {id: 5, name: 'Versailles', lat: 48.805070, lng: 2.120366, category: 'international'},
  {id: 6, name: 'Taj Mahal', lat: 27.175395, lng: 78.042215, category: 'international'},
  {id: 7, name: 'Big Ben', lat: 51.500936, lng: -0.124593, category: 'international'}
]



const initialState = {
  locations: hardcodedLocations,
  selectedCategory: '',
  currentLocations: [],
  latLngGuess: [],
  distance: 0,
  totalDistance: 0
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



export default reducer

