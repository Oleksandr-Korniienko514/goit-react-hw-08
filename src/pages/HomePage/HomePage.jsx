import { useState, useEffect } from 'react';
import { fetchTrending } from '../../service/fetchAPI';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrending().then(({ results }) => setMovies(results));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Trending today</h1>
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;
