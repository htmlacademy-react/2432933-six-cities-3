import { useAppSelector, } from '../../hooks/use-app-redux/use-app-redux';
import LocationsList from '../../components/locations-list/locations-list';
import CitiesPlaces from './cities/cities-places';
import PreLoading from '../pre-loading/pre-loading';
import ErrorMessage from '../../components/error-message/error-message';

const MainPage = () => {
  const isLoading = useAppSelector((state) => state.offers.isLoading);
  const error = useAppSelector((state) => state.offers.error);

  if(error){
    return <ErrorMessage className={'error-data'} message={error} />;
  }

  if(isLoading){
    return <PreLoading />;
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <LocationsList />
      <div className="cities">
        <CitiesPlaces />
      </div>
    </main>
  );
};

export default MainPage;
