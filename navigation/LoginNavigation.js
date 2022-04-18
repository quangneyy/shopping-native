import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../contains'
import { Login } from '../screens'
import { Header } from '../components'

const Stack = createStackNavigator();

const LoginScreen = (props) => {
  return (
    <Stack.Navigator
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
        <Stack.Screen name="LoginScreen"     component={Login}    options={{header : () => (<Header  name={'Đăng nhập'} search={false} />)}}/>
    </Stack.Navigator>
  );
}

export default LoginScreen