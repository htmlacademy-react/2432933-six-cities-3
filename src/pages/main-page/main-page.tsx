import LocationsList from '../../components/locations-list/locations-list';
import CitiesPlaces from './cities/cities-places';
import EmptyPlacesList from './cities/empty-places-list';
import { useAppSelector, useAppDispatch } from '../../hooks/use-app-redux/use-app-redux';
import { setCity } from '../../store/offers/offers-reducer';
import { offersSelector, selectName} from '../../store/offers/offers-selector';
import PreLoading from '../pre-loading/pre-loading';
import ErrorMessage from '../../components/error-message';
import { useCallback, } from 'react';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.offers.isLoading);
  const cityName = useAppSelector(selectName);
  const error = useAppSelector((state) => state.offers.error);
  const offersList = useAppSelector(offersSelector);

  const handleFilter = useCallback((city: string) => {
    dispatch(setCity(city));
  }, [dispatch]);

  if(error){
    return <ErrorMessage className={'error-data'} message={error} />;
  }

  if(isLoading){
    return <PreLoading />;
  }

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
