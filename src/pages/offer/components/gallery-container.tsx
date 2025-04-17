import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';
const MAX_IMAGE = 6;

const GalleryContainer = () => {
  const images: string[] = useAppSelector((state) => state.offer.offer?.images);

  if(!images?.length){
    return null;
  }

  return(
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.slice(0, MAX_IMAGE).map((image) => (
          <div className="offer__image-wrapper" key={image}>
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryContainer;

