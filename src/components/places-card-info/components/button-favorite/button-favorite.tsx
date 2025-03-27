import clsx from 'clsx';
import { useAppDispatch, } from '../../../../hooks/use-app-redux/use-app-redux';
import { fetchFavoriteStatus} from '../../../../services/api-action/favorite-action';
import { useCallback } from 'react';

type ButtonFavoriteProps = {
  isFavorite :boolean;
  id: string;
  className: string;
}

const ButtonFavorite = ({isFavorite, id, className}:ButtonFavoriteProps) => {
  const dispatch = useAppDispatch();

  const buttonBaseClass = `${className}__bookmark-button button`;
  const buttonActiveClass = `${className}__bookmark-button--active`;

  const handleFavoriteClick = useCallback(() => {
    dispatch(fetchFavoriteStatus({offerId: id, isFavorite: !isFavorite}));
  }, [dispatch, id, isFavorite]);

  return (
    <button
      className={clsx(buttonBaseClass, { [buttonActiveClass] : isFavorite})}
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
