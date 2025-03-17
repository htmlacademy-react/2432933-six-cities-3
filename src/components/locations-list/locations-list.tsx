import clsx from 'clsx';
import { cities } from '../const';

type LocationsProps = {
  cityName : string;
  handleFilter: (city: string) => void;
 };

const LocationsList = ({cityName, handleFilter} :LocationsProps) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <a
              className={`locations__item-link tabs__item ${ clsx({'tabs__item--active': cityName === city})}`}
              onClick={() => handleFilter(city)}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default LocationsList;
