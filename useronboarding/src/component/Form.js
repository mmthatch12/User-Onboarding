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
                <Field type="checkbox" name="tos" />
            </label>
            
            <button>Submit</button>
        </FormicForm>
    )
}

const FormicUserForm = withFormic({ 
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false 
        }
    },

})(Form)

export default FormicUserForm