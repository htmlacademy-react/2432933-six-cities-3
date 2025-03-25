import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GalleryContainer from './components/gallery-container';
import Premium from './components/premium';
import Name from './components/name';
import Rating from './components/rating';
import Features from './components/features';
import Inside from './components/inside';
import PropertyHost from './components/property-host';
import Reviews from './components/reviews/reviews';
import PlacesList from '../../components/places-list/places-list';
import CitiesMap from '../../components/cities-map/cities-map';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-redux/use-app-redux';
import { getOffer, getOfferComments, getOffersNearby } from '../../services/api-actions';

const MAX_PLACES = 3;

const Offer = () => {
  const dispatch = useAppDispatch();

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleActiveCardChange = (id: string | null) => {
    setActiveCard(id);
  };

  const { id } = useParams();

  useEffect (() => {
    if(!id){
      return;
    }
    dispatch(getOffer(id));
    dispatch(getOffersNearby(id));
    dispatch(getOfferComments(id));
  }, [dispatch, id]);

  const { offer, offersNearby, } = useAppSelector((state) => state.offer);
  const firstFewOffers = offersNearby.slice(0, MAX_PLACES);

  if(!offer || firstFewOffers.length === 0){
    return;
  } //firstFewOffers.length === 0  лучше Loader?  добавить  сначала приходит [] из-за это ошибка в CitiesMap.

  return(
    <main className="page__main page__main--offer">
      <section className="offer">
        <GalleryContainer images={offer.images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer.isPremium && <Premium />}
            <Name title={offer.title} isFavorite={offer.isFavorite} />
            <Rating rating={offer.rating} />
            <Features
              bedrooms={offer.bedrooms}
              type={offer.type}
              maxAdults={offer.maxAdults}
            />
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <Inside benefits={offer.goods} />

            <PropertyHost host={offer.host} description={offer.description} />
            <Reviews />
          </div>
        </div>
        <CitiesMap offers={firstFewOffers} currentId={activeCard} className={'offer__map map'} currentMarker={offer.location}/>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighborhood</h2>

          <PlacesList
            places={firstFewOffers}
            onActiveCardChange={handleActiveCardChange}
            classNames={{
              container: 'near-places__list places__list',
              imageWrapper: 'near-places__image-wrapper place-card__image-wrapper'
            }}
          />
        </section>
      </div>
    </main>
  );
};

export default Offer;

