import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, toggleModal, largeImageURL, tags }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => toggleModal(largeImageURL, tags)}
    >
      <img src={webformatURL}  alt={tags} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;