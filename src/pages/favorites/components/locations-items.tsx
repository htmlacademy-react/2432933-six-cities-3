//import PlacesCardImage from '../../../components/place-card-image/place-card-image';
import PremiumMark from '../../../components/premium-mark/premium-mark';
import { TypePlace } from '../../../types/place-type/place-type';
import PlacesCardInfo from '../../../components/places-card-info/places-card-info';

const LocationsItems = (offer: TypePlace) => (
  <article className="favorites__card place-card">
    { offer.isPremium && <PremiumMark /> }
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={ offer.previewImage } width="150" height="110" alt="Place image" />
      </a>
    </div>
    <div className="favorites__card-info place-card__info">
      <PlacesCardInfo {...offer} />
    </div>


  </article>
);

export default LocationsItems;

