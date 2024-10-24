import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";


const validateName = (name) => {
    const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄє ]+$/;
    if (name.length < 2) {
        return 'Name must be at least 2 letters';
    }
    if (!nameRegex.test(name)) {
        return 'Name can only contain letters';
    }
    return '';
};

const validateNumber = (number) => {
    const numberRegex = /^[0-9+\-() ]+$/;
    if (number.length < 2) {
        return 'Number must be at least 2 characters';
    }
    if (!numberRegex.test(number)) {
        return 'Phone number can only contain numbers and +, -, (), spaces';
    }
    return '';
};

const ContactForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        number: "",
    };

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
    };

    return (
        <div className={s.formWrapper}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={s.form}>
                        <label className={s.label}>
                            <span className={s.labelText}>Name</span>
                            <Field
                                name="name"
                                className={s.input}
                                placeholder="Enter contact name"
                                validate={validateName}
                            />

                            {errors.name && touched.name && (
                                <p className={s.error}>{errors.name}</p>
                            )}
                        </label>
                        <label className={s.label}>
                            <span className={s.labelText}>Number</span>
                            <Field
                                name="number"
                                className={s.input}
                                placeholder="Enter contact number"
                                validate={validateNumber}
                            />

                            {errors.number && touched.number && (
                                <p className={s.error}>{errors.number}</p>
                            )}
                        </label>
                        <button type="submit" className={s.submitButton}>Add contact</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
