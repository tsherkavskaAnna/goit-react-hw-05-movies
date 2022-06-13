import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => (
  <button onClick={onLoadMore} type="button" className={s.button}>
    Load more
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;
