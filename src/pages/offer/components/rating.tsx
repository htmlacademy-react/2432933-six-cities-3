import { calculateRatingWidth } from '../../../utils/calculate-rating-width';
import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';


const Rating = () => {
  const rating = useAppSelector((state) => state.offer.offer?.rating ?? 0);

  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{ width: calculateRatingWidth(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
};

export default Rating;
