import ReviewsList from './components/reviews-list';
import FormReviews from './components/form-reviews';
import { comments } from '../../comments';

const Reviews = () => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
    <ReviewsList comments={comments} />
    <FormReviews />
  </section>
);

export default Reviews;

