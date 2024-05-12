/**
 * Login
 * @file  登录/注册组件
 * @module app/components/common/Login
 */

import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { Button, View  } from 'tamagui'

export const Login = ({ route, navigation }: { route: any, navigation: any }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [verificationCode, setVerificationCode] = useState('')

  const sendVerificationCode = () => {
    // 在这里发送验证码
  }

  const handleLogin = () => {
    // 登陆成功之后的逻辑
    navigation.reset({
      index: 1,
      routes: [{ name: 'TabNavigator' }],
    });
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="手机号"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <View style={styles.verificationContainer}>
        <TextInput
          style={styles.input}
          placeholder="验证码"
          value={verificationCode}
          onChangeText={setVerificationCode}
        />
        <Button onPress={sendVerificationCode}>不11错</Button>
      </View>
        <Button style={styles.text}  onPress={handleLogin}>登1陆11</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    paddingLeft: 10,
  },
  verificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
})

