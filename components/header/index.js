import React from 'react'
import { View, Text } from 'react-native'
import IconHeader from '../iconHeader'
import BoxSearch from '../boxSearch'

import styles from './styles'

const Header = ({icon,name,search = true}) => {
  let iconRight = 'cart'
  switch (icon) {
    case 'sort':
      iconRight = 'sort'
      break;
    case 'delete':
      iconRight = 'delete'
      break;
  }

    return (
      <>
      {
        search ? (
          <View style={styles.container}>
            <View style={styles.top}>
              <IconHeader />
              <Text style={styles.title}> {name}</Text>
              <IconHeader name={iconRight}/>
            </View>
            <View style={styles.bottom}>
              <BoxSearch />
            </View>
         </View>
        )
        : (
          <View style={styles.containerNot}>
            <View style={styles.topNot}>
              <IconHeader name={'login'} />
              <Text style={styles.titleNot}> {name}</Text>
            </View>
         </View>
        )
      }
      </>
       
    )
}

export default Header
