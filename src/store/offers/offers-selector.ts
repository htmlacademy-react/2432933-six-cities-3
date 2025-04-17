import { createSelector } from '@reduxjs/toolkit';
import { store } from '../store';
import {filtersOffers, sortingOffers, } from '../../pages/utils';
import { NameSpace } from '../const';

type State = ReturnType<typeof store.getState>;
const selectOffers = (state: Pick<State, NameSpace.OFFERS>) => state.offers.list;
const selectCity = (state: Pick<State, NameSpace.OFFERS>) => state.offers.city;
const selectSort = (state: Pick<State, NameSpace.OFFERS>) => state.offers.sorting;
const selectName = (state: Pick<State, NameSpace.OFFERS>) => state.offers.city;

const offersSelector = createSelector(
  [selectOffers, selectCity, selectSort],
  (offers, city, sort) => {
    const filteredOffers = filtersOffers(offers, city);
    return sortingOffers(filteredOffers, sort);
  }
);


export { offersSelector, selectName};
