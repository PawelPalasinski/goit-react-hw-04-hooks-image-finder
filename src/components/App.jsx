import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import { BASE_URL, API_KEY, SEARCH_PARAMS } from './utils/utils';
import Searchbar from './Searchbar/Searchbar';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import SpinnerLoader from './Loader/Loader';

const App = () => {
  const [hits, setHits] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');

  const toggleModal = (imageURL, tag) => {
    setShowModal(!showModal);
    setLargeImageURL(imageURL);
    setTags(tag);
  };

  useEffect(() => {
    setTimeout(() => {
      axios(
        `${BASE_URL}?key=${API_KEY}&q=${name}&page=${page}&${SEARCH_PARAMS}`
      )
        .then(response => {
          if (!response.data.hits.length) {
            Notiflix.Notify.failure('No images found!');
          } else {
            console.log('useEffect');
            console.log('Name:' + name);
            setHits(response.data.hits);
          }
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, []);

  const loadMore = () => {
    console.log('loadMore');
    setPage(page + 1);
  };

  const getValue = () => {
    console.log('test');
  };

  // useEffect(() => {
  //   if (loading) {
  //     setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   }
  // }, [loading]);

  return (
    <div>
      <Searchbar onSubmitHandler={getValue} />

      {loading && <SpinnerLoader />}

      {hits && (
        <ImageGallery>
          <ImageGalleryItem articles={hits} onImage={() => toggleModal} />
        </ImageGallery>
      )}

      {showModal && (
        <Modal onClose={() => toggleModal} url={largeImageURL} alt={tags} />
      )}

      {hits.length > 0 && <LoadMoreBtn onButtonClick={() => loadMore} />}
    </div>
  );
};

export default App;
