import { useNavigation } from '@react-navigation/native';
import React , { useState , useEffect } from 'react'
import { View, Text , TouchableOpacity , Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles'
import IconHeart from '../iconHeart'
import { Favorite } from '../../store/slices/favorite'

import { FormatPrice , SalePercent } from '../../help'
import {IMAGES} from '../../contains'
import { useDispatch , useSelector } from 'react-redux'

const ProductHorizital = ({data,sale = true}) => {
    const navigation = useNavigation()
    const [heart, setHeart] = useState(false)
    const dispatch = useDispatch()
    
    const favoriteData      = useSelector(state => state.Favorite.items)

    const showProduct = () => {
        navigation.setParams({
            id : data.id
        })
    }

    useEffect(() => {
        favoriteData.indexOf(data.id) !== -1 ? setHeart(true) : setHeart(false)
    }, [favoriteData])

    const onHeart = () => {
        setHeart(!heart)
        dispatch(Favorite({id : data.id}))
    }

    return (
        <TouchableOpacity onPress={showProduct} style={styles.container}>
            <View style={styles.product}>
                <View style={styles.boxImg}>
                    <Image style={styles.imgItem} source={{uri : data.image}} /> 
                </View>
                <View style={styles.titleCategory}>
                    <Text numberOfLines={1} style={styles.name} >{data.name}</Text>
                    <Text numberOfLines={1} style={styles.title}>{data.summary}</Text>
                    {
                        sale && ( <Text style={styles.oldPrice} >{FormatPrice(data.price)}</Text>) 
                    }
                    <Text style={styles.price}>{FormatPrice(data.price_sale_off)}</Text>
                </View>
                <View style={styles.iconLike}>
                    <TouchableOpacity onPress={onHeart}>
                        <IconHeart heart={heart} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.iconShoping}>
                    <Ionicons name={'ios-cart'} size={24} color={'red'} />
                </TouchableOpacity>
                {
                    sale && (
                        <View style={styles.sale} >
                            <Image  style={styles.saleImg} source={IMAGES.sale} />
                            <Text style={styles.salePr}>{SalePercent(data.price , data.price_sale_off)}</Text>
                            <Text style={styles.saleOf}>GIẢM GIÁ</Text>
                        </View>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default ProductHorizital
