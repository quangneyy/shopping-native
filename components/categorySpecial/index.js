import React  , { useState , useEffect } from 'react'
import { View, Text , TouchableOpacity, FlatList , Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FormatPrice } from '../../help'
import RatingComponent from '../rating'
import styles from './styles'
import { Skeleton } from '../../common'
import { fetchProduct  } from '../../store/slices/product'
import { useDispatch , useSelector } from 'react-redux'



const CategorySpecial = ({nameCategory}) => {
    const dispatch                  = useDispatch()
    const navigation                = useNavigation()
    const [loading, setLoading]     = useState(true)
    const [items, setItems]         = useState([])

    useEffect(() => {
        let result
        switch (nameCategory) {
            case 'Danh Mục Nổi Bật':
                result = dispatch(fetchProduct({special : true , name : 'itemsSpec'}))
                break;
            case 'Danh Mục Sản Phẩm Mới':
                result = dispatch(fetchProduct({is_new : true , name : 'itemsNew'}))
                break;
        
            default:
                break;
        }
        result.then(res => {
            if( !res.error ) {
                setItems(res.payload.data)
                setLoading(false)
            }
        })
    }, [])

    const goProduct = (id) => {
        navigation.navigate('ProductScreen',{
            id : id
        })
    }

    if( loading ) {
        return <Skeleton layout="layoutCategoryVe" />
    }

    const showItems = ({item}) => {
        return (
            <TouchableOpacity onPress={() => goProduct(item.id)} style={styles.box}>
                <View style={styles.boxCategory}>
                    <Image style={styles.imgItem} source={{uri : item.image}} />
                </View>
                <View style={styles.info}>
                    <Text numberOfLines={1} style={[styles.infoName]}>{item.name}</Text>
                    <Text numberOfLines={1}>{item.summary}</Text>
                    <Text numberOfLines={1}><RatingComponent /></Text>
                    <Text numberOfLines={1} style={[styles.infoPrice]}>{FormatPrice(item.price)}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{nameCategory}</Text>
            </View>
            <FlatList 
                data={items}
                renderItem={showItems}
                keyExtractor={(item) => item.name.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default CategorySpecial
