import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            dispatch(deleteContact(id));
        }
    };

    return (
        <li className={s.list}>
            <div className={s.textContainer}>
                <span className={s.contactInfo}>
                    <FaUser className={s.icon} />
                    {name}
                </span>
                <span className={s.contactInfo}>
                    <FaPhoneAlt className={s.icon} />
                    {number}
                </span>
            </div>
            <button className={s.deleteButton} onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
};

export default Contact;
