/**
 * Personal
 * @file 个人主页
 * @module pages/personal/index
 * @author Jed
 */

import React from 'react'
import { View, Text, Button } from 'react-native'

 function Personal({ route, navigation }: { route: any, navigation: any }) {

  const logOut = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View className="flex-1 items-center justify-center" >
      <Text>个人主页</Text>
      <Button title="退出登录"  onPress={logOut} />
    </View>
  )
}


 export { Personal }
