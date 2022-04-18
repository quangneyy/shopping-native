import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native'

import styles from './styles'
import { InfoList } from '../../components'
import { useNavigation } from '@react-navigation/native'

const InfoScreen = () => {
    const navigation = useNavigation()

    const goInfoShipScreen = () => {
        navigation.navigate('InfoShipScreen')
    }
    const goInfoCartScreen = () => {
        navigation.navigate('InfoCartScreen')
    }

    return (
        <>
           <View style={styles.container}>
                <InfoList name={'ship'} onPress={goInfoShipScreen}/>
                <InfoList name={'cart'} onPress={goInfoCartScreen}/>
           </View>
        </>
    )
}

export default InfoScreen
