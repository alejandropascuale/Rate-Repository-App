import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import SyledText from './StyledText'
import theme from '../theme'

export default function RepositoryItemHeader({ data }) {
  return (
    <View>
      <Image style={styles.image} source={{ uri: data.ownerAvatarUrl }} />
      <SyledText fontSize='subheading' fontWeight='bold'>{data.fullName}</SyledText>
      <SyledText>{data.description}</SyledText>
      <SyledText style={styles.language}>{data.language}</SyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.withe,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})