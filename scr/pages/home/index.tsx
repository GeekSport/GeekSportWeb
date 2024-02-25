/**
 * Home
 * @file 主页
 * @module pages/home/index
 * @author Jed
 */

import React from 'react'
import { View, Text, Button } from 'react-native'
 function Home({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>首页你徐哥</Text>
      <Button
        title="Go to Detail Screen"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  )
}
 export { Home }
