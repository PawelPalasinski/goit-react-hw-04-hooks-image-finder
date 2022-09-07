import React, { useState } from 'react';
import Notiflix from 'notiflix';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [name, setValue] = useState('');



  const handleSubmit = e => {
    e.preventDefault();
    console.log('searchbar test');
    if (name.trim() === '') {
      Notiflix.Notify.failure(
        'You have to enter something first to search for images!'
      );
      return;
    }
    onSubmit(name);
    reset();
  };


  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 20 20"
            >
              <title>search</title>
              <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
            </svg>
          </span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          onChange={handleChange}
          value={name}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
