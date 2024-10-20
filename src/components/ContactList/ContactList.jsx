import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filters/selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={styles.contactList}>
            {filteredContacts.map(({ id, name, number }) => (
                <li key={id}>
                    <p>{name}: {number}</p>
                    <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
