import React from 'react'
import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles'
import { COLORS } from '../../contains'

const Icon = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name={'clock-o'} size={18} color={COLORS.icon} />
        </View>
    )
}

export default Icon
