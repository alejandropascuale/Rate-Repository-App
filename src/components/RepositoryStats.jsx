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
          <SyledText fontWeight='bold' align='center'>{parseThousands(data.stargazersCount)}</SyledText>
          <SyledText align='center'>Stars</SyledText>
        </View>
        <View>
          <SyledText fontWeight='bold' align='center'>{parseThousands(data.forksCount)}</SyledText>
          <SyledText align='center'>Forks</SyledText>
        </View>
        <View>
          <SyledText fontWeight='bold' align='center'>{data.reviewCount}</SyledText>
          <SyledText align='center'>Review</SyledText>
        </View>
        <View>
          <SyledText fontWeight='bold' align='center'>{data.ratingAverage}</SyledText>
          <SyledText align='center'>Rating</SyledText>
        </View>
    </View>
  )
}
