import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../contains'
import { HomeScreen , CategoryScreen } from '../screens'
import { Header, HeaderNameScreen } from '../components'

const HomeStack = createStackNavigator();

const HomeStackScreen = (props) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor : COLORS.main,
        headerStyle : {
          height : 120,
        },
        headerTitleStyle : {
          fontSize : 30
        }
      }
    }
    >
        <HomeStack.Screen name="HomeScreen"     component={HomeScreen}    options={{header : () => (<Header  name={'ZendVN'}/>)}}/>
        <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={{header : () => (<HeaderNameScreen />)}}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen