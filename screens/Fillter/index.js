import React , { useState , useEffect } from 'react'
import { View , Text , TouchableOpacity } from 'react-native'
import { ButtonFillter } from '../../components'
import RangeSlider from 'react-native-range-slider-expo';

import { Fillter } from '../../store/slices/fillter'
import { FormatPrice } from '../../help'

import { useDispatch , useSelector } from 'react-redux'

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const FillterScreen = () => {
    const items = useSelector(state => state.Fillter.items)

    const navigation = useNavigation()

    const [fromValue, setFromValue] = useState(items.fromValue);
    const [toValue, setToValue]     = useState(items.toValue);
    const [active, setActive]       = useState(items.active)

    const dispatch = useDispatch()

    const activeButton = (title) => {
        setActive(title)
    }

    const apply = () => {
        dispatch(Fillter({active,fromValue,toValue}))
        navigation.goBack()
    }

   
    return (
        <>
            <View style={styles.container}>
                <View style={styles.fill}>
                    <Text style={styles.fillTitle}>Lọc theo sản phẩm</Text>
                    <View style={styles.fillProduct}>
                        <View style={styles.fillProductCol}>
                            <ButtonFillter active={active} onPress={activeButton} title={'Mới nhất'} />
                            <ButtonFillter active={active} onPress={activeButton} title={'Giá giảm'} />
                            <ButtonFillter active={active} onPress={activeButton} title={'Giá tăng'} />
                        </View>
                        <View style={styles.fillProductCol}>
                            <ButtonFillter active={active} onPress={activeButton} title={'Cũ nhất'} />
                            <ButtonFillter active={active} onPress={activeButton} title={'Đang giảm giá'} />
                        </View >
                    </View>
                </View>
                <View style={styles.categoryPrice}>
                    <Text style={styles.fillTitle}>Lọc theo giá</Text>
                    <View>
                            <RangeSlider min={0} max={50000000}
                                fromValueOnChange={value => setFromValue(value)}
                                toValueOnChange={value => setToValue(value)}
                                initialFromValue={fromValue}
                                initialToValue={toValue}
                            />
                            <View style={styles.viewPrice}>
                                <Text style={styles.price}>Giá từ :  {FormatPrice(fromValue)}</Text>
                                <Text style={styles.price}> == </Text>
                                <Text style={styles.price}>Giá đến :  {FormatPrice(toValue)}</Text>
                            </View>
                    </View>
                </View>
                
            </View>
            <View style={styles.apply}>
                <TouchableOpacity onPress={apply} style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>Áp dụng</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default FillterScreen
