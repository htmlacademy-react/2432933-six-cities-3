import { combineReducers } from '@reduxjs/toolkit';
import offersReducer from './offers/offers-reducer';
import authReducer from './auth/auth-reducer';
import favoritesReducer from './favorite/favorites-reducer';
import offerReducer from './offer/offer-reducer';
import activeCardReducer from './test-reducer';


const rootReducers = combineReducers({
  offers: offersReducer,
  authStatus: authReducer,
  favorites: favoritesReducer,
  offer: offerReducer,
  card:activeCardReducer,
});

export default rootReducers;


