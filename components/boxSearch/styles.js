import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';



const styles = StyleSheet.create({
    container : {
        padding : 0,
        borderColor : '#ffffff',
        borderRadius : 20,
    },
    input : {
        backgroundColor : COLORS.inputSearch,
        borderRadius : 20,
        paddingHorizontal : 8
    }
   
})

export default styles;