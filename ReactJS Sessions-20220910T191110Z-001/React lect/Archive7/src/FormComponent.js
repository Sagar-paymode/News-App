// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormComponent = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '',contact:'' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.password){
            errors.password = 'Password is required'
        }
        if(!values.contact){
            errors.contact = 'Contact is required'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(true);
          resetForm();
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" /><br/>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" /><br/>
          <Field type="text" name="contact" />
          <ErrorMessage name="contact" component="div" /><br/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormComponent;