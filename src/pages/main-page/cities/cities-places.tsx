import { useState } from 'react';
import PlacesList from '../places-list/places-list';
import PlacesSorting from '../places-sorting/places-sorting';
import { TypePlace } from '../../../types/place-type/place-type';
import CitiesMap from '../../../components/cities-map/cities-map';

type PlacesListProps = {
  places : TypePlace[];
};

const currentFilterCity = 'Amsterdam';
const CitiesPlaces = ({ places } :PlacesListProps) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleActiveCardChange = (id: string | null) => {
    setActiveCard(id);
  };

  const currentList = places.filter((place) => place.city.name === currentFilterCity);
  const firstPlace = currentList[0].city.location;

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentList.length} places to stay in {currentFilterCity}</b>

        <PlacesSorting />
        <PlacesList places={currentList} onActiveCardChange={handleActiveCardChange}/>
      </section>
      <CitiesMap location={firstPlace} offers={currentList} currentId={activeCard}/>
    </div>
  );
};

export default CitiesPlaces;
