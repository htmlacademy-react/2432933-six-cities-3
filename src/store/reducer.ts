import { combineReducers } from '@reduxjs/toolkit';
import offersReducer from './offers/offers-reducer';

const rootReducers = combineReducers({
  offers: offersReducer,
});

export default rootReducers;


