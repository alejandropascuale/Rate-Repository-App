import React from 'react'
import { View } from 'react-native'
import SyledText from './StyledText'
import RepositoryStats from './RepositoryStats'

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
