import LocationsCurrent from './locations-currents';
import LocationsItems from './locations-items';
import { TypePlace } from '../../../types/place-type/place-type';

type GroupedOffers = [string, TypePlace[]][];

type SectionFavoritesProps = {
  groupedOffers: GroupedOffers;
};

const SectionFavorites = ({groupedOffers} :SectionFavoritesProps) => (
  <section className="favorites">
    <h1 className="favorites__title">Saved listing</h1>
    <ul className="favorites__list">
      {(groupedOffers).map(([city, values]) => (
        <li className="favorites__locations-items" key={ city }>
          <LocationsCurrent cityName={city} />
          <div className="favorites__places">
            {values.map((value) => (
              <LocationsItems {...value} key={ value.id } />
            ))}
          </div>
        </li>

      )
      )}
    </ul>
  </section>
);

export default SectionFavorites;
