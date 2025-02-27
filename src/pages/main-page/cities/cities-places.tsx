import PlacesList from '../places-list/places-list';
import PlacesSorting from '../places-sorting/places-sorting';
import { TypePlace } from '../../../types/mock-data-type/mock-data-type';

type PlacesListProps = {
  places : TypePlace[];
};

const CitiesPlaces = ({ places } :PlacesListProps) :JSX.Element => (
  <div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b> {/* поменять после поулчения массива */}

      <PlacesSorting />
      <PlacesList places = {places}/>
    </section>
    <div className="cities__right-section">
      <section className="cities__map map"></section>
    </div>
  </div>
);

export default CitiesPlaces;
