import { createSelector } from '@reduxjs/toolkit';
import {filtersOffers, sortingOffers, } from '../../utils/filter-sort-offers';
import { NameSpace } from '../const';
import { State } from '../../types/state';

const selectOffers = (state: Pick<State, NameSpace.Offers>) => state.offers.list;
const selectCity = (state: Pick<State, NameSpace.Offers>) => state.offers.city;
const selectSort = (state: Pick<State, NameSpace.Offers>) => state.offers.sorting;
const selectName = (state: Pick<State, NameSpace.Offers>) => state.offers.city;

const offersSelector = createSelector(
  [selectOffers, selectCity, selectSort],
  (offers, city, sort) => {
    const filteredOffers = filtersOffers(offers, city);
    return sortingOffers(filteredOffers, sort);
  }
);


export { offersSelector, selectName};
