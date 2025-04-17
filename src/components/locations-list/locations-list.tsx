import clsx from 'clsx';
import { cities } from '../const';
import { useAppSelector, useAppDispatch } from '../../hooks/use-app-redux/use-app-redux';
import { setCity } from '../../store/offers/offers-reducer';
import { Link } from 'react-router-dom';

const LocationsList = () => {
  const dispatch = useAppDispatch();
  const cityName = useAppSelector((state) => state.offers.city);

  const handleFilter = (city: string) => {
    dispatch(setCity(city));
  };

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <Link
                className={clsx('locations__item-link tabs__item', {'tabs__item--active': cityName === city})}
                onClick={() => handleFilter(city)}
                to={'/'}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LocationsList;
