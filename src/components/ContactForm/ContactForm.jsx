import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingContact = contacts.find((contact) => contact.name === name);
        if (existingContact) {
            alert(`${name} is already in contacts.`);
        } else {
            dispatch(addContact({ name, number }));
            reset();
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <label className={styles.label}>
                Name
                <input
                    className={styles.input}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label className={styles.label}>
                Number
                <input
                    className={styles.input}
                    type="tel"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
            </label>
            <button className={styles.button} type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;
