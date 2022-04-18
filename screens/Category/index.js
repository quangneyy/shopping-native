import React, { useEffect , useState } from 'react'
import { View , FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native';

import { Product  } from '../../components'
import styles from './styles'
import { fetchProductInCategory } from '../../store/slices/categories';
import { useDispatch , useSelector } from 'react-redux';
import { Skeleton } from '../../common'


const categoryScreen = () => {
    const dispatch  = useDispatch()
    const route     = useRoute(); 
    const { id }    = route.params
    const items     = useSelector(state => state.Categories.products)
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
        dispatch(fetchProductInCategory({id,sortBy,order,min_price,max_price}))
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
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={showItems}
                    keyExtractor={(item) => item.name.toString()}
                    numColumns={2}
                />
            </View>
                
       
    )
}

export default categoryScreen
