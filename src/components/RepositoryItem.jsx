import React from 'react'
import { View } from 'react-native'
import RepositoryStats from './RepositoryStats'
import RepositoryItemHeader from './RepositoryItemHeader'

export default function RepositoryItem({ repo }) {
  return (
    <View key={repo.id} style={{ padding: 20, paddingBottom: 5, paddingTop:5 }}>
      <RepositoryItemHeader data={repo} />
      <RepositoryStats data={repo}/>
    </View>
  )
}