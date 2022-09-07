import React from 'react';
import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchHits from './services/api';

const App = () => {
  const [hits, setHits] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (name) {
      console.log('effect');
      fetchData();
    }
  }, [name]);

  const handleSubmit = name => {
    setName(name);
    setHits([]);
    setPage(1);
  };

  const fetchData = () => {
    const options = {
      name,
      page,
    };

    console.log('fetchData z App');

    setLoading(true);

    fetchHits(options)
      .then(
        hits => setHits(prevState => [...prevState, ...hits]),
        setPage(prevState => prevState + 1)
      )
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery
        name={name}
        hits={hits}
        page={page}
        loading={loading}
        fetchData={fetchData}
      />
    </div>
  );
};

export default App;
