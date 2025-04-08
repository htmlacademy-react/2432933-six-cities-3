import { TypePlace } from '../../types/place-type/place-type';
import RatingCard from './components/rating-card/rating-card';
import PriceCard from './components/price-card/price-card';
import ButtonFavorite from './components/button-favorite/button-favorite';
import { Link, } from 'react-router-dom';
import PremiumMark from '../premium-mark/premium-mark';
import { useAppDispatch } from '../../hooks/use-app-redux/use-app-redux';
import { setActiveCard } from '../../store/active-card/card-reducer';


const PlacesCardInfo = (place: TypePlace) => {
  const dispatch = useAppDispatch();
  const handleActiveCardChange = (id: string | null) => dispatch(setActiveCard(id));
  return (
    <Link
      to={`/offer/${place.id}`}
      onMouseEnter = {() => handleActiveCardChange?.(place.id)}
      onMouseLeave = {() => handleActiveCardChange?.(null)}
    >
      { place.isPremium && <PremiumMark /> }

      <div className= 'cities__image-wrapper place-card__image-wrapper'>
        <img className="place-card__image" src={ place.previewImage } width='260' height='200' alt="Place image" />
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <PriceCard price={place.price} />
            <ButtonFavorite isFavorite={place.isFavorite} id={place.id}/>
          </div>

          <RatingCard placeRating={place.rating} />
          <h2 className="place-card__name">
            { place.title }
          </h2>
          <p className="place-card__type">{ place.type }</p>
        </div>
      </div>
    </Link>
  );
};

export default PlacesCardInfo;

