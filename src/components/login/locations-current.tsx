import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-redux/use-app-redux';
import { setCity } from '../../store/offers/offers-reducer';
import { cities } from '../const';


const LocationsCurrent = () => {
  const cityName = cities[Math.floor(Math.random() * cities.length)];
  const dispatch = useAppDispatch();

  return(
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={'/'}
          onClick={() => dispatch(setCity(cityName))}
        >
          <span>{cityName}</span>
        </Link>
      </div>
    </section>
  );
};

export default LocationsCurrent;
