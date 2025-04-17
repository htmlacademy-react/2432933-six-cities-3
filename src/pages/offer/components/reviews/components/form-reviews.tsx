import { useParams } from 'react-router-dom';
import { useForm, Controller, } from 'react-hook-form';
import IconStar from './icon-star';
import { useAppDispatch, } from '../../../../../hooks/use-app-redux/use-app-redux';
import { addOfferComments } from '../../../../../services/api-action/offer.action';
import FormError from '../../../../../components/error-message/form-error';

type FormValid = {
  comment: string;
  rating: number;
}

const errorMessage = {
  MIN_LENGTH: 'Длина комментария должна быть не меньше 50',
  MAX_LENGTH: 'Длина комментария должна быть не больше 300'
};


const FormReviews = () => {
  const form = useForm<FormValid>({mode: 'onBlur'});
  const { errors, isValid, } = form.formState;
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const onSubmit = (data: FormValid) => {
    if(!id){
      return;
    }

    dispatch(addOfferComments({
      offerId: id,
      commentData:{
        comment: data.comment,
        rating: +data.rating
      }
    })) ;
    form.reset();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={ (event) => void form.handleSubmit(onSubmit)(event)}
    >
      <Controller
        name="rating"
        control={form.control}
        rules={{ required: 'Rating is required' }}
        render={({ field, fieldState: { error }}) => (
          <IconStar onChange={field.onChange} value={field.value} error={error?.message}/>
        )}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        {...form.register('comment', {
          required: true,
          minLength:{
            value: 50,
            message:errorMessage.MIN_LENGTH
          },
          maxLength:{
            value: 300,
            message:errorMessage.MAX_LENGTH
          },
          onChange: () => {
            if (errors.comment) {
              form.clearErrors('comment');
            }
          },
        })}

      >
      </textarea>
      < FormError message={errors.comment?.message} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
       To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormReviews;
