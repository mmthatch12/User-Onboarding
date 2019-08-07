import React from 'react';
import { Form, Field, withFormik } from 'formik';

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

})(UserForm)

export default FormicUserForm