import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={s.hero}>
            <div className={s.heroOverlay}></div>
            <div className={s.heroContent}>
                <h1 className={s.title}>Hello there</h1>
                <p className={s.description}>
                    Welcome to the site that will help you keep your contacts, start filling it out now
                </p>
                <NavLink to="/contacts">
                    <button className={s.getStartedButton}>Get Started</button>
                </NavLink>
            </div>
        </div>
    );
};

export default HomePage;
