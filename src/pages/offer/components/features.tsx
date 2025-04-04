import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';
import { shallowEqual } from 'react-redux';

const Features = () => {
  const { type, bedrooms, maxAdults } = useAppSelector(
    (state) => ({
      type: state.offer.offer?.type,
      bedrooms: state.offer.offer?.bedrooms,
      maxAdults: state.offer.offer?.maxAdults,
    }),
    shallowEqual
  );

  return(
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
};
export default Features;
