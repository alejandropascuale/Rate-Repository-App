import { useField } from 'formik'
import React from 'react'
import StyledTextInput from './StyledTextInput'

export default function FormikInputValue({ name, ...props }) {
    const [field, meta, helpers] = useField(name)
  return (
    <StyledTextInput 
        value={field.value} 
        onChangeText={value => helpers.setValue(value)} 
        { ...props }
    />
  )
}
