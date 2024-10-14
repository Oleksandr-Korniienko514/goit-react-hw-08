import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilterChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <input
            type="text"
            value={filter}
            placeholder="Find contacts"
            onChange={handleFilterChange}
            className={styles.input}
        />
    );
};

export default SearchBox;
