

type ButtonFavoriteProps = {
  isFavorite :boolean;
}

const ButtonFavorite = ({isFavorite}:ButtonFavoriteProps) => (
  <button
    className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
    type="button"
    onClick={(e) => {
      e.preventDefault();
    }}
  >
    <svg className="place-card__bookmark-icon" width="18" height="19">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">To bookmarks</span>
  </button>
);

export default ButtonFavorite;
