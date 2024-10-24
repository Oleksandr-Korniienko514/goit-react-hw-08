import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <div className={s.pageWrapper}>
            <img
                src="https://i.imgur.com/qIufhof.png"
                className={s.errorImage}
                alt="404 Not Found"
            />
        </div>
    );
};

export default NotFoundPage;
