/**
 * App entry.
 * @file App 入口文件
 * @module app/entry
 * @author Jed
 */

import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBarIcon } from './components/common/tabbarIcon'
import { Home } from '@app/pages/home'
import { Personal } from '@app/pages/personal'
import { Find } from '@app/pages/find'
import { Square } from '@app/pages/square'

const Tab = createBottomTabNavigator()

function App() {
  return (
    <NavigationContainer>
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
          name="首页"
          component={Home}
          // route, navigation 目前保留，之后会有用（非主页内容，需要去隐藏下面导航部分）
          options={({ route, navigation }) => {
            return {
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
    </NavigationContainer>
  )
}

export default App
