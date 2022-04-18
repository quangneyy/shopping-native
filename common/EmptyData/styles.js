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
        width : '100%',
        height : '100%',
        resizeMode : 'contain'
    },
    text : {
        fontSize : 28,
        textAlign : 'center',
        color : COLORS.main,
        
    },

})

export default styles;