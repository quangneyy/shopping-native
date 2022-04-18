import { StyleSheet } from 'react-native';

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal : 20,
        marginTop : 20
    },
    fill : {
        marginBottom : 20
    },
    fillTitle : {
        fontSize : 22,
        marginBottom : 30
    },
    fillProductCol : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        marginBottom : 20
    },
    categoryPrice : {
        marginBottom : 20
    },
    apply : {
        alignItems : 'center',
        marginBottom : 20
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
    },
    price : {
        color : COLORS.button,
        fontSize : 16
    }

})

export default styles;