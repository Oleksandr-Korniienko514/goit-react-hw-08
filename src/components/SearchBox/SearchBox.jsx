import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <label className={styles.label}>
            Find contacts by name
            <input className={styles.input} type="text" onChange={handleChange} />
        </label>
    );
};

export default SearchBox;
