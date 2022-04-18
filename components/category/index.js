import React , { useState , useEffect } from 'react'
import { View, Text , TouchableOpacity, FlatList , Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './styles'
import { Skeleton } from '../../common'
import { fetchCategories } from '../../store/slices/categories'
import { useDispatch , useSelector } from 'react-redux'


const Category = () => {
    const dispatch                  = useDispatch()
    const [loading, setLoading]     = useState(true)
    const navigation                = useNavigation()
    const items                     = useSelector(state => state.Categories.items)


    useEffect(() => {
        dispatch(fetchCategories())
            .then(res => {
                if ( !res.error ) {
                    setLoading(false)
                }
            })

    }, [])

    const showProduct = (item) => {
        navigation.navigate('CategoryScreen',{
            id      : item.id,
            name    : item.name
        })
    }

    const showItems = ({item}) => {
        return (
            <TouchableOpacity onPress={() => showProduct(item)} style={styles.box}>
                <View style={styles.boxCategory}>
                    <Image style={styles.imgItem} source={{uri : item.image}} />
                </View>
                <Text style={styles.titleCategory}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    if( loading ) {
        return <Skeleton layout="layoutCategoryHori" />
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Tất cả các danh mục</Text>
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

export default Category
