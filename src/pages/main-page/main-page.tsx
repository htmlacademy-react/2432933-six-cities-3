import { useAppSelector, } from '../../hooks/use-app-redux/use-app-redux';
import LocationsList from '../../components/locations-list/locations-list';
import CitiesPlaces from './cities/cities-places';
import PreLoading from '../pre-loading/pre-loading';

const MainPage = () => {
  const isLoading = useAppSelector((state) => state.offers.isLoading);

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
