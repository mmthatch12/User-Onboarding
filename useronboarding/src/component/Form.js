import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik, setNestedObjectValues } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

import UserCard from './UserCard'


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

                <h1>User Form</h1>

                <div className="form">

                    <Field className="formfield" type="text" name="name" placeholder="Name" />
                    {touched.name && errors.name && (
                        <p>{errors.name}</p>
                    )}

                    <Field className="formfield" type="email" name="email" placeholder="Email" />
                    {touched.email && errors.email && (
                        <p>{errors.email}</p>
                    )}

                    <Field className="formfield" type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}

                    <Field component="select" name="color">
                        <option>What is your Favorite Color?</option>
                        <option className='blue' value="blue">Blue</option>
                        <option className='red' value="red">Red</option>
                        <option className='green' value="green">Green</option>
                    </Field>

                    <label>
                        Terms of Service
                        <Field className="formfield" type="checkbox" name="tos" checked={values.tos} />
                    </label>
                    
                    <button type="submit">Submit</button>
                    
                </div>

            </Form>

            <h2>Users</h2>

            <UserCard userdata={users} />
                
        </div>
    )
}

const FormicUserForm = withFormik({ 
    mapPropsToValues({ name, email, password, tos,color }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false,
            color: color || '' 
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name field is required'),
        email: Yup.string().email('Email not valid').required('Email entry is required'),
        password: Yup.string().min(7, "Password must be 7 characters or longer").required('Password is required'),
        color: Yup.string().required('Selection of color is required')

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