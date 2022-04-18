import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../contains'
import { FavoriteScreen } from '../screens'
import { Header } from '../components'

const FavoriteStack = createStackNavigator();

const FavoriteStackScreen = (props) => {
    return (
      <FavoriteStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.primary
          },
          headerTintColor : COLORS.second
        }}
      >
        <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{header : () => (<Header icon={'delete'} name={'Yêu thích'}/>)}}/>
    </FavoriteStack.Navigator>
    );
}


export default FavoriteStackScreen