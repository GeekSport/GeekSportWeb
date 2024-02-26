/**
 * App entry.
 * @file App 入口文件
 * @module app/entry
 * @author Jed
 */

import 'react-native-gesture-handler'
import React from 'react'
import { Text as RNText } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Iconfont } from './components/common/iconfont'
import { Home}  from './pages/home'
import  {Personal}  from './pages/personal'

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
            name="HomeScreen"
            component={Home}
            options={({ route, navigation }) => {
              return {
                tabBarLabel: ({ color }) => (
                  <RNText style={{ color: color, fontSize: 12 }}>首页</RNText>
                ),
                tabBarIcon: ({ color }) => (
                  <Iconfont name="Home" size={20} color={'#3f51b5'} />
                ),
              }
            }}
          />
          <Tab.Screen
            name="DetailScreen"
            component={Personal}
            options={({ route, navigation }) => {
              return {
                tabBarLabel: ({ color }) => (
                  <RNText style={{ color: color, fontSize: 12 }}>个人</RNText>
                ),
                tabBarIcon: ({ color }) => (
                  <Iconfont name="yduigerenzhongxin" size={20} color={'#3f51b5'} />
                ),
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }

export default App
