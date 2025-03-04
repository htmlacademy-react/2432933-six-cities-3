import SectionFavorites from './components/section-favorites';
import SectionFavoritesEmpty from './components/section-favorites-empty';
import { MockOffers } from '../../mocks/offers/mockOffers';
import { groupOffers } from '../../utils/getGroupedOffers';

const Favorites = () => {
  const favoritePlaces = MockOffers.filter((offer) => offer.isFavorite);
  const groupedOffers = Object.entries(groupOffers(favoritePlaces));

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        { favoritePlaces.length === 0 ? <SectionFavoritesEmpty /> : <SectionFavorites groupedOffers={groupedOffers} />}
      </div>
    </main>
  );
};

export default Favorites;
