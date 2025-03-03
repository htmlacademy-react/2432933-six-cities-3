import SectionFavorites from './components/section-favorites';
import SectionFavoritesEmpty from './components/section-favorites-empty';
import { TypePlace } from '../../types/place-type/place-type';
import { getGroupedOffers } from '../../utils/getGroupedOffers';

type FavoritesProps = {
  offers: TypePlace[];
};

const Favorites = ({offers} :FavoritesProps) => {
  const favoritePlaces = offers.filter((offer) => offer.isFavorite); //что бы не создавать моковые данные просто фильтрую.Потом удалю
  const groupedOffers = Object.entries(getGroupedOffers(favoritePlaces));

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        { offers.length === 0 ? <SectionFavoritesEmpty /> : <SectionFavorites groupedOffers={groupedOffers} />}
      </div>
    </main>
  );
};


export default Favorites;
