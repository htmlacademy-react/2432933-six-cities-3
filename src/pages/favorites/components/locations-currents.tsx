import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/use-app-redux/use-app-redux';
import { setCity } from '../../../store/offers/offers-reducer';

type LocationsCurrentProps = {
  cityName : string;
}

const LocationsCurrent = ({cityName} : LocationsCurrentProps) => {
  const dispatch = useAppDispatch();

  return(
    <div className="favorites__locations locations locations--current" >
      <div className="locations__item">
        <Link
          className="locations__item-link"
          to={'/'}
          onClick={() => dispatch(setCity(cityName))}
        >
          <span>{cityName}</span>
        </Link>
      </div>
    </div>
  );
};
export default LocationsCurrent;
