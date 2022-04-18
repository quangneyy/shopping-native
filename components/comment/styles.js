import { StyleSheet , Dimensions } from 'react-native';

import { COLORS } from '../../contains'

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container : {
    marginBottom : 30
  },
  title : {
    fontWeight : 'bold',
    fontSize : 18,
    marginBottom : 10
  },
  conment : {
    width : '100%',
    height : 120,
    marginBottom : 5,
    borderTopWidth : 1,
    flexDirection : 'row',
    alignContent : 'center',
    alignItems : 'center',
  },
  conment_avatar : {
    width : 80,
    height : 80,
    borderRadius : 50,
    marginRight : 30
  },
  conment_avatar_img : {
    width : '100%',
    height : '100%',
    borderRadius : 50
  },
  content : {
    justifyContent : 'space-around'
  },
  name : {
    fontSize : 20,
    fontWeight : 'bold',
    marginBottom : 10
  },

  
})

export default styles;