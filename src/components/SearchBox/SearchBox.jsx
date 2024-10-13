import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <input
            type="text"
            placeholder="Find contacts"
            onChange={handleFilterChange}
            className={styles.input}
        />
    );
};

export default SearchBox;
