import React , {useState} from 'react'
import { View , Text , TouchableOpacity } from 'react-native'
import { FontAwesome , AntDesign , FontAwesome5 } from '@expo/vector-icons';


import styles from './styles'
import { COLORS } from '../../contains';

const InfoList = ({name,onPress}) => {
    let icon , text
    switch (name) {
        case 'info':
            icon = <FontAwesome name="info" size={24} color={COLORS.main} />
            text = 'Quản lí tài khoản'
            break;
        case 'cart':
            icon = <FontAwesome5 name="shipping-fast" size={24} color={COLORS.main} />  
            text = 'Thông tin đơn hàng'
            break;
        case 'ship':
            icon = <FontAwesome name="address-book-o" size={24} color={COLORS.main} />
            text = 'Thông tin giao hàng'
            break;
    
        default:
            break;
    }

    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.area}>
          <View style={styles.areaText}>
              {icon}
              <Text style={styles.areaTextName}>{text}</Text>
          </View>
          <AntDesign name="right" size={24} color={COLORS.main}  />
      </TouchableOpacity>
    )
}

export default InfoList
