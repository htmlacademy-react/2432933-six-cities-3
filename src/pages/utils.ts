import { TypePlace } from '../types/place-type/place-type';

const filtersOffers = (offers: TypePlace[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

type SortFunction = (offers: TypePlace[]) => TypePlace[];

const sortOffers: Record<string, SortFunction> = {
  'Popular': (offers) => [...offers],
  'Price: low to high': (offers) => offers.toSorted((firstOffer, secondOffer) => firstOffer.price - secondOffer.price),
  'Price: high to low': (offers) => offers.toSorted((firstOffer, secondOffer) => secondOffer.price - firstOffer.price),
  'Top rated first'   : (offers) => offers.toSorted((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating),
};

const sortingOffers = (offers: TypePlace[], key: string) => sortOffers[key](offers);

export {filtersOffers, sortingOffers};
