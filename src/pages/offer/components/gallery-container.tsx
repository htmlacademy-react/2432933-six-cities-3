
const MAX_IMAGE = 6;

type GalleryContainerProps = {
  images: string[];
}

const GalleryContainer = ({images} :GalleryContainerProps) => (
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

export default GalleryContainer;

