import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const handleSubmit = (values, options) => {
        dispatch(register(values));
        options.resetForm();
    };

    return (
        <div className={s.hero}>
            <div className={s.card}>
                <h1 className={s.title}>Sign up now!</h1>
                <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                    <Form>
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <Field
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className={s.inputField}
                                required
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className={s.inputField}
                                required
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <Field
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className={s.inputField}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit" className={s.submitButton}>
                                Register
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default RegisterForm;
