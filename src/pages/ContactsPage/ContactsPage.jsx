import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectIsError);

    return (
        <div className={s.container}>
            <ContactForm />
            <SearchBox />
            {loading && (
                <h2 className={s.loadingMessage}>
                    <span className={s.spinner}></span>
                </h2>
            )}
            {error && <h2 className={s.errorMessage}>Error...</h2>}
            <ContactList />
        </div>
    );
};

export default ContactsPage;
