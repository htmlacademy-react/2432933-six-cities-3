import clsx from 'clsx';
import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';
import { useToggleFavorite } from '../../../hooks/use-toggle-favorite';
import { selectOffer } from '../../../store/offer/offer.selector';
import { RequestStatus } from '../../../store/const';


const FavoriteTitle = () => {
  const status = useAppSelector((state) => state.offer.status);
  const offer = useAppSelector(selectOffer);

  const { isFavorite = false, id = '', title} = offer || {};
  const handleFavoriteClick = useToggleFavorite(id , isFavorite);

  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {title}
      </h1>
      <button
        className={clsx('offer__bookmark-button button', {'offer__bookmark-button--active' : isFavorite})}
        type="button"
        onClick={ handleFavoriteClick }
        disabled = { status === RequestStatus.LOADING}
      >
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
};

export default FavoriteTitle ;

