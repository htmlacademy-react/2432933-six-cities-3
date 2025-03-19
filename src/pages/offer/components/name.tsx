import clsx from 'clsx';

type NameProps = {
  title: string;
  isFavorite: boolean;
}

const Name = ({title, isFavorite} :NameProps) => (
  <div className="offer__name-wrapper">
    <h1 className="offer__name">
      {title}
    </h1>
    <button className={clsx('offer__bookmark-button button', {'offer__bookmark-button--active' : isFavorite})} type="button">
      <svg className="offer__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  </div>
);

export default Name;

