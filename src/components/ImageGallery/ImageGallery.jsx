import { useState } from 'react';

import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem'
import LoadMoreBtn from './../LoadMoreBtn/LoadMoreBtn';
import Modal from './../Modal/Modal';

import styles from './ImageGallery.module.css';

const ImageGallery = ({
  hits,
  fetchData,
  loading, }) => {
  
  const [modal, setModal] = useState(false);
  const [largeImgURL, setLargeImageURL] = useState(null);

  const toggleModal = () => {
    setModal(prevState => !prevState);
    setLargeImageURL(null);
  };

  const handleModalImg = url => {
    toggleModal();
    setLargeImageURL(url);
  };

  const showButton = hits.length > 0;

  console.log('ImgGalery: ' + hits.length);

  return (
    <>

      <ul className={styles.ImageGallery}>
        {hits.map(({ id, webformatURL, largeImgURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            toggleModal={handleModalImg}
            largeImgURL={largeImgURL}
            dataImg={hits}
          />
        ))}
      </ul>

      {showButton && <LoadMoreBtn onClick={fetchData} loading={loading} />}

      {modal && (
        <Modal onCloseModal={toggleModal}>
          <img src={largeImgURL} alt='' />
        </Modal>
      )}
    </>
  )
}

export default ImageGallery;
