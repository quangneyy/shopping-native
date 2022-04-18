import { StyleSheet , Dimensions } from 'react-native';

import { COLORS } from '../../contains'

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container : {
    marginBottom : 30,
  },
  titleText : {
    fontSize : 24,
    fontFamily : 'Allura_400Regular'
  },
  title : {
    marginBottom : 10
  },
  box : {
    flexDirection : 'row',
    marginRight : 25,
    borderRadius : 15,
    width : 230,
  },
  boxCategory : {
    width : 110,
    height : 110,
    borderRadius : 15
  },
  imgItem : {
    width : '100%',
    height : '100%',
    borderRadius : 15,
    resizeMode : 'contain'
  },
  info : {
    marginLeft : 15,
    justifyContent : 'space-around',
    maxWidth : 120,
  },
  infoName : {
    fontWeight : 'bold'
  },
  infoPrice : {
    fontWeight : 'bold',
    color : 'red'
  }
})

export default styles;