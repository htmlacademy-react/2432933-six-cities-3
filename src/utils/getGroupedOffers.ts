import { TypePlace } from '../types/place-type/place-type';

type GroupedOffersProps = Record<string, TypePlace[]>

const getGroupedOffers = (offers: TypePlace[]) :GroupedOffersProps => (
  offers.reduce<GroupedOffersProps>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {})
);
export { getGroupedOffers };

