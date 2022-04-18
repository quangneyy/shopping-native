import React , { useState , useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text , TouchableOpacity , Image } from 'react-native'
import styles from './styles'
import IconHeart from '../iconHeart'
import { FormatPrice } from '../../help'
import Quantify from '../quantify'
import { AddCart , RemoveCart } from '../../store/slices/cart'
import { fetchSingleProduct } from '../../store/slices/product'
import { useDispatch , useSelector } from 'react-redux'
import ShowToast from '../../help/ShowToast'
import {IMAGES , MESSAGE } from '../../contains'


const ProductList = ({item , cart , check}) => {
    const dispatch          = useDispatch()
    const navigation        = useNavigation()
    const [heart, setHeart] = useState(false)
    const [number, setNumber] = useState(item?.sum || 1 )
    const [data, setData] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setloading(true)
        dispatch(fetchSingleProduct({id : item?.id , name : 'pruduct'}))
            .then( res => {
                if(!res.error) {
                    setData(res.payload)
                    setloading(false)
                    if(!check) {
                        dispatch(AddCart({id : item?.id , total : number * res.payload.price_sale_off , update : true , sumUpdate :  item?.sum}))
                    }
                }
            })

    }, [])

    const showProduct = () => {
        navigation.navigate('ProductScreen',{
            id : item?.id
        })
    }

    const onHeart = () => {
        setHeart(!heart)
    }

    const handleChangeNumber = (val) => {
        val === 0 ? dispatch(RemoveCart({id : item?.id})) : dispatch(AddCart({id : item?.id , update : true , sumUpdate : val , total : val * data.price_sale_off}))
        setNumber(val)
        ShowToast(MESSAGE.UpdateCartSuccess)
    }

    if( loading ) {
        return <></>
    }

    return (
        <TouchableOpacity onPress={showProduct} style={styles.container}>
            <View style={styles.imgBox}>
                <View style={styles.iconLike}>
                    <TouchableOpacity onPress={onHeart}>
                        <IconHeart heart={heart} />
                    </TouchableOpacity>
                </View>
                <Image style={styles.img} source={{uri:data.image}} />
            </View>
           
            <View style={styles.content}>
                <View style={styles.contentInfo}>
                    <Text numberOfLines={1} style={styles.contentName}>{data.name}</Text>
                    <Text numberOfLines={1}>{data.description}</Text>
                    {
                        !cart && (
                            <Text numberOfLines={1}>Số lượng : {number}</Text>
                        )
                    }
                    <Text numberOfLines={1} style={styles.contentPrice}>Giá tiền : {cart ? FormatPrice(number * data.price_sale_off) : FormatPrice(data.price_sale_off)}</Text>
                </View>
                {
                    cart && (
                        <View style={styles.contentMore}>
                            <Quantify quantity={number} handleChangeNumber={(val) => handleChangeNumber(val)} small />
                        </View>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default ProductList
