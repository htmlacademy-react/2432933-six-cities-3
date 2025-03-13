import { useState } from 'react';
import PlacesList from '../../../components/places-list/places-list';
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

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentList.length} places to stay in {currentFilterCity}</b>

        <PlacesSorting />
        <PlacesList
          places={currentList}
          onActiveCardChange={handleActiveCardChange}
          classes={{
            container: 'cities__places-list places__list tabs__content',
            imageWrapper: 'cities__image-wrapper place-card__image-wrapper'
          }}
        />
      </section>
      <div className="cities__right-section">
        <CitiesMap offers={currentList} currentId={activeCard} className={'cities__map map'}/>
      </div>
    </div>
  );
};

export default CitiesPlaces;
