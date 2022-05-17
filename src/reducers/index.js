import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favReducer from './favoriteReducer';

export default combineReducers({
  movieReducer,
  favReducer,
});