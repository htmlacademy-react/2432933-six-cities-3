import { TypePlace } from '../../../types/place-type/place-type';
import { useState } from 'react';
import PremiumMark from '../../../components/premium-mark/premium-mark';
import PlacesCardImage from '../../../components/place-card-image/place-card-image';
import PlacesCardInfo from '../../../components/places-card-info/places-card-info';

const MAX_PLACES = 3;

type PlacesListProps = {
  places: TypePlace[];
};


const PlacesList = ({ places } :PlacesListProps) => {
  const [, setActiveCard] = useState<string | null>(null);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighborhood</h2>
        <div className="near-places__list places__list">
          { places.slice(0, MAX_PLACES).map((place) => (
            <article
              key={ place.id }
              className="cities__card place-card"
              onMouseEnter = {() => setActiveCard(place.id)}
              onMouseLeave = {() => setActiveCard(null)}
            >
              { place.isPremium && <PremiumMark /> }
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <PlacesCardImage image={place.previewImage} link={`/offer/${place.id}`}/>

                <div className="place-card__info">
                  <PlacesCardInfo {...place} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlacesList;
