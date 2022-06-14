import PropTypes from 'prop-types';
import s from '../ImageGallery/ImageGallery.module.css';

const ImageGalleryItem = ({ webImage, onOpenModal, description }) => {
  return (
    <li className={s.imageItem}>
      <img
        className={s.imageItemImage}
        src={webImage}
        alt={description}
        onClick={onOpenModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
