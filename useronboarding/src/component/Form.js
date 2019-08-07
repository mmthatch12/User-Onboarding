import React from 'react';
import { Form as FormicForm , Field, withFormic } from 'formik'

const Form = () => {
    return (
        <FormicForm />
            <Field name="name" placeholder="Name" />
            <Field name="email" placeholder="Email" />
            <Field name="password" placeholder="Password" />
            <Field name="terms of service" placeholder="Terms of SErvice" />
            <button>Submit</button>
    )
}

export default Form