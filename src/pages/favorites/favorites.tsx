import SectionFavorites from './components/section-favorites';
import SectionFavoritesEmpty from './components/section-favorites-empty';
import { useAppSelector } from '../../hooks/use-app-redux/use-app-redux';

const Favorites = () => {
  const favoritePlaces = useAppSelector((state) => state.favorites.favorites);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        { favoritePlaces.length === 0 ? <SectionFavoritesEmpty /> : <SectionFavorites favoritePlaces={favoritePlaces} />}
      </div>
    </main>
  );
};

export default Favorites;
