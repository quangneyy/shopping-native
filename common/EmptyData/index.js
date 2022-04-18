import React from 'react'
import { ScrollView, View , Text ,  Image } from 'react-native'
import { IMAGES } from '../../contains'

import styles from './styles'

const EmptyData = () => {

    return (
        <>
           <View style={styles.container} >
                <Image source={(IMAGES.nodata)} style={styles.img}  />
           </View>
        </>
    )
}

export default EmptyData
