import { StyleSheet } from 'react-native';

import { COLORS , FONTSIZE } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.primary
    },
    header : {
        height : 220,
        width : '100%',
        backgroundColor : COLORS.primary,
        alignItems : 'center',
        justifyContent : 'center'
    },
    body : {
        backgroundColor : '#ffffff',
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20
    },
    headerBox : {
        width : 100,
        height : 100,
        backgroundColor : 'white',
        borderRadius : 150,
        marginTop : 20
    },
    headerTitle : {
        marginTop : 10,
        fontWeight : 'bold',
        fontSize : FONTSIZE.h1,
        color : COLORS.white
    },
    img : {
        width : '100%',
        height : '100%',
        borderRadius : 150,
    },
    bottomDrawerSection : {
        height : 60,
        justifyContent : 'center',
        alignItems : 'center'
    },
    bottomDrawerSectionText : {
        color : COLORS.white,
        fontSize : FONTSIZE.h3
    }
})

export default styles;