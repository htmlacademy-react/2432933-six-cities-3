import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
type Stars = {
  estimation: number;
  title: string;
}
const stars :Stars[] = [
  { estimation: 5, title: 'perfect' },
  { estimation: 4, title: 'good' },
  { estimation: 3, title: 'not bad' },
  { estimation: 2, title: 'badly' },
  { estimation: 1, title: 'terribly' },
];


const IconStar = () => {
  const { register } = useFormContext();

  return (
    <>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating ">
        {stars.map(({estimation = 0, title}) => (
          <Fragment key={estimation}>
            <input
              className="form__rating-input visually-hidden"
              value={estimation}
              id={`${estimation}-stars`}
              type="radio"
              aria-label={`${estimation} stars`}
              {...register('rating', {
                required: true,
              })}
            />
            <label
              htmlFor={`${estimation}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>

    </>
  );
};

export default IconStar;
