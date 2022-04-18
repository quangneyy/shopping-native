import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';



const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 100,
    },
    background : {
        backgroundColor : COLORS.pink
    },
    top : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 35,
    },
    title : {
        fontSize : 30,
        color : COLORS.main
    },
    bottom : {
        flex : 1,
        paddingHorizontal : 20,
    },
    textMidle : {
        fontSize : 30,
        color : COLORS.white,
    }

   
})

export default styles;