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
          options={{
            tabBarLabel: ({ color }) => (
              <RNText style={{ color: color, fontSize: 13 }}>首页</RNText>
            ),
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="Home" />,
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
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="rxa-heart-message-lined" />,
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
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="faxian" />,
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
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="yduigerenzhongxin" />,
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
