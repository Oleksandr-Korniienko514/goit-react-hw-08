import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
                Email
                <input className={styles.input}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label className={styles.label}>
                Password
                <input className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
