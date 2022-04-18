import React from 'react'
import { View, Text } from 'react-native'
import IconHeader from '../iconHeader'
import BoxSearch from '../boxSearch'

import styles from './styles'

const HeaderScreen = ({product = false , right = true,name = false}) => {
  let iconRight = product ? 'cart' : 'sort'
  let middle  = name ? <Text style={styles.textMidle}>{name}</Text> : <BoxSearch />

    return (
      <View style={[styles.container,(product && styles.background)]}>
        <View style={styles.top}>
          <IconHeader name={'back'} product={product} right={right}/>
          <View style={styles.bottom}>
          {middle}
          </View>
          {
            right && (
            <IconHeader name={iconRight} product/>
            )
          }
        </View>
        
      </View>
       
    )
}

export default HeaderScreen
