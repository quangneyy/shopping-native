import { StyleSheet , Dimensions } from 'react-native';

import { COLORS } from '../../contains'

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container : {
      width : '100%',
      height : 100,
      flexDirection : 'row',
      marginTop : 15,
    },
    img : {
      width : '100%',
      height : '100%',
      resizeMode : 'contain',
    },
    imgBox : {
      flex : 1,
      width : '100%',
      height : '100%',
      paddingHorizontal : 20,
      paddingVertical : 5,
      backgroundColor : COLORS.second,
      shadowColor: COLORS.main,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      marginHorizontal : 20,
      borderRadius : 15,
    },
    content : {
      flex : 4,
      flexDirection : 'row'
    },
    contentName : {
      fontSize : 20,
    },
    contentPrice : {
      color : COLORS.red
    },
    iconLike : {
      position : 'absolute',
      top : 0,
      left : 0,
      zIndex : 1,
      backgroundColor : COLORS.background,
      borderRadius : 8
    },
    contentInfo : {
      flex : 1.5,
      justifyContent : 'space-evenly'
    },
    contentMore : { 
      flex : 1,
      justifyContent : 'center',
      paddingHorizontal : 6
    },
   
})

export default styles;