import React from 'react'
import { TouchableOpacity , Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { AntDesign , Ionicons } from '@expo/vector-icons';

import styles from './styles'
import { COLORS } from '../../contains'
import { RemoveFavorite } from '../../store/slices/favorite'
import { useDispatch , useSelector } from 'react-redux'

const IconHeader = ({name = 'menu',product = false,right = true}) => {
    const navigation = useNavigation();

    const favoriteData = useSelector(state => state.Favorite.items)

    const dispatch = useDispatch()
    let icon = ''

    const openDrawer = () => {
        navigation.openDrawer();
    }
    const openCart = () => {
        navigation.navigate('CartScreen')
    }

    const goBackHome = () => {
        navigation.goBack();
    }

    const goFillter = () => {
        navigation.navigate('FillterScreen')
    }

    const goDelete = () => {
        if(favoriteData.length !== 0) {
            Alert.alert(
                "Thông báo !",
                "Bạn có chắc chắn muốn xoá tất cả ?",
                [
                  {
                    text: "Huỷ",
                    style: "cancel"
                  },
                  { 
                      text: "Đồng ý", 
                      onPress: () => {
                        dispatch(RemoveFavorite())
                      }
                  }
                ]
            );
        }else {
            alert ( 'Chưa có sản phẩm nào !!!')
        }
       
    }

    switch (name) {
        case 'menu':
            icon =  (
                        <TouchableOpacity onPress={openDrawer} style={styles.container}>
                            <Feather name="menu" size={24} color={COLORS.main} />
                        </TouchableOpacity>
                    )
            break;
        case 'login':
            icon =  (
                        <TouchableOpacity onPress={openDrawer} style={styles.container}>
                            <Feather name="menu" size={24} color={COLORS.black} />
                        </TouchableOpacity>
                    )
                break;
        case 'cart':
            icon =   (
                        <TouchableOpacity onPress={openCart} style={styles.cart}>
                            <AntDesign name="shoppingcart" size={24} color={(product ? COLORS.white : COLORS.main)} />
                        </TouchableOpacity>
                    )
            break;
        case 'back':
            icon =   (
                <TouchableOpacity onPress={goBackHome} style={styles.container}>
                    
                    <Ionicons name="arrow-back" size={24} color={(product ? COLORS.white : COLORS.main)} />
                </TouchableOpacity>
            )
            break;
        case 'sort':
            icon =   (
                <TouchableOpacity onPress={goFillter} style={styles.cart}>
                    <Ionicons name="funnel-outline" size={24} color={COLORS.main}  />
                </TouchableOpacity>
            )
            break;
        case 'delete':
            icon =   (
                <TouchableOpacity onPress={goDelete} style={styles.cart}>
                    <Ionicons name="trash-bin-outline" size={24} color={COLORS.main}  />
                </TouchableOpacity>
            )
            break;
    
        default:
            break;
    }

    return (
        icon
    )
}

export default IconHeader
