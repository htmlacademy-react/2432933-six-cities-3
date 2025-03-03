import SectionFavorites from './components/section-favorites';
import SectionFavoritesEmpty from './components/section-favorites-empty';
import { getGroupedOffers } from '../../utils/getGroupedOffers';
import { MockOffers } from '../../mocks/offers/mockOffers';

const Favorites = () => {
  const favoritePlaces = MockOffers.filter((offer) => offer.isFavorite); //что бы не создавать моковые данные просто фильтрую.Потом удалю
  const groupedOffers = Object.entries(getGroupedOffers(favoritePlaces));

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        { favoritePlaces.length === 0 ? <SectionFavoritesEmpty /> : <SectionFavorites groupedOffers={groupedOffers} />}
      </div>
    </main>
  );
};


export default Favorites;
