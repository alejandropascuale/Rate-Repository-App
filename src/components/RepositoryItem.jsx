import React from 'react'
import { Text, View } from 'react-native'
import SyledText from './StyledText'

export default function RepositoryItem({ repo }) {
  return (
    <View key={repo.id} style={{ padding: 20, paddingBottom: 5, paddingTop:5 }}>
        <SyledText fontSize='subheading' fontWeight='bold'>{repo.fullName}</SyledText>
        <SyledText>{repo.description}</SyledText>
        <SyledText>{repo.language}</SyledText>
        <SyledText>Stars: {repo.stargazersCount}</SyledText>
        <SyledText>Forks: {repo.forksCount}</SyledText>
        <SyledText>Review: {repo.reviewCount}</SyledText>
        <SyledText>Rating: {repo.ratingAverage}</SyledText>
    </View>
  )
}
