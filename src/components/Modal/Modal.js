import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener(`keydown`, this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener(`keydown`, this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === `Escape`) {
      this.props.onModalClick();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClick();
    }
  };

  render() {
    const { largeImage, alt, onModalClick } = this.props;
    return (
      <div className={s.overlay} onClick={() => onModalClick()}>
        <div className={s.modal}>
          <img src={largeImage} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};

export default Modal;
