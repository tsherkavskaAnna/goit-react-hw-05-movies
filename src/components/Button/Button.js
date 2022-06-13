import s from './Button.module.css';

const Button = ({ onLoadMore }) => (
  <button onClick={onLoadMore} type="button" className={s.button}>
    Load more
  </button>
);
export default Button;
