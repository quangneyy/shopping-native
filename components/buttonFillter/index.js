import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const ButtonFillter = ({title,onPress,active}) => {

  const choseButton = () => {
    onPress(title)
  }

    return (
      <TouchableOpacity onPress={choseButton} style={[styles.button,(active === title && styles.active)]}>
          <Text >{title}</Text>
      </TouchableOpacity>
    )
}

export default ButtonFillter
