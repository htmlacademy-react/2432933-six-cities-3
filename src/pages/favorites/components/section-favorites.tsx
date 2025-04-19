import LocationsCurrent from './locations-currents';
import LocationsItems from './locations-items';
import { groupOffers } from '../../../utils/getGroupedOffers';
import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';
import SectionFavoritesEmpty from './section-favorites-empty';
import PreLoading from '../../pre-loading/pre-loading';

const SectionFavorites = () => {
  const favoriteOffers = useAppSelector((state) => state.favorites.favorites);
  const groupedOffers = Object.entries(groupOffers(favoriteOffers));
  const {isLoading } = useAppSelector((state) => state.favorites);

  if(isLoading){
    return <PreLoading />;
  }

  if(!favoriteOffers.length){
    return <SectionFavoritesEmpty />;
  }

  return(
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {(groupedOffers).map(([city, values]) => (
          <li className="favorites__locations-items" key={ city }>
            <LocationsCurrent cityName={city} />
            <ul className="favorites__places">
              {values.map((value) => (
                <LocationsItems {...value} key={ value.id } />
              ))}
            </ul>
          </li>
        )
        )}
      </ul>
    </section>
  );
};

export default SectionFavorites;
