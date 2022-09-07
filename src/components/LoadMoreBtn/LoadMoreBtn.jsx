// import PropTypes from 'prop-types';

import { InfinitySpin } from 'react-loader-spinner';

import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, loading }) => {

  console.log('BTN: ' + onClick + loading);

  return (
    <div className={styles.BtnContainer}>
      <button className={styles.Button} type="button" onClick={onClick}>
      <InfinitySpin
        color="#000"
        className={styles.loader}
        height={20}
        width={20}
        visible={loading}
      />
      {loading ? '' : 'Load more'}
      </button>
      </div> 
  );
};

export default LoadMoreBtn;
