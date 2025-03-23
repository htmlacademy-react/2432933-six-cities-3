import { combineReducers } from '@reduxjs/toolkit';
import offersReducer from './offers/offers-reducer';
import authReducer from './auth/auth-reducer';
import favoritesReducer from './fovorites';


const rootReducers = combineReducers({
  offers: offersReducer,
  authStatus: authReducer,
  favorites: favoritesReducer,
});

export default rootReducers;


