import { useState, useEffect } from 'react';

import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem'
import LoadMoreBtn from './../LoadMoreBtn/LoadMoreBtn';
import Modal from './../Modal/Modal';

import styles from './ImageGallery.module.css';

const ImageGallery = ({
  hits,
  fetchHits,
  loading, }) => {
  
  const [modal, setModal] = useState(false);
  const [largeImgURL, setLargeImgURL] = useState(null);

  const toggleModal = () => {
    setModal(prevState => !prevState);
    setLargeImgURL(null);
  };

  const handleModalImg = (url) => {
    toggleModal();
    setLargeImgURL(url);
  };

  const showButton = hits.length > 0;

  return (
    <>

      <ul className={styles.ImageGallery}>
        {hits.map(({ id, webformatURL, largeImgURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onToggleModal={handleModalImg}
            largeImageURL={largeImgURL}
          />
        ))}
      </ul>

      {showButton && <LoadMoreBtn onClick={fetchHits} isLoading={loading} />}

      {modal && (
        <Modal onCloseModal={toggleModal}>
          <img src={largeImgURL} alt="" />
        </Modal>
      )}
    </>
  )
}

export default ImageGallery;
