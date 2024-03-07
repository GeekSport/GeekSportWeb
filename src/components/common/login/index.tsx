/**
 * Login
 * @file  登录组件
 * @module app/components/common/login
 */

import React, { useState } from 'react'
import { View, TextInput, Button, Image, StyleSheet } from 'react-native'
import logo from '../../../assets/images/gravatar.png'

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [verificationCode, setVerificationCode] = useState('')

  const sendVerificationCode = () => {
    // 在这里发送验证码
  }

  const login = () => {
    // 在这里处理登录逻辑
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
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
        <Button title="发送验证码" onPress={sendVerificationCode} />
      </View>
      <Button title="登录" onPress={login} />
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
