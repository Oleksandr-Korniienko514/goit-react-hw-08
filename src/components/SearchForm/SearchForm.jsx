import { useState } from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
        setQuery('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.input}
                placeholder="Search movies"
            />
            <button type="submit" className={styles.button}>Search</button>
        </form>
    );
};

export default SearchForm;
