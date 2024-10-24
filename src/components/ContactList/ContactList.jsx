import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useEffect } from "react";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={s.wrapper}>
            {filteredContacts.length > 0 ? (
                <ul className={s.contactList}>
                    {filteredContacts.map((item) => (
                        <Contact key={item.id} {...item} />
                    ))}
                </ul>
            ) : (
                <p className={s.noContacts}>No contacts found</p>
            )}
        </div>
    );
};

export default ContactList;
