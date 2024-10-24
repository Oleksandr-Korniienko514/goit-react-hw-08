import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={s.header}>
            <div className={s.container}>
                <h1 className={s.logo}>My App</h1>
                <Navigation />
                <div className={s.authContainer}>
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </div>
            </div>
        </header>
    );
};

export default AppBar;
