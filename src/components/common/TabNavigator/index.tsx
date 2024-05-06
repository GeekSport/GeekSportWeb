/**
 * Navigation
 * @file 导航
 * @module app/components/common/TabNavigator
 */

import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@app/pages/home'
import { Personal } from '@app/pages/personal'
import { Find } from '@app/pages/find'
import { Square } from '@app/pages/square'
import { TabBarIcon } from '../TabBarIcon'
import { Login } from '../Login'


const Tab = createBottomTabNavigator();

function TabNavigator() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Tab.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3f51b5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={({ route, navigation }) => {
        return {
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} iconNameDefault="Home" iconNameFocused="yduizhuyexuanzhong" label="首页" />,
        }
      }}
    />
    <Tab.Screen
      name="广场"
      component={Square}
      options={({ route, navigation }) => {
        return {
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} iconNameDefault="rxa-heart-message-lined" iconNameFocused="rxa-heart-message-filled" label="广场" />,
        }
      }}
    />
    <Tab.Screen
      name="发现"
      component={Find}
      options={({ route, navigation }) => {
        return {
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} iconNameDefault="faxian" iconNameFocused="faxian1-copy" label="发现" />,
        }
      }}
    />
    <Tab.Screen
      name="个人"
      component={Personal}
      options={({ route, navigation }) => {
        return {
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} iconNameDefault="yduigerenzhongxin" iconNameFocused="yduigerenzhongxinxuanzhong" label="个人" />,
        }
      }}
    />
    
  </Tab.Navigator>
  );
};

export { TabNavigator }
