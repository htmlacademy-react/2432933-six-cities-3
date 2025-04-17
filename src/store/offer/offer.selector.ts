import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { State } from '../../types/state';


const MAX_PLACES = 3;
const MAX_COMMENTS = 10;

const selectOffersNearby = (state: Pick<State, NameSpace.OFFER>) => state[NameSpace.OFFER].offersNearby;
const selectOffersComments = (state: Pick<State, NameSpace.OFFER>) => state[NameSpace.OFFER].comments;
const selectOffer = (state: Pick<State, NameSpace.OFFER>) => state[NameSpace.OFFER].offer;


const selectSortToLimited = createSelector(
  [selectOffersComments],
  (comments) => [...comments].sort((offerFirst, offerSecond) => new Date(offerSecond.date).getTime() - new Date(offerFirst.date).getTime()).slice(0, MAX_COMMENTS)
);

const selectFirstFewOffers = createSelector(
  [selectOffersNearby],
  (offers) => offers.slice(0, MAX_PLACES)
);


export { selectFirstFewOffers, selectSortToLimited, selectOffer};
