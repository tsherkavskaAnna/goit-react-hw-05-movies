import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImagesGallery = ({ images, onLoadMore }) => (
  <ul className={s.imageGallery}>
    {images.map(({ id, webformatURL, tags }) => (
      <li className={s.imageItem} key={id}>
        <img
          className={s.gallery}
          src={webformatURL}
          alt={tags}
          onClick={onLoadMore}
        />
      </li>
    ))}
  </ul>
);

ImagesGallery.protoType = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImagesGallery;
