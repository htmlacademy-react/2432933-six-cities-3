
type LocationsCurrentProps = {
  cityName : string;
}

const LocationsCurrent = ({cityName} : LocationsCurrentProps) => (
  <div className="favorites__locations locations locations--current" >
    <div className="locations__item">
      <a className="locations__item-link" href="#">
        <span>{cityName}</span>
      </a>
    </div>
  </div>
);

export default LocationsCurrent;
