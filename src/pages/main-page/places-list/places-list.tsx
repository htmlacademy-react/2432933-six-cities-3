import { useState } from 'react';
import { TypePlace } from '../../../types/place-type/place-type';
import PremiumMark from '../../../components/premium-mark/premium-mark';
import PlacesCardInfo from '../../../components/places-card-info/places-card-info';
import PlacesCardImage from '../../../components/place-card-image/place-card-image';

type PlacesListProps = {
  places: TypePlace[];
};

const PlacesList = ({ places } :PlacesListProps) => {

  const [, setActiveCard] = useState<string | null>(null);
  // позже добавить activeCard  для маркера карты
  return(
    <div className="cities__places-list places__list tabs__content">
      { places.map((place) => (
        <article
          key={ place.id }
          className="cities__card place-card"
          onMouseEnter = {() => setActiveCard(place.id)}
          onMouseLeave = {() => setActiveCard(null)}
        >
          { place.isPremium && <PremiumMark /> }

          <div className="cities__image-wrapper place-card__image-wrapper">
            <PlacesCardImage image={place.previewImage} link={`/offer/${place.id}`}/>
            <div className="place-card__info">
              <PlacesCardInfo {...place} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PlacesList;
