import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { IoMdHome } from "react-icons/io";
import { HiPhone } from "react-icons/hi";

const Navigation = () => {
    return (
        <nav className={s.wrapper}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? `${s.link} ${s['link-active']}` : s.link
                }
            >
                <IoMdHome />
                Home
            </NavLink>
            <NavLink
                to="/contacts"
                className={({ isActive }) =>
                    isActive ? `${s.link} ${s['link-active']}` : s.link
                }
            >
                <HiPhone />
                Contacts
            </NavLink>
        </nav>
    );
};

export default Navigation;
