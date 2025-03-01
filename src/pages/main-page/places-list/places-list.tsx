import { TypePlace } from '../../../types/place-type/place-type';
import PremiumMark from '../../../components/premium-mark/premium-mark';
import PlacesCardInfo from '../../../components/places-card-info/places-card-info';

type PlacesListProps = {
  places: TypePlace[];
};

const PlacesList = ({ places } :PlacesListProps) => (
  <div className="cities__places-list places__list tabs__content">
    { places.map((place) => (
      <article key={ place.id } className="cities__card place-card">
        { place.isPremium && <PremiumMark /> }

        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={ place.previewImage } width="260" height="200" alt="Place image" />
          </a>
          <PlacesCardInfo {...place} />
        </div>
      </article>
    ))}
  </div>
);


export default PlacesList;
