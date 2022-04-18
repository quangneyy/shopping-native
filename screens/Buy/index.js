import React , { useState , useEffect}  from 'react'
import { View  , Text , ScrollView , TouchableOpacity, FlatList } from 'react-native'
import { ProductList , InputStyle } from '../../components'
import { FormatPrice } from '../../help'
import { EmptyData } from '../../common'
import { useDispatch , useSelector } from 'react-redux'
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

import styles from './styles'
import { useRoute } from '@react-navigation/native'
import { fetchAsyncBuy } from '../../store/slices/buy'
import ShowToast from '../../help/ShowToast'
import { useNavigation } from '@react-navigation/native';
import { RemoveAll } from '../../store/slices/cart'


const BuyScreen = () => {
    const router = useRoute()
    const cartItems = useSelector(state => state.Cart.cart)
    const { total } = router.params
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const [code, setCode] = useState('')
    const navigation = useNavigation()


    const hideDialog = () => setVisible(false);

    const handleSuccess = () => {
        setVisible(false)
        dispatch(RemoveAll())
        navigation.navigate('Home')
    }

    const handelBuy = () => {
        dispatch(fetchAsyncBuy({data : cartItems}))
            .then(res => {
                if(!res.error) {
                    setCode(res.payload.code)
                    setVisible(true)
                }else{
                    ShowToast('Đăng nhập trước khi mua hàng')
                }
            })
    }


    const handleRender = ({item}) => {
        return <ProductList item={item} />
    }

    if ( cartItems.length <= 0 ) {
        return <EmptyData />
    }

    return (
        <>
     
        <ScrollView>
            <View style={styles.product}>
                <FlatList 
                    data={cartItems}
                    renderItem={handleRender}
                    keyExtractor={(item) => item.id.toString()}
                />
                <View style={styles.sum}>
                    <Text>Tổng đơn hàng</Text>
                    <Text numberOfLines={1} style={styles.contentPrice}>{FormatPrice(total)}</Text>
                </View>
            </View>
        </ScrollView>
        
        <Provider>
            <View>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Cảm ơn bạn đã mua hàng</Dialog.Title>
                        <Dialog.Content>
                        <Paragraph>Mã đơn hàng của bạn là : {code} </Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                        <Button onPress={handleSuccess}>Trở về</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            </Provider>
            <View style={styles.apply}>
                <TouchableOpacity onPress={handelBuy} style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>Mua hàng</Text>
                </TouchableOpacity>
         </View>
        </>
    )
    
}

export default BuyScreen
