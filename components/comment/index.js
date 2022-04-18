import React , { useEffect } from 'react'
import { View, Text , FlatList , Image } from 'react-native'

import styles from './styles'

const COMMENT = [
    {
        name: "User1",
        avatar : require('../../assets/images/slider/1.jpg'),
        data : 'hàng dùng rất ok ',
    },
    {
        name: "User2",
        avatar : require('../../assets/images/slider/1.jpg'),
        data : 'hàng dùng rất ok ',
    },
]

const Comment = () => {
   

    const showItems = ({item}) => {
        return (
           <View style={styles.conment}>
               <View style={styles.conment_avatar}>
                   <Image style={styles.conment_avatar_img} source={item.avatar} />
               </View>
               <View style={styles.content}>
                   <Text  numberOfLines={1} style={styles.name}>{item.name}</Text>
                   <Text numberOfLines={3} style={styles.data}>{item.data}</Text>
               </View>
           </View>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Nhận xét sản phẩm</Text>
                <FlatList 
                    data={COMMENT}
                    renderItem={showItems}
                    keyExtractor={(item) => item.name.toString()}
                />
            </View>
          

        </>
    )
}

export default Comment
