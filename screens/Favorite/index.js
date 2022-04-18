import React , { useState , useEffect } from 'react'
import { View , FlatList } from 'react-native'
import {  Product  } from '../../components'

import { useSelector } from 'react-redux'
import { Skeleton , EmptyData } from '../../common'

import styles from './styles'

const FavoriteScreen = () => {
    const product           = useSelector(state => state.Product.items)
    const favoriteData      = useSelector(state => state.Favorite.items)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       let itemsFavorite = product.filter(item => favoriteData.indexOf(item.id) !== -1)
       setItems(itemsFavorite)
       setLoading(false)
    }, [favoriteData,product])


    const showItems = ({item}) => {
        return (
            <Product data={item} />
        )
    }


    if ( loading ) {
        return <Skeleton layout="layoutCategoryMany" />
    }

    if ( items.length === 0 ) {
        return <EmptyData />
    }

    return (
            <View style={styles.container}>
                <View style={styles.aside}>
                    <FlatList 
                        showsVerticalScrollIndicator={false}
                        data={items}
                        renderItem={showItems}
                        keyExtractor={(item) => item.name.toString()}
                        numColumns={2}
                    />
                </View>
            </View>
    )
}

export default FavoriteScreen
