/**
 * App entry.
 * @file App 入口文件
 * @module app/entry
 * @author Jed
 */

import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { Login } from './components/common/Login'
import { TabNavigator } from './components/common/TabNavigator'

const Stack = createStackNavigator();

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="Login" component={Login}   options={({ navigation }) => ({
            headerShown: false,
            animationEnabled: false,
          })}/>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={({ navigation }) => ({
            headerShown: false,
            animationEnabled: false,
          })} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App
