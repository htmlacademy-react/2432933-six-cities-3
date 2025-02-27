import { TypePlace } from '../../types/mock-data-type/mock-data-type';

const createRatingCard = (PlaceRating :number) => (
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{ width: `${(PlaceRating / 5) * 100}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);

const createCardPrice = (price :number) => (
  <div className="place-card__price">
    <b className="place-card__price-value">&euro;{ price }</b>
    <span className="place-card__price-text">&#47;&nbsp;night</span> {/* night ? откуда берется */}
  </div>
);

const createButtonFavorite = (isFavorite :boolean) => (
  <button
    className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
    type="button"
  >
    <svg className="place-card__bookmark-icon" width="18" height="19">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">To bookmarks</span>
  </button>
);

type CardInfoProps = Pick<TypePlace, 'price' | 'isFavorite' | 'rating' | 'title' | 'type'>;

const PlacesCardInfo = (place :CardInfoProps) :JSX.Element => (
  <div className="place-card__info">
    <div className="place-card__price-wrapper">
      { createCardPrice(place.price) }
      { createButtonFavorite(place.isFavorite) }
    </div>
    {createRatingCard(place.rating)}
    <h2 className="place-card__name">
      <a href="#">{ place.title }</a>
    </h2>
    <p className="place-card__type">{ place.type }</p>
  </div>

);

export default PlacesCardInfo;

