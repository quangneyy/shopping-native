import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';



const styles = StyleSheet.create({
    button : {
        backgroundColor : COLORS.second,
        padding : 20,
        borderRadius : 10,
        shadowColor: COLORS.main,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    active : {  
        backgroundColor : COLORS.red,
    }

})

export default styles;