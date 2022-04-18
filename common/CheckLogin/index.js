import React from 'react'
import { ScrollView, View , Text ,  Image } from 'react-native'
import { IMAGES } from '../../contains'

import styles from './styles'

const CheckLogin = () => {

    return (
        <>
           <View style={styles.container} >
                <Image source={(IMAGES.resetPas)} style={styles.img}  />
                <Text style={styles.text} >Chức năng yêu cầu phải đăng nhập tài khoản</Text>
           </View>
        </>
    )
}

export default CheckLogin
