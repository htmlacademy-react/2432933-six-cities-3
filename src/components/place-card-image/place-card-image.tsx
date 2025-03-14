
type PlacesCardImageProps = {
  image : string;
  width?: number;
  height?: number;
}

const PlacesCardImage = ({image, width = 260, height = 200,} :PlacesCardImageProps) => (
  <img className="place-card__image" src={ image } width={width} height={height} alt="Place image" />
); // имеет ли смысл оставлять один компонент с img в компоненте ?


export default PlacesCardImage;

