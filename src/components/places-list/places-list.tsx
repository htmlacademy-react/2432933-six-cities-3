import { TypePlace } from '../../types/place-type/place-type';
import LinkWrapper from '../link-wrapper/link-wrapper';
import PremiumMark from '../premium-mark/premium-mark';
import PlacesCardImage from '../place-card-image/place-card-image';
import PlacesCardInfo from '../places-card-info/places-card-info';

type Classes = {
  container: string;
  imageWrapper: string;
}

type PlacesListProps = {
  places: TypePlace[];
  onActiveCardChange: (id: string | null) => void;
  classes: Classes;
};

const PlacesList = ({ places, onActiveCardChange, classes } :PlacesListProps) => (
  <div className={classes.container}>
    { places.map((place) => (
      <article
        key={ place.id }
        className="cities__card place-card"
        onMouseEnter = {() => onActiveCardChange(place.id)}
        onMouseLeave = {() => onActiveCardChange(null)}
      >
        <LinkWrapper link={`/offer/${place.id}`} >
          { place.isPremium && <PremiumMark /> }

          <div className={classes.imageWrapper}>
            <PlacesCardImage image={place.previewImage}/>
            <div className="place-card__info">
              <PlacesCardInfo {...place} />
            </div>
          </div>
        </LinkWrapper>
      </article>
    ))}
  </div>
);

export default PlacesList;
