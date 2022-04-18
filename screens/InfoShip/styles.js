import { StyleSheet} from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal : 25,
        paddingVertical : 20
    },
   
    formInput : {
        marginBottom : 20
    },
    button : {
        width : '100%',
        height : 50,
        borderRadius : 15,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20,
        backgroundColor : COLORS.main
    },
    buttonText : {
        fontSize : 24,
        color : COLORS.white
    }
})

export default styles;