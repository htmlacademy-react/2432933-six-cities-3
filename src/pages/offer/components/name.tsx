import clsx from 'clsx';
import { useAppDispatch, } from '../../../hooks/use-app-redux/use-app-redux';
import { fetchFavoriteStatus, } from '../../../services/api-action/favorite-action';


type NameProps = {
  title: string;
  isFavorite: boolean;
  id: string;
}

const Name = ({ title, isFavorite, id}: NameProps) => {

  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    dispatch(fetchFavoriteStatus({offerId: id, isFavorite: !isFavorite}));
  };

  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {title}
      </h1>
      <button
        className={clsx('offer__bookmark-button button', {'offer__bookmark-button--active' : isFavorite})}

        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          handleFavoriteClick();
        }}
      >
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
};

export default Name;

