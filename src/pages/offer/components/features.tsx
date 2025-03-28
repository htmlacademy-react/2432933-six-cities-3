
type FeaturesProps = {
  bedrooms: number;
  maxAdults: number;
  type: string;
}

const Features = ({bedrooms, maxAdults, type} :FeaturesProps) => (
  <ul className="offer__features">
    <li className="offer__feature offer__feature--entire">
      {type}
    </li>
    <li className="offer__feature offer__feature--bedrooms">
      {bedrooms} Bedrooms
    </li>
    <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
    </li>
  </ul>
);

export default Features;
