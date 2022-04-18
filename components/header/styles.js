import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';



const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 150,
    },
    containerNot : {
        width : '100%',
        height : 100,
    },
    top : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 25,
    },
    topNot : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 25,
    },
    title : {
        fontSize : 30,
        color : COLORS.main,
        fontFamily : 'Inter_900Black'
    },
    titleNot : {
        fontSize : 30,
        color : COLORS.black,
        marginLeft : '18%'
    },
    bottom : {
        flex : 1,
        paddingHorizontal : 25,
    }

   
})

export default styles;