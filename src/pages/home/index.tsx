/**
 * Home
 * @file 主页
 * @module pages/home/index
 * @author Jed
 */

import React from 'react'
import { View, Text } from 'react-native'
 function Home({ navigation }: { navigation: any }) {
  return (
    <View className="flex-1 items-center justify-center" >
      <Text  className="text-amber-500 text-xl">首1页22测试</Text>
    </View>
  )
}
 export { Home }
