import ReviewsList from './components/reviews-list';
import FormReviews from './components/form-reviews';
import { AuthorizationStatus } from '../../../../components/const';
import { useAppSelector } from '../../../../hooks/use-app-redux/use-app-redux';

const Reviews = () => {
  const comments = useAppSelector((state) => state.offer.comments);
  const authStatus = useAppSelector((state) => state.authStatus.authStatus);


  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title" >Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList comments={comments} />
      { authStatus === AuthorizationStatus.Auth && <FormReviews />}
    </section>
  );
};
export default Reviews;

