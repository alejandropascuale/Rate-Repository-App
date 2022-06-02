import React from 'react'
import { Formik } from 'formik'
import { Button, StyleSheet, View } from 'react-native'
import FormikInputValue from '../components/FormikInputValue'

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    margin: 10
  }
})

export default function Login() {
  return (
    <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({ handleSubmit }) => {
          return (
            <View style={styles.form}>
              <FormikInputValue name={'email'} placeholder='Email' />
              <FormikInputValue name={'password'} placeholder='Password' />
              <Button title='Log in' onPress={handleSubmit} ></Button>
            </View>
          )
        }}
    </Formik>
  )
}
