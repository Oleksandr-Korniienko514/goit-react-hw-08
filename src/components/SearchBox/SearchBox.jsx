import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={s.wrapper}>
            <label className={s.box}>
                <span>Find contacts by name</span>
                <input
                    name="username"
                    type="text"
                    onChange={onChange}
                    value={filter}
                    placeholder="Enter name"
                />
            </label>
        </div>
    );
};

export default SearchBox;
