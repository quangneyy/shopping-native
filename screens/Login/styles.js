import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains'


const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 30,
        paddingVertical : 30,
        flex : 1
    },
    input : {
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal : 24,
        paddingVertical : 15,
        backgroundColor : COLORS.white,
        borderRadius : 15,
        marginBottom : 30
    },
    button : {
        backgroundColor: COLORS.black,
        width : '100%',
        borderRadius : 3,
        justifyContent : 'center',
        alignItems : 'center',
        paddingVertical : 15
        
    },
    buttonText : {
        color : COLORS.white,
        fontSize : 20
    },
    icon : {
        position : 'absolute',
        right : 15,
        top : 15
    }
})

export default styles;