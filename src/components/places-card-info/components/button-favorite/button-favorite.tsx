import clsx from 'clsx';
import { useAppDispatch, } from '../../../../hooks/use-app-redux/use-app-redux';
import { fetchFavoriteStatus, } from '../../../../services/api-actions';

type ButtonFavoriteProps = {
  isFavorite :boolean;
  id: string;
}

const ButtonFavorite = ({isFavorite, id}:ButtonFavoriteProps) => {
  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    dispatch(fetchFavoriteStatus({offerId: id, isFavorite: !isFavorite}));
  };

  return (
    <button
      className={clsx('place-card__bookmark-button button', {'place-card__bookmark-button--active' : isFavorite})}
      type="button"
      onClick={(evt) => {
        evt.preventDefault();
        handleFavoriteClick();
      }}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default ButtonFavorite;
