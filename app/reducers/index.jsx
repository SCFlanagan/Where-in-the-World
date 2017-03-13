import axios from 'axios'

//REDUCER

const hardcodedLocations = [
  {name: 'the Eiffel Tower in Paris, France', lat: 48.856309, lng: 2.297707, category: 'international'},
  {name: 'the Kremlin, in Moscow, Russia', lat: 55.752204, lng: 37.617521, category: 'international'},
  {name: 'the Sydney Opera House in Sydney, Australia', lat: -33.856579, lng: 151.215275, category: 'international'},
  {name: 'the statue Christ the Redeemer, in Rio de Janeiro', lat: -22.951689, lng: -43.210498, category: 'international'},
  {name: 'the Vatican in Rome, Italy', lat: 41.903369, lng: 12.453370, category: 'international'},
  {name: 'Versailles Palace in Versailles, France', lat: 48.804976, lng: 2.119592, category: 'international'},
  {name: 'the Taj Mahal in Agra, India', lat: 27.175395, lng: 78.042215, category: 'international'},
  {name: 'Big Ben, in London, England', lat: 51.500936, lng: -0.124593, category: 'international'},
  {name: 'La Sagrada Familia', lat: 41.403196, lng: 2.173622, category: 'international'},
  {name: 'St. Basil\'s Cathedral', lat: 55.752363, lng: 37.622181, category: 'international'},
  {name: 'the Burj Khalifa in Dubai', lat: 25.196890, lng: 55.272994, category: 'international'},
  {name: 'the Trevi Fountain in Rome, Italy', lat: 41.900845, lng: 12.483316, category: 'international'},
  {name: 'Sacre-Coeur in Paris, France', lat: 48.886031, lng: 2.342556, category: 'international'},
  {name: 'the Rock of Gibraltar', lat: 36.154869, lng: -5.340573, category: 'international'},
  {name: 'the Bridge of Sighs in Venice, Italy', lat: 45.433974, lng: 12.340897, category: 'international'},

  {name: 'the Grand Canyon in Arizona', lat: 36.066508, lng: -112.145978, category: 'natural'},
  {name: 'Niagara Falls in New York', lat: 43.086554, lng: -79.068747, category: 'natural'},
  {name: 'Iguazu National Park in Argentina', lat: -25.687218, lng: -54.443498, category: 'natural'},
  {name: 'the Amazon River in Brazil', lat: -3.137768, lng: -60.493357, category: 'natural'},
  {name: 'El Capitan in Yosemite National Park in California', lat: 37.722403, lng: -119.632899, category: 'natural'},
  {name: 'Redwood National Park in California', lat: 41.376549, lng: -124.002877, category: 'natural'},
  {name: 'Lake Titicaca in Chile', lat: -15.425433, lng: -69.477246, category: 'natural'},
  {name: 'Mt. Everest in Nepal', lat: 28.002442, lng: 86.852606, category: 'natural'},
  {name: 'Great Barrier Reef in Australia', lat: -23.306160, lng: 151.916823, category: 'natural'},

  {id: 31, name: 'the Statue of Liberty in New York City', lat: 40.689860, lng: -74.043477, category: 'usa'},
  {id: 32, name: 'the Hollwood Sign in Los Angeles, California', lat: 34.131088, lng: -118.320441, category: 'usa'},
  {id: 33, name: 'Alcatraz Island in San Francisco, California', lat: 37.826264, lng: -122.422104, category: 'usa'},
  {id: 34, name: 'the Lincoln Memorial in Washington, D.C', lat: 38.889298, lng: -77.049019, category: 'usa'},
  {id: 35, name: 'the Las Vegas Strip in Nevada', lat: 36.112033, lng: -115.173029, category: 'usa'},
  {id: 36, name: 'Mt. Rushmore in South Dakota', lat: 43.876985, lng: -103.455860, category: 'usa'},

  {name: 'the Colosseum in Rome, Italy', lat: 41.889694, lng: 12.491002, category: 'historical'},
  {name: 'the Sphynx and Pyramids of Giza in Egypt', lat: 29.975475, lng: 31.138286, category: 'historical'},
  {name: 'Machu Picchu in Peru', lat: -13.163427, lng: -72.545126, category: 'historical'},
  {name: 'the ruins of Pompeii, Italy', lat: 40.749183, lng: 14.484381, category: 'historical'},
  {name: 'the ancient city of Petra in Jordan', lat: 30.324, lng: 35.448303, category: 'historical'},
  {name: 'Stonehenge in the United Kingdom', lat: 51.178895, lng: -1.826247, category: 'historical'},
  {name: 'El Castillo in Mexico', lat: 20.683223, lng: -88.569241, category: 'historical'}
];



const initialState = {
  locations: hardcodedLocations,
  selectedCategory: null,
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

