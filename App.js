import React , { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStackScreen from './navigation/TabNavigation'
import { DrawerContent } from './screens'
import { Provider } from 'react-redux'
import store from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { RootSiblingParent } from 'react-native-root-siblings';


const Drawer = createDrawerNavigator();

export default function App(props) {


  let persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown : false
          }} 
            drawerContent={props => <DrawerContent {...props} />}
          >
              <Drawer.Screen name="TabStackScreen" component={TabStackScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
      </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
}
