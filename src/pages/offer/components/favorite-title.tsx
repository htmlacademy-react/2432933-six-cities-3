import clsx from 'clsx';
import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';
import { useFavorite } from '../../../hooks/use-favorite';


const FavoriteTitle = () => {
  const title = useAppSelector((state) => state.offer.offer?.title);
  const id = useAppSelector((state) => state.offer.offer?.id) ?? '';
  const isFavorite = useAppSelector((state) => state.offer.offer?.isFavorite) ?? false;
  const handleFavoriteClick = useFavorite(id , isFavorite);

  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {title}
      </h1>
      <button
        className={clsx('offer__bookmark-button button', {'offer__bookmark-button--active' : isFavorite})}
        type="button"
        onClick={ handleFavoriteClick }
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

