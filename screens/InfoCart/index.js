import React , { useState } from 'react'
import { View , Text  } from 'react-native'

import styles from './styles'
import { InputStyle , CheckCart } from '../../components'
import { Button , TextInput } from 'react-native-paper';
import { COLORS } from '../../contains';
import { fetchAsyncListSingle } from '../../store/slices/buy'
import { useDispatch} from 'react-redux'
import ShowToast from '../../help/ShowToast'

const InfoCartScreen = () => {
    const [code, setCode] = useState('')
    const [showCheckCart, setShowCheckCart] = useState(false)
    const dispatch = useDispatch()
    const [items, setItems] = useState([])

    const handleClick = () => {
        setShowCheckCart(false)
        dispatch(fetchAsyncListSingle(code))
            .then(res => {
                if(!res.error) {
                    setShowCheckCart(true)
                    setItems(res.payload?.order_items)
                }else {
                    ShowToast('Mã code không chính xác')
                    setCode('')
                }
            })
    }

    return (
        <View style={styles.container}>
            <View >
                <TextInput
                    label="Nhập mã đơn hàng của bạn"
                    value={code}
                    onChangeText={text => setCode(text)}
                />
                <View style={[styles.boxButton]} >
                    <Button icon="check" mode="contained" color={COLORS.main} onPress={handleClick}>
                        <Text style={[styles.textColor]} >Kiểm tra đơn hàng</Text>
                    </Button>
                </View>
            </View>
            {
                showCheckCart && (
                    <CheckCart items={items} />
                )
            }
        </View>
)
}

export default InfoCartScreen
