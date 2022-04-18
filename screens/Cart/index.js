import React , { useEffect , useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, View , Text ,  TouchableOpacity, FlatList } from 'react-native'

import {  ProductList  } from '../../components'
import styles from './styles'
import { useSelector } from 'react-redux'
import { EmptyData } from '../../common'

const CartScreen = () => {
    const navigation    = useNavigation()
    const cartItems     = useSelector(state => state.Cart.cart)
    const [total, settotal] = useState(0)

    useEffect(() => {
        let totalCurrent = 0;
        cartItems.map(item => {
            totalCurrent += item.total
        })
        settotal(totalCurrent)
    }, [cartItems])

    const handleBuy = () => {
       navigation.navigate('BuyScreen', {
            total
       })
    }

    if ( cartItems.length <= 0 ) {
        return <EmptyData />
    }

    const handleRender = ({item}) => {
        return <ProductList item={item} cart/>
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <FlatList 
                    data={cartItems}
                    renderItem={handleRender}
                    keyExtractor={(item) => item.id.toString()}
                />
                
            </ScrollView>
            <View style={styles.apply}>
                <TouchableOpacity onPress={handleBuy} style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CartScreen
