import { Fragment } from 'react';
import FormError from '../../../../../components/error-message/form-error';

type Stars = {
  estimation: number;
  title: string;
}
const stars: Stars[] = [
  { estimation: 5, title: 'perfect' },
  { estimation: 4, title: 'good' },
  { estimation: 3, title: 'not bad' },
  { estimation: 2, title: 'badly' },
  { estimation: 1, title: 'terribly' },
];

 type IconStarProps = {
  onChange: (value: number) => void;
  value: number;
  error?: string; // Добавляем проп для ошибки
 }

const IconStar = ({onChange, value, error}: IconStarProps) => (
  <>
    <label className="reviews__label form__label" htmlFor="review"> Your review</label>
    {error && <FormError message={error} />}
    <div className="reviews__rating-form form__rating ">
      {stars.map(({estimation = 0, title}) => (
        <Fragment key={estimation}>
          <input
            className="form__rating-input visually-hidden"
            value={estimation}
            id={`${estimation}-stars`}
            type="radio"
            aria-label={`${estimation} stars`}
            checked={estimation === value}
            onChange={() => onChange(estimation)}
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

export default IconStar;
