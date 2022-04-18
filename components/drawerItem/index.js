import React  from 'react'
import {DrawerItem } from '@react-navigation/drawer';
import { COLORS } from '../../contains'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Logout } from '../../store/slices/auth'
import { useDispatch } from 'react-redux'

const DrawerItemComponent = ({name,setActive,active}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    

    let icon,label;
    switch (name) {
        case 'Home':
            icon = 'ios-home-outline';
            label = "Trang chủ";
            break;
        case 'Category':
            icon = 'ios-copy-outline';
            label = "Danh mục sản phẩm";
            break;
        case 'CartScreen':
            icon = 'ios-cart-outline';
            label = "Thông tin giỏ hàng";
            break;
        case 'Info':
            icon = 'ios-person-outline';
            label = "Quản lí thông tin";
            break;
        case 'Login':
            icon = 'ios-log-in-outline';
            label = "Đăng nhập";
            break;
        case 'Logout':
            icon = 'ios-log-out-outline';
            label = "Đăng Xuất";
            break;
        default:
            break;
    }

    const handleLogout = () => {
        dispatch(Logout())
    }

    return (
        <DrawerItem
            focused={active == name ? true : false}
            activeTintColor={COLORS.primary}
            icon={({color, size }) => (
                <Ionicons name={icon} size={size} color={color} />
            )}
            label={label}
            onPress={() => {
                setActive(name)
                {
                    name == 'Logout' ? (
                        handleLogout()
                    ) : (
                        navigation.navigate(name)
                    )
                }
            }}
        />
    )
}

export default DrawerItemComponent
