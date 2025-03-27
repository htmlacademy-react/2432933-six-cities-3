import { combineReducers } from '@reduxjs/toolkit';
import offersReducer from './offers/offers-reducer';
import authReducer from './auth/auth-reducer';
import favoritesReducer from './favorite/favorites-reducer';
import offerReducer from './offer/offer-reducer';


const rootReducers = combineReducers({
  offers: offersReducer,
  authStatus: authReducer,
  favorites: favoritesReducer,
  offer: offerReducer,
});

export default rootReducers;


