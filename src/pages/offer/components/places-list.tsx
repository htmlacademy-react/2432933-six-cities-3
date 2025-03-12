import { TypePlace } from '../../../types/place-type/place-type';
import PremiumMark from '../../../components/premium-mark/premium-mark';
import PlacesCardImage from '../../../components/place-card-image/place-card-image';
import PlacesCardInfo from '../../../components/places-card-info/places-card-info';

type PlacesListProps = {
  places: TypePlace[];
  onActiveCardChange: (id: string | null) => void;
};

const PlacesList = ({ places, onActiveCardChange } :PlacesListProps) => (
  <div className="near-places__list places__list">
    { places.map((place) => (
      <article
        key={ place.id }
        className="cities__card place-card"
        onMouseEnter = {() => onActiveCardChange(place.id)}
        onMouseLeave = {() => onActiveCardChange(null)}
      >
        { place.isPremium && <PremiumMark /> }
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <PlacesCardImage image={place.previewImage}/>

          <div className="place-card__info">
            <PlacesCardInfo {...place} />
          </div>
        </div>
      </article>
    ))}
  </div>

);

export default PlacesList;
