import { useField } from 'formik'
import React from 'react'
import StyledTextInput from './StyledTextInput'
import StyledText from './StyledText'
import { StyleSheet } from 'react-native'

export default function FormikInputValue({ name, ...props }) {
    const [field, meta, helpers] = useField(name)
  return (
      <>
        <StyledTextInput 
            value={field.value} 
            onChangeText={value => helpers.setValue(value)} 
            { ...props }
        />
        { meta.error && <StyledText style={styles.error}>{ meta.error }</StyledText> }
      </>
  )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 10,
        marginBottom: 20,
        marginTop: -5
    }
})