
type PlacesSortingItemProps = {
  activeOption : string;
  option : string;
  onClick : (option: string) => void;
}

const PlacesSortingItem = ({activeOption, option , onClick} :PlacesSortingItemProps) => (
  <li className={` places__option  ${activeOption === option ? 'places__option--active' : ''} `}
    key={option}
    tabIndex={0}
    onClick={() => onClick(option)}
  >
    {option}
  </li>
);

export default PlacesSortingItem;


