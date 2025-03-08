
type NameProps = {
  title: string;
  isFavorite: boolean;
}
const Name = ({title, isFavorite} :NameProps) => {
  const active = isFavorite ? 'offer__bookmark-button--active' : '';
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {title}
      </h1>
      <button className={`offer__bookmark-button button ${active}`} type="button">
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
};

export default Name;

