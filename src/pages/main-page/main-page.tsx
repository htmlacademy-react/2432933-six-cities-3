import LocationsList from '../../components/locations-list/locations-list';
import CitiesPlaces from './cities/cities-places';
import EmptyPlacesList from './cities/empty-places-list';
import { useAppSelector, useAppDispatch } from '../../hooks/use-app-redux/use-app-redux';
import { setCity } from '../../store/offers/offers-reducer';
/* import { useEffect } from 'react';
import { MockOffers } from '../../mocks/offers/mockOffers';

import { filtersOffers, sortingOffers } from '../utils';
import { useMemo } from 'react'; */
import { offersSelector } from '../../store/offers/offers-selector';

const MainPage = () => {
  const dispatch = useAppDispatch();

  const cityName = useAppSelector((state) => state.offers.city);
  const offersList = useAppSelector(offersSelector);

  //  ///////////////////////////////////////////////////////

  //const selectSort = useAppSelector((state) => state.offers.sorting);
  //const offers = useAppSelector((state) => state.offers.offers);

  //const filteredOffers = useMemo(() => filtersOffers(MockOffers, cityName), [cityName]);
  //const sortOffers = useMemo(() => sortingOffers(filteredOffers, selectSort), [selectSort, filteredOffers]);

  //console.log(offersList);

  /*   useEffect(() => {
    //const filterOffers = filtersOffers(MockOffers, cityName);
    //const sortOffers = sortingOffers(selectSort, filterOffers);

    dispatch(setOffers(sortOffers));
   }, [dispatch, sortOffers]);
   */

  //  ///////////////////////////////////////////////////////
  const handleFilter = (city: string) => dispatch(setCity(city));

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <LocationsList cityName={ cityName } handleFilter={handleFilter}/>

      <div className="cities">
        { offersList.length === 0 ? <EmptyPlacesList /> : <CitiesPlaces places={offersList} cityName={cityName} />}
      </div>
    </main>
  );
};

export default MainPage;
