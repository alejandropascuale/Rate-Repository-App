import React from 'react'
import { Formik } from 'formik'
import { Button, StyleSheet, View } from 'react-native'
import FormikInputValue from '../components/FormikInputValue'
import { loginValidationSchema } from '../validationSchemas/loginValidationSchema'

const initialValues = {
  email: '',
  password: ''
}

const validate = values => {
  const errors = {}

  if(!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9*-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  console.log(errors)
  return errors
}

export default function Login() {
  return (
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({ handleSubmit }) => {
          return (
            <View style={styles.form}>
              <FormikInputValue name={'email'} placeholder='Email' />
              <FormikInputValue name={'password'} placeholder='Password' secureTextEntry />
              <Button title='Log in' onPress={handleSubmit} ></Button>
            </View>
          )
        }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 10
  }
})