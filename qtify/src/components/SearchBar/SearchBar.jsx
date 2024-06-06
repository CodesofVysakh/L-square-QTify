import React from 'react';
import styles from './Search.module.css';
import SearchImage from '../assets/images/Search-icon.svg'

function SearchBar() {
  return (
    <div className={styles.searchbar}>
        <input 
            type="text" 
            placeholder='Search an album of your choice'
        />
        <img src={SearchImage} alt="Search Icon" />
    </div>
  )
}

export default SearchBar;