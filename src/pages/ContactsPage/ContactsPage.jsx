import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts, selectLoading, selectError } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';

const ContactsPage = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <h1>Contacts</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ContactForm />
            <ContactList contacts={contacts} />
        </div>
    );
};

export default ContactsPage;
