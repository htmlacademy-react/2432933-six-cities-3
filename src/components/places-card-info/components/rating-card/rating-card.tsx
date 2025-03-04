const MAX_RATING = 5;
const getRatingWidth = (rating: number) => `${(Math.round(rating) / MAX_RATING) * 100}%`;

type RatingCardProps = {
  placeRating : number;
}

const RatingCard = ({placeRating}: RatingCardProps) => (
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{ width: getRatingWidth(placeRating)}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);
export default RatingCard;
