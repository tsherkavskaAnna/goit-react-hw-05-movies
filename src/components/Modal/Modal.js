import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ onCloseModal, largeImage }) => {
  useEffect(() => {
    window.addEventListener(`keydown`, handleKeyDown);
    return () => {
      window.removeEventListener(`keydown`, handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === `Escape`) {
      onCloseModal();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};

export default Modal;
