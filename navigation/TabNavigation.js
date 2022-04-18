import React , { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../contains'
import MyTabs from './index'
import { CartScreen , FillterScreen , ProductScreen , BuyScreen , SearchScreen } from '../screens'
import { HeaderScreen } from '../components'
import LoginScreen from './LoginNavigation'



import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Lato_400Regular,
  Inter_900Black,
  Bangers_400Regular,
  Allura_400Regular,
} from '@expo-google-fonts/dev';

const Stack = createStackNavigator();



const TabStackScreen = (props) => {

    let [fontsLoaded] = useFonts({
      Inter_900Black,
      Lato_400Regular,
      Bangers_400Regular,
      Allura_400Regular
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }

    


    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.primary
          },
          headerTintColor : COLORS.second,
        }}
      >
        <Stack.Screen name="MyTabs"         component={MyTabs} options={{ headerShown : false }} />
        <Stack.Screen name="FillterScreen"  component={FillterScreen} options={{header : () => (<HeaderScreen product right={false} name={'Lọc sản phẩm'}/>)}}/>
        <Stack.Screen name="CartScreen"     component={CartScreen} options={{header : () => (<HeaderScreen product right={false} name={'Giỏ hàng'}/>)}}/>
        <Stack.Screen name="ProductScreen"  component={ProductScreen} options={{header : () => (<HeaderScreen product />)}}/>
        <Stack.Screen name="BuyScreen"      component={BuyScreen} options={{header : () => (<HeaderScreen product right={false} name={'Xác nhận đơn hàng'}/>)}}/>
        <Stack.Screen name="SearchScreen"   component={SearchScreen} options={{header : () => (<HeaderScreen right={false} />)}}/>
        <Stack.Screen name="Login"          component={LoginScreen} options={{headerShown :  false}} />
    </Stack.Navigator>
    );
}


export default TabStackScreen