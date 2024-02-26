/**
 * Square
 * @file 广场
 * @module pages/square/index
 * @author Jed
 */

/* components/Homescreen.js */

import React from 'react'
import { View, Text, Button } from 'react-native'
 function Square({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>广场</Text>
    </View>
  )
}
 export { Square }
