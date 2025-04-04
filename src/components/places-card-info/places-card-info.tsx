import { TypePlace } from '../../types/place-type/place-type';
import RatingCard from './components/rating-card/rating-card';
import PriceCard from './components/price-card/price-card';
import ButtonFavorite from './components/button-favorite/button-favorite';

type CardInfoProps = Pick<TypePlace, 'price' | 'isFavorite' | 'rating' | 'title' | 'type' | 'id'>;

const PlacesCardInfo = (place: CardInfoProps) => (
  <>
    <div className="place-card__price-wrapper">
      <PriceCard price={place.price} />
      <ButtonFavorite isFavorite={place.isFavorite} id={place.id}/>
    </div>
    <RatingCard placeRating={place.rating} />
    <h2 className="place-card__name">
      { place.title }
    </h2>
    <p className="place-card__type">{ place.type }</p>
  </>
);

export default PlacesCardInfo;

