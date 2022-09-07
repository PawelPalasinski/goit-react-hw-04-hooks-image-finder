// import PropTypes from 'prop-types';

import { InfinitySpin } from 'react-loader-spinner';

import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, loading }) => {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      <InfinitySpin
        color="#4fa94d"
        className={styles.loader}
        height={20}
        width={20}
        visible={loading}
      />
      {loading ? '' : 'Load more'}
    </button>
  );
};

export default LoadMoreBtn;
