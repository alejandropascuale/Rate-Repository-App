import React from 'react'
import SyledText from './StyledText'
import { View } from 'react-native'

export default function RepositoryStats({ data }) {
const parseThousands = value => {
    return value >= 1000 ?
    `${Math.round(value / 100) / 10}k`:
    String(value)
  }
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
          <SyledText align='center' fontWeight='bold'>Stars</SyledText>
          <SyledText align='center'>{parseThousands(data.stargazersCount)}</SyledText>
        </View>
        <View>
          <SyledText align='center' fontWeight='bold'>Forks</SyledText>
          <SyledText align='center'>{parseThousands(data.forksCount)}</SyledText>
        </View>
        <View>
          <SyledText align='center' fontWeight='bold'>Review</SyledText>
          <SyledText align='center'>{data.reviewCount}</SyledText>
        </View>
        <View>
          <SyledText align='center' fontWeight='bold'>Rating</SyledText>
          <SyledText align='center'>{data.ratingAverage}</SyledText>
        </View>
    </View>
  )
}
