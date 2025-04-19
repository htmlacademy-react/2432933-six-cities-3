import { Link } from 'react-router-dom';
import PremiumMark from '../../../components/premium-mark/premium-mark';
import { TypePlace } from '../../../types/place-type/place-type';
import PriceCard from '../../../components/places-card-info/components/price-card/price-card';
import RatingCard from '../../../components/places-card-info/components/rating-card/rating-card';
import ButtonFavorite from '../../../components/places-card-info/components/button-favorite/button-favorite';

const LocationsItems = (offer: TypePlace) => (
  <li className='favorites__item'>
    <Link to={`/offer/${offer.id}`} >
      <article className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={ offer.previewImage } width='150' height='110' alt="Place image" />
        </div>

        <div className="favorites__card-info place-card__info">
          { offer.isPremium && <PremiumMark /> }
          <div className='place-card__price-wrapper'>
            <PriceCard price={offer.price} />
            <ButtonFavorite id={offer.id} isFavorite={offer.isFavorite} />
          </div>

          <RatingCard placeRating={offer.rating} />
          <h2 className="place-card__name"> {offer.title} </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </Link>
  </li>
);
export default LocationsItems;

