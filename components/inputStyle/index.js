import React , { useState } from 'react'
import { TextInput, Text , View } from 'react-native'
//import IconStyle from '../icon'

import styles from './styles'

const InputStyle = ({name,style,editable = true,value,onChange}) => {
    const [showPass, setShowPass]  = useState(false)

    let obj = { 
        name            : name,  
        placeholder     : `${name}...`, 
        autoCapitalize  : 'none', 
        style           : {...style},
        editable        : editable,
        secureTextEntry : showPass,
        icon            : <></>,
        multiline       : false,
        numberOfLines   : 1
    }

    switch (name) {
        case 'ConfirmPassword' :
        case 'Password':
            obj.secureTextEntry = !showPass
            obj.icon = <IconStyle name={showPass ? 'eye-slash' : 'eye'}  onPress={() =>setShowPass(!showPass)}/>
            break;
        case 'Địa chỉ':
            obj.multiline = true
            obj.numberOfLines = 4
            break;
        default:
            break;
    }

    return (
        <>
            <Text style={styles.textInputLabel}>{obj.name}</Text>
            <TextInput 
                multiline={obj.multiline}
                numberOfLines = {obj.numberOfLines}
                placeholder={obj.placeholder}
                autoCapitalize={obj.autoCapitalize} 
                style={[styles.textInput,obj.style]}
                editable={obj.editable}
                secureTextEntry={obj.secureTextEntry}
                value={value}
                onChangeText={(value) => onChange(value)}
            />
            <View style={styles.iconShowPass}>{obj.icon}</View>
        </>
    )
}

export default InputStyle
