import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import SyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

export default function RepositoryItem({ repo }) {
  return (
    <View key={repo.id} style={{ padding: 20, paddingBottom: 5, paddingTop:5 }}>
      <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
      <SyledText fontSize='subheading' fontWeight='bold'>{repo.fullName}</SyledText>
      <SyledText>{repo.description}</SyledText>
      <SyledText style={styles.language}>{repo.language}</SyledText>
      <RepositoryStats data={repo}/>
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