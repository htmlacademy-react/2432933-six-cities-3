import { Link } from 'react-router-dom';
import { TypePlace } from '../../types/place-type/place-type';
import PremiumMark from '../premium-mark/premium-mark';
import PlacesCardImage from '../place-card-image/place-card-image';
import PlacesCardInfo from '../places-card-info/places-card-info';

type classNames = {
  container: string;
  imageWrapper: string;
}

type PlacesListProps = {
  places: TypePlace[];
  onActiveCardChange: (id: string | null) => void;
  classNames: classNames;
};

const PlacesList = ({ places, onActiveCardChange, classNames } :PlacesListProps) => (
  <div className={classNames.container}>
    { places.map((place) => (
      <article
        key={ place.id }
        className="cities__card place-card"
        onMouseEnter = {() => onActiveCardChange(place.id)}
        onMouseLeave = {() => onActiveCardChange(null)}
      >
        <Link to={`/offer/${place.id}`} >
          { place.isPremium && <PremiumMark /> }

          <div className={classNames.imageWrapper}>
            <PlacesCardImage image={place.previewImage}/>
            <div className="place-card__info">
              <PlacesCardInfo {...place} />
            </div>
          </div>
        </Link>
      </article>
    ))}
  </div>
);

export default PlacesList;
