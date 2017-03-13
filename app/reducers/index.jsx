import axios from 'axios'

//REDUCER

const initialState = {
  locations: [],
  selectedCategory: ''
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case "RECEIVE_CATEGORY_LOCATIONS":
      newState.locations = action.locations
      break;

    case "CHANGE_SELECTED_CATEGORY":
      newState.selectedCategory = action.selectedCategory;
      break;

    default: return state;

    }
  return newState
}

//ACTION CREATORS

export const receiveLocations = (locations) => {
  return {
    type: "RECEIVE_CATEGORY_LOCATIONS",
    locations
  }
}

export const changeSelectedCategory = (selectedCategory) => {
  return {
    type: "CHANGE_SELECTED_CATEGORY",
    selectedCategory
  }
}


export default reducer

