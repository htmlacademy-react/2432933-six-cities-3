import { useState } from 'react';
import PlacesList from '../../../components/places-list/places-list';
import PlacesSorting from '../places-sorting/places-sorting';
import { TypePlace } from '../../../types/place-type/place-type';
import CitiesMap from '../../../components/cities-map/cities-map';


type PlacesListProps = {
  places: TypePlace[];
  cityName: string;
};


const CitiesPlaces = ({ places, cityName } :PlacesListProps) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleActiveCardChange = (id: string | null) => {
    setActiveCard(id);
  };

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{places.length} places to stay in {cityName}</b>

        <PlacesSorting />
        <PlacesList
          places={places}
          onActiveCardChange={handleActiveCardChange}
          classNames={{
            container: 'cities__places-list places__list tabs__content',
            imageWrapper: 'cities__image-wrapper place-card__image-wrapper'
          }}
        />
      </section>
      <div className="cities__right-section">
        <CitiesMap offers={places} currentId={activeCard} className={'cities__map map'}/>
      </div>
    </div>
  );
};

export default CitiesPlaces;
