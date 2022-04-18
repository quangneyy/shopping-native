import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../contains'

const IconHeart = ({heart}) => {
    let iconName = heart ? 'ios-heart' : 'ios-heart-outline'

    return (
        <Ionicons name={iconName} size={24} color={COLORS.red} />
    )
}

export default IconHeart
