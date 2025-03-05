import { Link } from 'react-router-dom';

type PlacesCardImageProps = {
  image : string;
}
const PlacesCardImage = ({image} :PlacesCardImageProps) => (
  <Link to="/">
    <img className="place-card__image" src={ image } width="260" height="200" alt="Place image" />
  </Link>
);


export default PlacesCardImage;

