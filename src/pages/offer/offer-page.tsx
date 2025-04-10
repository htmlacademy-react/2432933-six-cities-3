import { useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import SectionOffer from './components/section-offer';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-redux/use-app-redux';
import { getOffer, getOffersNearby } from '../../services/api-action/offer-action';
import { selectFirstFewOffers } from '../../store/offer/offer-selector';
import PreLoading from '../pre-loading/pre-loading';
import PlacesList from '../../components/places-list/places-list';

const Offer = () => {
  const dispatch = useAppDispatch();
  const firstFewOffers = useAppSelector(selectFirstFewOffers);
  const isLoading = useAppSelector((state) => state.offer.isLoading);
  const { id } = useParams();

  useEffect(() => {
    if(!id){
      return;
    }

    dispatch(getOffer(id));
    dispatch(getOffersNearby(id));

  }, [dispatch, id]);

  if(isLoading){
    return <PreLoading />;
  }


  return(
    <main className="page__main page__main--offer">
      <SectionOffer />
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighborhood</h2>

          <PlacesList
            places={firstFewOffers}
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

