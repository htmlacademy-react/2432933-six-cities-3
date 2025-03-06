import { MockOffer } from './mock-offer';
import GalleryContainer from './components/gallery-container';
import Premium from './components/premium';
import Name from './components/name';
import Rating from './components/rating';
import Features from './components/features';
import Inside from './components/inside';
import Host from './components/host';
import Reviews from './components/reviews/reviews';
import PlacesList from './components/places-list';
import { MockOffers } from '../../mocks/offers/mockOffers';

const Offer = () => (
  <main className="page__main page__main--offer">
    <section className="offer">
      <GalleryContainer images={MockOffer.images} />
      <div className="offer__container container">
        <div className="offer__wrapper">
          {MockOffer.isPremium && <Premium />}
          <Name title={MockOffer.title} isFavorite={MockOffer.isFavorite} />
          <Rating rating={MockOffer.rating} />
          <Features
            bedrooms={MockOffer.bedrooms}
            type={MockOffer.type}
            maxAdults={MockOffer.maxAdults}
          />
          <div className="offer__price">
            <b className="offer__price-value">&euro;{MockOffer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <Inside insides={MockOffer.goods} />

          <Host host={MockOffer.host} description={MockOffer.description} />
          <Reviews />
        </div>
      </div>
      <section className="offer__map map"></section>
    </section>

    <PlacesList places={MockOffers}/>
  </main>
);

export default Offer;

