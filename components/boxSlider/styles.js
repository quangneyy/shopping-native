import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';



const styles = StyleSheet.create({
    container : {
        borderColor : '#ffffff',
        borderRadius : 20,
        alignItems : 'center',
        marginBottom : 10,
        width : '100%',
        height : 200,
        borderRadius: 5,
    },
    img : {
        width : '100%',
        height : '100%',
        borderRadius: 5,

    },
    input : {
        backgroundColor : COLORS.inputSearch,
        borderRadius : 20
    },
    pagination : {
        position : 'absolute',
        top : '75%',
    },
    slider : {
        backgroundColor:'red',
        borderRadius: 5,
        width : '100%',
      
    },
    dotStyle : {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.92)'
    },
    pagiContainer : { 
    }
   
})

export default styles;