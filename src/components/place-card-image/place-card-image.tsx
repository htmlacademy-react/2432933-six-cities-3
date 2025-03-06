import { Link } from 'react-router-dom';

type PlacesCardImageProps = {
  image : string;
  width?: number;
  height?: number;
  link: string;
}
const PlacesCardImage = ({image, width = 260, height = 200, link = '/'} :PlacesCardImageProps) => (
  <Link to={link}>
    <img className="place-card__image" src={ image } width={width} height={height} alt="Place image" />
  </Link>
);


export default PlacesCardImage;

