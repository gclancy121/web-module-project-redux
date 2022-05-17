import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/movieActions";

const initialFavoriteState = {
  favorites: [],
  displayFavorites: true
};

const favReducer = (state = initialFavoriteState, action) => {
  switch(action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites.filter(item=>(item.id !==action.payload))]
      }
    case TOGGLE_FAVORITES: 
      return {
        ...state,
        displayFavorites: !state.displayFavorites
      }
    default:
      return state;
  }
}

export default favReducer;