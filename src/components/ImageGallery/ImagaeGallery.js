import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImagesGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webImage={webformatURL}
          discription={tags}
          onOpenModal={() => onOpenModal(largeImageURL)}
        />
      ))}
    </ul>
  );
};

ImagesGallery.protoType = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onOpenModal: PropTypes.func.isRequired,
};

export default ImagesGallery;
