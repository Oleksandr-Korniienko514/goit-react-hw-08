import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/operations';
import styles from './RegisterPage.module.css';
const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input className={styles.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterPage;
