import SectionFavorites from './components/section-favorites';
import SectionFavoritesEmpty from './components/section-favorites-empty';
import { MockOffers } from '../../mocks/offers/mockOffers';

const Favorites = () => {
  const favoritePlaces = MockOffers.filter((offer) => offer.isFavorite);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        { favoritePlaces.length === 0 ? <SectionFavoritesEmpty /> : <SectionFavorites favoritePlaces={favoritePlaces} />}
      </div>
    </main>
  );
};

export default Favorites;
