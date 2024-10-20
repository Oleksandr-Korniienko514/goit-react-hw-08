import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import styles from './AppBar.module.css';

const AppBar = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    return (
        <header className={styles.appBar}>
            <nav>
                <Link to="/">Home</Link>
                {isLoggedIn ? (
                    <>
                        <Link to="/contacts">Contacts</Link>
                        <span>Welcome, {user.name}</span>
                        <button onClick={() => dispatch(logout())}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default AppBar;
