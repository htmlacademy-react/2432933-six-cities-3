import { useState } from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector} from '../../../hooks/use-app-redux/use-app-redux';
import { setSorting } from '../../../store/offers/offers-reducer';

const options : string [] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const PlacesSorting = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const selectSort = useAppSelector((state) => state.offers.sorting);

  const handleOptionClick = (option : string) => {
    setIsOpen(!isOpen);
    dispatch(setSorting(option));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${clsx({'places__options--opened':  isOpen})}`}>
        {options.map((option) => (

          <li className={` places__option  ${ clsx({'places__option--active' : selectSort === option }) } `}
            key={option}
            tabIndex={0}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>

        )
        )}
      </ul>
    </form>
  );
};

export default PlacesSorting;
