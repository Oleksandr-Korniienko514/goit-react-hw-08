import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul className={styles.list}>
            {movies.map(({ id, title, poster_path }) => (
                <li key={id} className={styles.listItem}>
                    <Link to={`/movies/${id}`} state={{ from: location }} className={styles.link}>
                        <img
                            src={poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : 'https://via.placeholder.com/200x300'}
                            alt={title}
                            className={styles.image}
                        />
                        <p className={styles.title}>{title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    })).isRequired,
};

export default MovieList;
