import { useNavigate } from 'react-router-dom';
import styles from './ButtonBack.module.css';

const ButtonBack = () => {
    const navigate = useNavigate();

    return (
        <button className={styles.button} onClick={() => navigate(-1)}>
            Go back
        </button>
    );
};

export default ButtonBack;
