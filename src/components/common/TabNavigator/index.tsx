/**
 * Navigation
 * @file 导航
 * @module app/components/common/TabNavigator
 */

import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { observer } from 'mobx-react';
import SplashScreen from 'react-native-splash-screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeRoutes } from '@app/constants/routes'
import { TabBarIcon } from '@app/components/common/TabBarIcon/index'
import { AutoI18nTitle } from '@app/components/common/layout/title'
import { Home } from '@app/pages/home'
import { Personal } from '@app/pages/personal'
import { Find } from '@app/pages/find'
import { Square } from '@app/pages/square'
import { LANGUAGE_KEYS } from '@app/constants/language';


const Tab = createBottomTabNavigator();

export const TabNavigator = observer(function TabNavigator() {
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
        name={HomeRoutes.Home}
        component={Home}
        options={({ route, navigation }) => {
          return {
            headerShown: false,
            tabBarLabel: ({ color,focused }) => (
              <AutoI18nTitle
                focused={focused} 
                i18nKey={LANGUAGE_KEYS.HOME}
                size={12}
                color={color}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <TabBarIcon focused={focused} iconNameDefault="Home" iconNameFocused="yduizhuyexuanzhong"  />,
          }
        }}
      />
      <Tab.Screen
        name={HomeRoutes.Square}
        component={Square}
        options={({ route, navigation }) => {
          return {
            tabBarLabel: ({ color,focused }) => (
              <AutoI18nTitle
                focused={focused} 
                i18nKey={LANGUAGE_KEYS.SQUARE}
                size={12}
                color={color}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <TabBarIcon focused={focused} iconNameDefault="rxa-heart-message-lined" iconNameFocused="rxa-heart-message-filled"  />,
          }
        }}
      />
      <Tab.Screen
        name={HomeRoutes.Find}
        component={Find}
        options={({ route, navigation }) => {
          return {
            tabBarLabel: ({ color,focused }) => (
              <AutoI18nTitle
                focused={focused} 
                i18nKey={LANGUAGE_KEYS.FIND}
                size={12}
                color={color}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <TabBarIcon focused={focused} iconNameDefault="faxian" iconNameFocused="faxian1-copy" />,
          }
        }}
      />
      <Tab.Screen
        name={HomeRoutes.Personal}
        component={Personal}
        options={({ route, navigation }) => {
          return {
            headerShown: false,
            tabBarLabel: ({ color,focused }) => (
              <AutoI18nTitle
                focused={focused} 
                i18nKey={LANGUAGE_KEYS.PERSONAL}
                size={12}
                color={color}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <TabBarIcon focused={focused} iconNameDefault="yduigerenzhongxin" iconNameFocused="yduigerenzhongxinxuanzhong" />,
          }
        }}
      />
    </Tab.Navigator>
  );
})

