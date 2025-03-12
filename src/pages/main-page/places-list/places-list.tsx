import { TypePlace } from '../../../types/place-type/place-type';
import PremiumMark from '../../../components/premium-mark/premium-mark';
import PlacesCardInfo from '../../../components/places-card-info/places-card-info';
import PlacesCardImage from '../../../components/place-card-image/place-card-image';
import LinkWrapper from '../../../components/link-wrapper/link-wrapper';

type PlacesListProps = {
  places: TypePlace[];
  onActiveCardChange: (id: string | null) => void;
};

const PlacesList = ({ places, onActiveCardChange } :PlacesListProps) => (
  <div className="cities__places-list places__list tabs__content">
    { places.map((place) => (

      <article
        key={ place.id }
        className="cities__card place-card"
        onMouseEnter = {() => onActiveCardChange(place.id)}
        onMouseLeave = {() => onActiveCardChange(null)}
      >
        <LinkWrapper link={`/offer/${place.id}`} >
          { place.isPremium && <PremiumMark /> }

          <div className="cities__image-wrapper place-card__image-wrapper">
            <PlacesCardImage image={place.previewImage} />
            <div className="place-card__info">
              <PlacesCardInfo {...place} />
            </div>
          </div>
        </LinkWrapper>
      </article>
    ))}
  </div>
);


/* link={`/offer/${place.id}`} */

export default PlacesList;
