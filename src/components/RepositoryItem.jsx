import React from 'react'
import { Text, View } from 'react-native'

export default function RepositoryItem({ repo }) {
  return (
    <View key={repo.id} style={{ padding: 20, paddingBottom: 5, paddingTop:5 }}>
        <Text>Full Name: {repo.fullName}</Text>
        <Text>Description: {repo.description}</Text>
        <Text>Language: {repo.language}</Text>
        <Text>Stars: {repo.stargazersCount}</Text>
        <Text>Forks: {repo.forksCount}</Text>
        <Text>Review: {repo.reviewCount}</Text>
        <Text>Rating: {repo.ratingAverage}</Text>
    </View>
  )
}
