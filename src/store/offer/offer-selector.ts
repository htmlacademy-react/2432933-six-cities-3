import { store } from '../store';
import { createSelector } from '@reduxjs/toolkit';

type State = ReturnType<typeof store.getState>;

const selectOffersNearby = (state: State) => state.offer.offersNearby;

const MAX_PLACES = 3;

const selectFirstFewOffers = createSelector(
  [selectOffersNearby],
  (offers) => offers.slice(0, MAX_PLACES)
);


export { selectFirstFewOffers };
