import React , { useEffect , useState } from 'react'
import { View , Keyboard  , Text , TextInput , TouchableWithoutFeedback  , TouchableHighlight , TouchableOpacity} from 'react-native'
import { COLORS } from '../../contains'
import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles'
import { fetchAsyncLogin } from '../../store/slices/auth'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [showPass, setShowPass] = useState(true)
    const dispatch      = useDispatch()
    const navigation    = useNavigation()

    const [data, setData] = useState({
        email           : '',
        password        : ''
    })  

    const handleLogin = () => {
        dispatch(fetchAsyncLogin(data))
            .then(res => {
                if( !res.error ) {
                    navigation.navigate('Home')
                }
            })
    }

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container} >
                    <View  style={styles.input} >
                        <TextInput 
                            placeholder="Email..." 
                            value={data.email}
                            onChangeText={(val) => setData({ ...data,email : val})}
                        />
                    </View>
                    <View  style={styles.input} >
                        <TextInput 
                            placeholder="Password..." 
                            secureTextEntry={showPass}
                            value={data.password}
                            onChangeText={(val) => setData({...data,password : val})}
                        />
                        <TouchableOpacity onPress={handleShowPass} style={styles.icon}>
                            <FontAwesome name={!showPass ? 'eye' : "eye-slash"} size={18} color="black"  />
                        </TouchableOpacity>
                    </View>
                       
                           
                            <TouchableHighlight 
                                activeOpacity={0.5}
                                underlayColor= {COLORS.black}
                                style={styles.button} onPress={handleLogin}
                            >
                            <Text style={styles.buttonText}>Đăng nhập</Text>
                            </TouchableHighlight>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default LoginScreen

