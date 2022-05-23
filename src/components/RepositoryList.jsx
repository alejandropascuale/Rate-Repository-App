import React from 'react'
import { FlatList, Text } from 'react-native'
import RepositoryItem from './RepositoryItem.jsx';
import repositoriesData from '../data/repositoriesData.js'

const RepositoryList = () => {
  return (
    <FlatList 
        data={repositoriesData}
        ItemSeparatorComponent={() => (<Text> </Text>)}
        renderItem={({ item: data }) => (
            <RepositoryItem repo={data} />
        )}
    />
  )
}

export default RepositoryList
