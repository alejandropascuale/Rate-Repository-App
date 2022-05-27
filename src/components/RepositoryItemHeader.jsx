import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import SyledText from './StyledText'
import theme from '../theme'

export default function RepositoryItemHeader({ data }) {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: data.ownerAvatarUrl }} />
        </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <SyledText fontWeight='bold'>{data.fullName}</SyledText>
        <SyledText color='secondary'>{data.description}</SyledText>
        <SyledText style={styles.language}>{data.language}</SyledText>
      </View>
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
    marginVertical: 4,
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