import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(5, 'Password must have 5 characters minimum').max(10, 'Password must be ten characters maximum').required('Password is required')
})