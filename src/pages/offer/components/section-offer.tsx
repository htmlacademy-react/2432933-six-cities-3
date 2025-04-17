import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';
import GalleryContainer from './gallery-container';
import Premium from './premium';
import FavoriteTitle from './favorite-title';
import Rating from './rating';
import Features from './features';
import Inside from './inside';
import PropertyHost from './property-host';
import Reviews from './reviews/reviews';
import CitiesMap from '../../../components/cities-map/cities-map';
import { selectFirstFewOffers } from '../../../store/offer/offer.selector';

const SectionOffer = () => {
  const isPremium = useAppSelector((state) => state.offer.offer?.isPremium);
  const price = useAppSelector((state) => state.offer.offer?.price);
  const location = useAppSelector((state) => state.offer.offer?.location);
  const firstFewOffers = useAppSelector(selectFirstFewOffers);

  return (
    <section className="offer">
      <GalleryContainer />
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium && <Premium />}
          <FavoriteTitle />
          <Rating />
          <Features />
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <Inside />
          <PropertyHost />
          <Reviews />
        </div>
      </div>
      <CitiesMap offers={firstFewOffers} className={'offer__map map'} currentMarker={location}/>
    </section>
  );
};

export default SectionOffer;
