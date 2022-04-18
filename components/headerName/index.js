import React from 'react'
import { View, Text } from 'react-native'
import IconHeader from '../iconHeader'
import BoxSearch from '../boxSearch'

import styles from './styles'
import { useRoute } from '@react-navigation/native'

const HeaderNameScreen = ({product = false}) => {
  const route = useRoute()

  return (
    <View style={styles.container}>
        <View style={styles.top}>
          <IconHeader name={'back'}/>
          <Text numberOfLines={1} style={styles.title}> Danh mục {route.params.name}</Text>
          <IconHeader name={'sort'}/>
        </View>
        <View style={styles.bottom}>
          <BoxSearch />
        </View>
      </View>
  )
}

export default HeaderNameScreen
