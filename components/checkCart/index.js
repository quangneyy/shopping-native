import React from 'react'
import { View, Text , FlatList } from 'react-native'
import styles from './styles'
import ProductList from '../productList'

import ProgessBarShip from '../progessBarShip'

const CheckCart = ({items}) => {

    const handleRender = ({item}) => {
        let itemNew = {
            sum : item.quantity,
            id : item.product_id
        }

       return <ProductList item={itemNew} check/>
    }

    return (
        <View style={styles.container}>
           <View style={styles.yourCart}>
                <Text style={styles.title}>Đơn hàng của bạn</Text>
                <FlatList 
                    data={items}
                    renderItem={handleRender}
                    keyExtractor={item => item.id.toString()}
                />
           </View>
           {/* <View style={styles.yourShip}>
               <Text style={styles.titleShip}>Tình trạng đơn hàng</Text>
               <ProgessBarShip />
           </View> */}
        </View>
    )
}

export default CheckCart
