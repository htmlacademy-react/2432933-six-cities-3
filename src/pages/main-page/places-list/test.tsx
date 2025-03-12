import { TypePlace } from '../../../types/place-type/place-type';
import PremiumMark from '../../../components/premium-mark/premium-mark';
import PlacesCardInfo from '../../../components/places-card-info/places-card-info';
import PlacesCardImage from '../../../components/place-card-image/place-card-image';

type PlacesListProps = {
  places: TypePlace[];
  onActiveCardChange: (id: string | null) => void;
  classes: Classes;
};

type Classes = {
  container: string;
  imageWrapper: string;
}

const PlacesListTest = ({ places, onActiveCardChange, classes } :PlacesListProps) => (
  <div className={classes.container}>
    { places.map((place) => (
      <article
        key={ place.id }
        className="cities__card place-card"
        onMouseEnter = {() => onActiveCardChange(place.id)}
        onMouseLeave = {() => onActiveCardChange(null)}
      >
        { place.isPremium && <PremiumMark /> }

        <div className={classes.imageWrapper}>
          <PlacesCardImage image={place.previewImage} link={`/offer/${place.id}`}/>
          <div className="place-card__info">
            <PlacesCardInfo {...place} />
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default PlacesListTest;
