import React , { useEffect , useState } from 'react'
import { View , FlatList } from 'react-native'
import { Product } from '../../components'
import { useRoute } from '@react-navigation/native';
import { useSelector , useDispatch } from 'react-redux'
import HighlightText from '@sanar/react-native-highlight-text';

import styles from './styles'
import { fetchProduct } from '../../store/slices/product'
import { EmptyData, Skeleton } from '../../common';

const InfoCartScreen = () => {
    const route = useRoute();
    const { search } = route.params
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState({})

    useEffect(() => {
        setLoading(true)
        dispatch(fetchProduct({search}))
            .then ( res => {
                if( !res.error) {
                    setItems(res.payload.data)
                    setLoading(false)
                }
            })
    }, [search])


    if ( loading ) {
        return <Skeleton layout={'layoutCategoryMany'} />
    }

    const searchHighlight = (string) => {
        return (
            <HighlightText
                highlightStyle={{backgroundColor: 'yellow'}}
                searchWords={[search]}
                textToHighlight={string}
            />
        )
    }

    const showItems = ({item}) => {
        let product = {
            ...item,
            name : searchHighlight(item.name)
        }
        return (
            <Product data={product} />
        )
    }

    return (
        <>
        {
            items.length > 0 ? (
                <View style={styles.container}>
                <View style={styles.aside}>
                    <FlatList 
                        showsVerticalScrollIndicator={false}
                        data={items}
                        renderItem={showItems}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                    />
                </View>
            </View>
            ) : (
                <EmptyData />
            )
        }
        </>
    )
}

export default InfoCartScreen
