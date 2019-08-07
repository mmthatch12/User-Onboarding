import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik, setNestedObjectValues } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

const UserForm = ({ errors, touched, values, status }) => {
    const[users, setUsers] = useState([])

    useEffect(() => {
        if (status) {
            setUsers([...users, status])
        }
    }, [status])

    return (
        <div>
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
                    <Field type="checkbox" name="tos" checked={values.tos} />
                </label>
                
                <button type="submit">Submit</button>
            </Form>

            <h2>Users</h2>

            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <h3>{user.email}</h3>
                </div>
            ))}
        </div>
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

    }),

    handleSubmit(values, { resetForm, setStatus }) {
        Axios.post("https://reqres.in/api/users", values)
            .then(res => {
                console.log(res)
                setStatus(res.data)
                resetForm()
            })
            .catch(err => {
                console.log(err.response)

            })
    }


})(UserForm)

export default FormicUserForm