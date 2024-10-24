import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values, options) => {
        dispatch(login(values));
        options.resetForm();
    };

    return (
        <div className={s.hero}>
            <div className={s.card}>
                <h1 className={s.title}>
                    Login Now!
                </h1>
                <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                    <Form>
                        <div>
                            <label>
                                <span>Email</span>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className={s.inputField}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Password</span>
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className={s.inputField}
                                    required
                                />
                            </label>
                        </div>
                        <div className={s.textRight}>
                            <a href="#" className={s.link}>
                                Forgot password?
                            </a>
                        </div>
                        <div>
                            <button type="submit" className={s.submitButton}>
                                Login
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;
