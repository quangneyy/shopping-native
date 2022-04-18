import { StyleSheet , Dimensions } from 'react-native';

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.background,
        paddingTop : 10,
    },
    apply : {
        alignItems : 'center',
        marginVertical : 20,
    },
    applyButton : {
        backgroundColor : COLORS.main,
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 120,
        paddingVertical : 20,
        borderRadius : 15,
        marginBottom : 10,
    },
    applyButtonText : {
        color : COLORS.white,
        fontSize : 20
    },
    viewPrice : {
        flexDirection : 'row',
        justifyContent : 'space-between',
    }
})

export default styles;