import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, onToggleModal, largeImgURL }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onToggleModal(largeImgURL)}
    >
      <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;