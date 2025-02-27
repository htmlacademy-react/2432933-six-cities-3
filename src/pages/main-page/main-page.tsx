import LocationsList from '../../components/locations-list/locations-list';
import { MockOffers } from '../../mockOffers';
import CitiesPlaces from './cities/cities-places';
import EmptyPlacesList from './cities/empty-places-list';

//const citiesMock :string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam' , 'Hamburg', 'Dusseldorf']; // mock или функция
type City = {
  name: string;
}

type Offer = {
  city: City;
}

const getCityNames = (offers: Offer[]): string[] => [...new Set(offers.map((offer) => offer.city.name))];

const MainPage = () :JSX.Element => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <LocationsList cities={getCityNames(MockOffers)} />

    <div className="cities">
      { MockOffers.length === 0 ? <EmptyPlacesList /> : <CitiesPlaces places = {MockOffers} />}
    </div>
  </main>
);


export default MainPage;
