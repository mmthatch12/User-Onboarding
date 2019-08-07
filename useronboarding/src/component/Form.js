import React from 'react';
import { Form as FormicForm , Field, withFormic } from 'formik'

const Form = () => {
    return (
        <FormicForm>
            <Field type="text" name="name" placeholder="Name" />
            <Field type="email" name="email" placeholder="Email" />
            <Field type="password" name="password" placeholder="Password" />
            <label>
                Terms of Service
                <Field type="checkbox" name="terms of service" />
            </label>
            
            <button>Submit</button>
        </FormicForm>
    )
}

export default Form