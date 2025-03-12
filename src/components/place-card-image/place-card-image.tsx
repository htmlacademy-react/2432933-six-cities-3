import LinkWrapper from '../link-wrapper/link-wrapper';

type PlacesCardImageProps = {
  image : string;
  width?: number;
  height?: number;
  //link: string;
}
const PlacesCardImage = ({image, width = 260, height = 200,} :PlacesCardImageProps) => (

  <img className="place-card__image" src={ image } width={width} height={height} alt="Place image" />

);


export default PlacesCardImage;

