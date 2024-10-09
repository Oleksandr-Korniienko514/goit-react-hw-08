import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../service/fetchAPI';
import styles from './MovieCast.module.css';

const MovieCast = ({ movieId }) => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId).then(data => setCast(data.cast));
    }, [movieId]);

    return (
        <div>
            <h3>Cast</h3>
            <ul className={styles.list}>
                {cast.map(actor => (
                    <li key={actor.cast_id} className={styles.item}>
                        <img
                            src={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                    : 'https://via.placeholder.com/200x300'
                            }
                            alt={actor.name}
                            className={styles.image}
                        />
                        <p className={styles.name}>{actor.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;
