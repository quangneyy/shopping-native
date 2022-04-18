import { StyleSheet , Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container : {
    marginBottom : 30
  },
  containerBox : {
    marginTop : 15,
    flexDirection : 'row',
    flexWrap: 'wrap'
  },
  box : {
      marginRight : 20,
      alignItems : 'center'
  },
  title : {
    marginTop : 10,
  },
  boxCategory : {
      width : 80,
      height : 80,
      borderRadius : 15,
      alignItems : 'center',
      justifyContent : 'center',
  },
  titleCategory : {
      alignItems : 'center',
      marginTop : 6,
  },
  titleText : {
    fontSize : 25,
    fontFamily : 'Allura_400Regular'
  },
  imgItem : {
    width : '80%',
    height : '80%',
    borderRadius : 15,
    resizeMode : 'contain'
  }
  
})

export default styles;