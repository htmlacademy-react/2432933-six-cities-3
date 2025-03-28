import { Link } from 'react-router-dom';
import PremiumMark from '../../../components/premium-mark/premium-mark';
import { TypePlace } from '../../../types/place-type/place-type';
import PlacesCardInfo from '../../../components/places-card-info/places-card-info';

const LocationsItems = (offer: TypePlace) => (
  <li className='favorites__item'>
    <Link to={`/offer/${offer.id}`} >
      <article className="favorites__card place-card">
        { offer.isPremium && <PremiumMark /> }
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={ offer.previewImage } width='150' height='110' alt="Place image" />
        </div>
        <div className="favorites__card-info place-card__info">
          <PlacesCardInfo {...offer} />
        </div>

      </article>
    </Link>
  </li>
);

export default LocationsItems;

