import { calculateRatingWidth } from '../../../../utils/calculate-rating-width';

type RatingCardProps = {
  placeRating : number;
}

const RatingCard = ({placeRating}: RatingCardProps) => (
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{ width: calculateRatingWidth(placeRating)}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);
export default RatingCard;
