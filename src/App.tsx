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
import { Home }  from './pages/home/index'
import { Personal }  from './pages/personal/index'
import { Find }  from './pages/find/index'
import { Square }  from './pages/square/index'
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
            options={({ route, navigation }) => {
              return {
                tabBarLabel: ({ color }) => (
                  <RNText style={{ color: color, fontSize: 13 }}>首页</RNText>
                ),
                tabBarIcon: ({ color }) => (
                  <Iconfont name="Home" size={25} color={'#3f51b5'} />
                ),
              }
            }}
          />
          <Tab.Screen
            name="广场"
            component={Square}
            options={({ route, navigation }) => {
              return {
                tabBarLabel: ({ color }) => (
                  <RNText style={{ color: color, fontSize: 13 }}>广场</RNText>
                ),
                tabBarIcon: ({ color }) => (
                  <Iconfont name="rxa-heart-message-lined" size={25} color={'#3f51b5'} />
                ),
              }
            }}
          />
          <Tab.Screen
            name="发现"
            component={Find}
            options={({ route, navigation }) => {
              return {
                tabBarLabel: ({ color }) => (
                  <RNText style={{ color: color, fontSize: 13 }}>发现</RNText>
                ),
                tabBarIcon: ({ color }) => (
                  <Iconfont name="faxian" size={25} color={'#3f51b5'} />
                ),
              }
            }}
          />
          <Tab.Screen
            name="个人"
            component={Personal}
            options={({ route, navigation }) => {
              return {
                tabBarLabel: ({ color }) => (
                  <RNText style={{ color: color, fontSize: 13 }}>个人</RNText>
                ),
                tabBarIcon: ({ color }) => (
                  <Iconfont name="yduigerenzhongxin" size={25} color={'#3f51b5'} />
                ),
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }

export default App
