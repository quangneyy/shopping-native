import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        flexWrap : 'wrap',
        paddingHorizontal : 20
    }  ,
    img : {
        width : '80%',
        height : '40%',
        resizeMode : 'contain'
    },
    text : {
        fontSize : 28,
        textAlign : 'center',
        color : COLORS.main,
        
    },
    containerN : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        paddingHorizontal : 20
    }

})

export default styles;