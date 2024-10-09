import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../service/fetchAPI';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);

    const query = searchParams.get('query') || '';

    useEffect(() => {
        if (query) {
            fetchSearchMovies(query).then(({ results }) => setMovies(results));
        }
    }, [query]);

    const handleSearch = (newQuery) => {
        setSearchParams({ query: newQuery });
    };

    return (
        <div className={styles.container}>
            <SearchForm onSearch={handleSearch} />
            <MovieList movies={movies} />
        </div>
    );
};

export default MoviesPage;
