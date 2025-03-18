import clsx from 'clsx';

type ButtonFavoriteProps = {
  isFavorite :boolean;
}

const ButtonFavorite = ({isFavorite}:ButtonFavoriteProps) => (
  <button
    className={clsx('place-card__bookmark-button button', {'place-card__bookmark-button--active' : isFavorite})}
    type="button"
    onClick={(evt) => {
      evt.preventDefault();
    }}
  >
    <svg className="place-card__bookmark-icon" width="18" height="19">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">To bookmarks</span>
  </button>
);

export default ButtonFavorite;
