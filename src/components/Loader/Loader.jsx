import styles from './Loader.modal.css';

const Loader = () => (
    <div className={styles.loader}>
        <div className={styles.spinner}></div>
    </div>
);

export default Loader;
