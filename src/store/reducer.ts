import { combineReducers } from '@reduxjs/toolkit';
import offersReducer from './offers/offers-reducer';
import authReducer from './auth/auth-reducer';
import favoritesReducer from './favorite/favorites-reducer';
import offerReducer from './offer/offer-reducer';
import activeCardReducer from './active-card/card-reducer';
import toastReducer from './toast.reducer';


const rootReducers = combineReducers({
  offers: offersReducer,
  authStatus: authReducer,
  favorites: favoritesReducer,
  offer: offerReducer,
  card: activeCardReducer,
  error: toastReducer,
});

export default rootReducers;


