import { useState } from 'react';
import PlacesSortingItem from './components/places-sorting-item';

const options : string [] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const PlacesSorting = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>(options[0]);

  const handleOptionClick = (option : string) => {
    setActiveOption(option);
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : '' }`}>
        {options.map((option) => (
          <PlacesSortingItem
            key={option}
            option={option}
            activeOption={activeOption}
            onClick={handleOptionClick}
          />
        )
        )}
      </ul>
    </form>
  );
};

export default PlacesSorting;
