import { combineReducers } from '@reduxjs/toolkit';
import offersReducer from './offers/offers-reducer';
import authReducer from './auth/auth-reducer';


const rootReducers = combineReducers({
  offers: offersReducer,
  authStatus: authReducer,
});

export default rootReducers;


