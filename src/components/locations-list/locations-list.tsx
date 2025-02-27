type LocationsProps = { cities: string[] };

const createLocationsItem = (city :string, index :number) => (
  <li className="locations__item" key={index}>
    <a className="locations__item-link"> {/* не избыточо ли тут использовать ссылки? Link нужен ли тут ? */}
      <span>{city}</span>
    </a>
  </li>
);

const createLocationsList = (cities :string[]) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => createLocationsItem(city, index))}
      </ul>
    </section>
  </div>
);

const LocationsList = ({ cities } :LocationsProps) :JSX.Element => createLocationsList(cities);

export default LocationsList;
