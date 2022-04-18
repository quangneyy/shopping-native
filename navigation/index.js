import React , { useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../contains'

import HomeStackScreen from './HomeNavigation'
import CategoryStackScreen from './CategoryNavigation'
import FavoriteStackScreen from './FavoriteNavigation'
import InfoStackScreen from './InfoNavigation'
import { useSelector } from 'react-redux'
import { LogBox } from 'react-native';

const Tab = createBottomTabNavigator();


const MyTabs = () => {
    
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    const favoriteItems = useSelector(state => state.Favorite.items)

    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                case 'Home':
                    iconName = focused ? 'ios-home' : 'ios-home-outline'
                    break;
                case 'Category':
                    iconName = focused ? 'ios-bookmarks' : 'ios-bookmarks-outline'
                    break;
                case 'Favorite':
                    iconName = focused ? 'ios-heart' : 'ios-heart-outline'
                    break;
                case 'Info':
                    iconName = focused ? 'ios-person' : 'ios-person-outline'
                    break;
                default:
                    break;
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: COLORS.main,
            tabBarInactiveTintColor: COLORS.icon,
            tabBarStyle : {
                backgroundColor : COLORS.tabBar,
                height : 65,
                paddingBottom : 10
            },
            tabBarLabelStyle : {
                fontSize : 13,
                color : COLORS.icon
            },
            headerShown : false
            })}
        >
            <Tab.Screen name="Home"     component={HomeStackScreen} options={{title : 'Trang chủ' }} />
            <Tab.Screen name="Category" component={CategoryStackScreen} options={{title : 'Danh mục' , tabBarBadge : 'Sale' , tabBarBadgeStyle : {backgroundColor : 'yellow'}}} />
            <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{title : 'Yêu thích' , tabBarBadge : favoriteItems.length}} />
            <Tab.Screen name="Info"     component={InfoStackScreen} options={{title : 'Thông tin'}} />
      </Tab.Navigator>
    )
}

export default MyTabs;