import { FormEvent, } from 'react';
import IconStar from './icon-star';
import { useForm } from '../../../../../hooks/use-form/use-form';

const FormReviews = () => {
  const { values, setFieldValue } = useForm({review: '', rating: 0});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const handleRatingChange = (rating: number) => {
    setFieldValue('rating', rating);
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <IconStar onRatingChange={handleRatingChange}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(event) => setFieldValue('review', event.target.value)}
      >

      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
       To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormReviews;
