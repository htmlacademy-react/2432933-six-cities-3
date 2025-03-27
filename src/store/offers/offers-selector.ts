import { createSelector } from '@reduxjs/toolkit';
import { store } from '../store';
import {filtersOffers, sortingOffers} from '../../pages/utils';

type State = ReturnType<typeof store.getState>;
const selectOffers = (state: State) => state.offers.list;
const selectCity = (state: State) => state.offers.city;
const selectSort = (state: State) => state.offers.sorting;
const selectName = (state: State) => state.offers.city;

const offersSelector = createSelector(
  [selectOffers, selectCity, selectSort],
  (offers, city, sort) => {
    const filteredOffers = filtersOffers(offers, city);
    return sortingOffers(filteredOffers, sort);
  }
);


export { offersSelector, selectName};
