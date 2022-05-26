import React from 'react'
import { Text, View } from 'react-native'
import SyledText from './StyledText'

export default function RepositoryItem({ repo }) {
  const RepositoryStats = repo => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
          <SyledText align='center' fontWeight='bold'>Stars</SyledText>
          <SyledText align='center'>{repo.stargazersCount}</SyledText>
        </View>
        <View>
          <SyledText align='center' fontWeight='bold'>Forks</SyledText>
          <SyledText align='center'>{repo.forksCount}</SyledText>
        </View>
        <View>
          <SyledText align='center' fontWeight='bold'>Review</SyledText>
          <SyledText align='center'>{repo.reviewCount}</SyledText>
        </View>
        <View>
          <SyledText align='center' fontWeight='bold'>Rating</SyledText>
          <SyledText align='center'>{repo.ratingAverage}</SyledText>
        </View>
      </View>
    )
  }
  return (
    <View key={repo.id} style={{ padding: 20, paddingBottom: 5, paddingTop:5 }}>
        <SyledText fontSize='subheading' fontWeight='bold'>{repo.fullName}</SyledText>
        <SyledText>{repo.description}</SyledText>
        <SyledText>{repo.language}</SyledText>
        <RepositoryStats {...repo}/>
    </View>
  )
}
