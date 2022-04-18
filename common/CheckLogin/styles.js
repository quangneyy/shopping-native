import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }  ,
    img : {
        width : '80%',
        height : '40%',
        resizeMode : 'contain'
    },
    text : {
        fontSize : 28,
        textAlign : 'center',
        color : COLORS.main
    }

})

export default styles;