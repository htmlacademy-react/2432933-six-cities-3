import clsx from 'clsx';
import { useFavorite } from '../../../../hooks/use-favorite';

type ButtonFavoriteProps = {
  isFavorite :boolean;
  id: string;
}

const ButtonFavorite = ({id, isFavorite} :ButtonFavoriteProps) => {
  const handleFavoriteClick = useFavorite(id, isFavorite);

  return (
    <button
      className={clsx('place-card__bookmark-button button', { ['place-card__bookmark-button--active'] : isFavorite})}
      type="button"
      onClick={(evt) => {
        evt.preventDefault();
        handleFavoriteClick();
      }}
    >
      <svg className='place-card__bookmark-icon' width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default ButtonFavorite;
