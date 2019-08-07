import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, values }) => {
    return (
        <Form>
            <Field type="text" name="name" placeholder="Name" />
            {touched.name && errors.name && (
                <p>{errors.name}</p>
            )}
            <Field type="email" name="email" placeholder="Email" />
            {touched.email && errors.email && (
                <p>{errors.email}</p>
            )}
            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && (
                <p>{errors.password}</p>
            )}
            <label>
                Terms of Service
                <Field type="checkbox" name="tos" />
            </label>
            
            <button type="submit">Submit</button>
        </Form>
    )
}

const FormicUserForm = withFormik({ 
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false 
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name field is required'),
        email: Yup.string().email('Email not valid').required('Email entry is required'),
        password: Yup.string().min(7, "Password must be 7 characters or longer").required('Password is required')

    })

})(UserForm)

export default FormicUserForm