import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';

const  LoadMoreBtn = ({ onButtonClick }) => {
  return (
    <div className={styles.BtnContainer}>
      <button className={styles.Button} type="button" onClick={onButtonClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onButtonClick: PropTypes.func,
};
