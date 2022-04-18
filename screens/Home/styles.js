import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal : 20,
        backgroundColor : COLORS.background,
        paddingTop : 10,
    },
    aside : {
        flex : 2,
    }
})

export default styles;