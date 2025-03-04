import LocationsList from '../../components/locations-list/locations-list';
import { MockOffers } from '../../mocks/offers/mockOffers';
import CitiesPlaces from './cities/cities-places';
import EmptyPlacesList from './cities/empty-places-list';

const citiesMock :string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam' , 'Hamburg', 'Dusseldorf'];

const MainPage = () => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <LocationsList cities={ citiesMock } />

    <div className="cities">
      { MockOffers.length === 0 ? <EmptyPlacesList /> : <CitiesPlaces places={MockOffers} />}
    </div>
  </main>
);


export default MainPage;
