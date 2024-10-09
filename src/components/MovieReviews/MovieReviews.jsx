import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../service/fetchAPI';
import styles from './MovieReviews.module.css';

const MovieReviews = ({ movieId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(data => setReviews(data.results));
    }, [movieId]);

    return (
        <div>
            <h3>Reviews</h3>
            {reviews.length ? (
                <ul className={styles.list}>
                    {reviews.map(review => (
                        <li key={review.id} className={styles.item}>
                            <p className={styles.author}>Author: {review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews available.</p>
            )}
        </div>
    );
};

export default MovieReviews;
