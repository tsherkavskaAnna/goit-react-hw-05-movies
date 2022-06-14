import PropTypes from 'prop-types';
import s from '../ImageGallery/ImageGallery.module.css';

const ImageGalleryItem = ({ webImage, onOpenModal, alt }) => {
  return (
    <li className={s.imageItem}>
      <img
        className={s.imageItemImage}
        src={webImage}
        alt=""
        onClick={onOpenModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webImage: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
