import { TypePlace } from '../../types/place-type/place-type';
import PlacesCardInfo from '../places-card-info/places-card-info';

type ClassNames = {
  container: string;
  imageWrapper: string;
}

type PlacesListProps = {
  places: TypePlace[];
  classNames: ClassNames;
};

const PlacesList = ({ places, classNames } :PlacesListProps) => (
  <div className={classNames.container}>
    { places.map((place) => (
      <article
        key={ place.id }
        className="cities__card place-card"
      >
        <PlacesCardInfo {...place} />
      </article>
    ))}
  </div>
);
export default PlacesList;
