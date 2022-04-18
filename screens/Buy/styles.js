import { StyleSheet } from 'react-native';

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    sum : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 20,
        marginTop : 20,
        borderTopColor : COLORS.main,
        borderTopWidth : 1,
        paddingTop : 20
    },
    form : {
        paddingHorizontal : 20,
        marginTop : 40
    },
    salePrice : {
        marginTop : 10,
        color : COLORS.main
    },
    sumALl : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 20,
        marginTop : 40,
        borderTopColor : COLORS.main,
        borderTopWidth : 1,
        paddingTop : 20
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