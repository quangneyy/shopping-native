import React , { useEffect , useState } from 'react'
import { View , FlatList } from 'react-native'

import {  BoxSlider , Product  } from '../../components'
import styles from './styles'
import { fetchProduct } from '../../store/slices/product'
import { useDispatch , useSelector } from 'react-redux'
import { Skeleton } from '../../common'

const CategoryAllScreen = () => {
    const dispatch = useDispatch()

    const items         = useSelector(state => state.Product.items)
    const itemsFillter  = useSelector(state => state.Fillter.items)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        let min_price = itemsFillter.fromValue
        let max_price = itemsFillter.toValue
        let sortBy,order;
        switch (itemsFillter?.active) {
            case 'Giá giảm':
                sortBy = 'price'
                order = 'desc'
                break;
            case 'Giá tăng':
                sortBy = 'price'
                order = 'asc'
                break;
            case 'Mới nhất':
                sortBy = 'id'
                order = 'asc'
                break;
            case 'Cũ nhất':
                sortBy = 'id'
                order = 'desc'
                break;
            case 'Đang giảm giá':
                    sortBy = 'price_sale_off'
                    order = 'desc'
                    break;
        
            default:
                break;
        }
        dispatch(fetchProduct({sortBy,order,min_price,max_price,name : 'items'}))
            .then(res => {
                if ( !res.error ) {
                    setLoading(false)
                }
            })
    }, [itemsFillter])

    const showItems = ({item}) => {
        return (
            <Product data={item} />
        )
    }

    if ( loading ) {
        return <Skeleton layout={"layoutCategoryMany"} />
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
                        nestedScrollEnabled={true}
                        ListHeaderComponent={<BoxSlider />}
                    />
                </View>
            </View>
    )
    
}



export default CategoryAllScreen
