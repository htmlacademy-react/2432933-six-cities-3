import { useState } from 'react';
import { MockOffer } from './mock-offer';
import GalleryContainer from './components/gallery-container';
import Premium from './components/premium';
import Name from './components/name';
import Rating from './components/rating';
import Features from './components/features';
import Inside from './components/inside';
import PropertyHost from './components/property-host';
import Reviews from './components/reviews/reviews';
//import PlacesList from './components/places-list';
import { MockOffers } from '../../mocks/offers/mockOffers';
import CitiesMap from '../../components/cities-map/cities-map';
import PlacesListTest from '../main-page/places-list/test';

const MAX_PLACES = 3;

const Offer = () => {
  const firstFewOffers = MockOffers.slice(0, MAX_PLACES);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleActiveCardChange = (id: string | null) => {
    setActiveCard(id);
  };

  return(
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
            <Inside benefits={MockOffer.goods} />

            <PropertyHost host={MockOffer.host} description={MockOffer.description} />
            <Reviews />
          </div>
        </div>
        <CitiesMap offers={firstFewOffers} currentId={activeCard} className={'offer__map map'}/>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighborhood</h2>

          <PlacesListTest
            places={firstFewOffers}
            onActiveCardChange={handleActiveCardChange}
            classes={{
              container: 'cities__places-list places__list tabs__content',
              imageWrapper: 'cities__image-wrapper place-card__image-wrapper'
            }}
          />
        </section>
      </div>
    </main>
  );
};

export default Offer;

