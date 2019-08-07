import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = () => {
    return (
        <Form>
            <Field type="text" name="name" placeholder="Name" />
            <Field type="email" name="email" placeholder="Email" />
            <Field type="password" name="password" placeholder="Password" />
            <label>
                Terms of Service
                <Field type="checkbox" name="tos" />
            </label>
            
            <button>Submit</button>
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