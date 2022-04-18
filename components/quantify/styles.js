import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';



const styles = StyleSheet.create({
    quantity : {
        flexDirection : 'row',
        width : 140,
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    quantity_button : {
        width : 50,
        height : 30,
        backgroundColor : COLORS.main,
        borderRadius : 15,
        justifyContent : 'center',
        alignItems : 'center'
    },
    quantity_buttonText : {
        fontSize : 20
    },
    quantity_small : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
      },
      quantity_button_small : {
        width : 35,
        height : 40,
        backgroundColor : COLORS.button,
        borderRadius : 15,
        justifyContent : 'center',
        alignItems : 'center'
      },
      quantity_buttonText_small : {
        fontSize : 22,
      },
   
})

export default styles;