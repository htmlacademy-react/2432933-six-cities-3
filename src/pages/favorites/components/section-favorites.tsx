import LocationsCurrent from './locations-currents';
import LocationsItems from './locations-items';
import { TypePlace } from '../../../types/place-type/place-type';
import { groupOffers } from '../../../utils/getGroupedOffers';

type SectionFavoritesProps = {
  favoritePlaces : TypePlace[];
}

const SectionFavorites = ({favoritePlaces} :SectionFavoritesProps) => {
  const groupedOffers = Object.entries(groupOffers(favoritePlaces));

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
