import { store } from '../store';
import { createSelector } from '@reduxjs/toolkit';

type State = ReturnType<typeof store.getState>;

enum NameSpace {
  OFFER = 'offer'
}

const selectOffersNearby = (state: Pick<State, NameSpace.OFFER>) => state[NameSpace.OFFER].offersNearby;

const MAX_PLACES = 3;

const selectFirstFewOffers = createSelector(
  [selectOffersNearby],
  (offers) => offers.slice(0, MAX_PLACES)
);


export { selectFirstFewOffers, selectOffersNearby };
