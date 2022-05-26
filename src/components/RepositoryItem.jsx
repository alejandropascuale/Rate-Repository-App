import React from 'react'
import { Viewm, StyleSheet } from 'react-native'
import SyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

export default function RepositoryItem({ repo }) {
  return (
    <View key={repo.id} style={{ padding: 20, paddingBottom: 5, paddingTop:5 }}>
        <SyledText fontSize='subheading' fontWeight='bold'>{repo.fullName}</SyledText>
        <SyledText>{repo.description}</SyledText>
        <SyledText>{repo.language}</SyledText>
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
    color: theme.colors.primary,
    backgroundColor: theme.backgroundColor.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden'
  }
})