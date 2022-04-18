import React , { useEffect } from 'react'
import { View , ScrollView } from 'react-native'

import {  BoxSlider , Category , CategorySpecial} from '../../components'
import styles from './styles'
import { useDispatch , useSelector } from 'react-redux'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const token             = useSelector(state => state.Auth.token)

    useEffect(() => {
        const setHeader = async () => {
            try {
                let token = await AsyncStorage.getItem('access_token')
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            } catch(e) {
                console.log(e)
            }
          }
        setHeader()
    }, [token])

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <BoxSlider />
                <View style={styles.aside}>
                    <Category />
                    <CategorySpecial nameCategory={'Danh Mục Nổi Bật'} />
                    <CategorySpecial nameCategory={'Danh Mục Sản Phẩm Mới'} />
                </View>
            </ScrollView> 
        </View>
       
    )
}

export default HomeScreen
