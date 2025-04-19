import { useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsList from './components/reviews-list';
import FormReviews from './components/form-reviews';
import { useAppDispatch, useAppSelector } from '../../../../hooks/use-app-redux/use-app-redux';
import { getOfferComments } from '../../../../services/api-action/offer-action/offer.action';


const Reviews = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getOfferComments(id));
    }
  }, [id, dispatch]);

  const comments = useAppSelector((state) => state.offer.comments);
  const isAuth = useAppSelector((state) => state.authStatus.isAuth);

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title" >Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList />
      { isAuth && <FormReviews />}
    </section>
  );
};
export default Reviews;

