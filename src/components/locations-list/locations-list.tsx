type LocationsProps = { cities: string[] };

const LocationsList = ({ cities } :LocationsProps) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <a className="locations__item-link">
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default LocationsList;
