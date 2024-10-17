import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [errors, setErrors] = useState({ name: '', number: '' });

    const validateName = (name) => {
        const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄє ]+$/;
        if (name.length < 2) {
            return 'Name must be at least 2 letters';
        }
        if (!nameRegex.test(name)) {
            return 'Name can only contain letters';
        }
        return '';
    };

    const validateNumber = (number) => {
        const numberRegex = /^[0-9+\-()]+$/;
        if (number.length < 2) {
            return 'Number must be at least 2 letters';
        }
        if (!numberRegex.test(number)) {
            return 'Phone number can only contain numbers and +, -, (), spaces';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameError = validateName(name);
        const numberError = validateNumber(number);

        if (nameError || numberError) {
            setErrors({ name: nameError, number: numberError });
            return;
        }

        dispatch(addContact({ name, number }));
        setName('');
        setNumber('');
        setErrors({ name: '', number: '' });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className={styles.input}
                    required
                />
                {errors.name && <p>{errors.name}</p>}
            </label>
            <label>
                Number:
                <input
                    type="tel"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Number"
                    className={styles.input}
                    required
                />
                {errors.number && <p className={styles.error}>{errors.number}</p>}
            </label>
            <button className={styles.button} type="submit">Add contact</button>
        </form>
    );
};

export default ContactForm;
