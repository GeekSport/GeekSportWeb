/**
 * Login
 * @file  登录/注册组件
 * @module app/components/common/Login
 */

import React, { useState } from 'react'
import { TextInput, StyleSheet, Image, Text } from 'react-native'
import { Button, View } from 'tamagui'
import fonts from '@app/style/fonts'
import sizes from '@app/style/sizes'
import mixins from '@app/style/mixins'

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
      <Image source={require('@app/assets/images/geekSport.png')} style={styles.logo} />
      <Text style={styles.loginText}>登录体验更多精彩</Text>
      <Text style={styles.register}>未注册手机验证后自动注册</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.verification}>+ 86 </Text>
        <View style={styles.line} />
        <TextInput
          style={styles.input}
          placeholder="请输入手机号"
          value={phoneNumber}
          placeholderTextColor="#999"
          onChangeText={setPhoneNumber}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.verification}>验证码</Text>
        <TextInput
          style={styles.input}
          placeholder="请输入验证码"
          value={verificationCode}
          placeholderTextColor="#999"
          onChangeText={setVerificationCode}
        />
        <Text style={styles.obtain} onPress={sendVerificationCode}>获取验证码</Text>
      </View>
      <Button style={styles.button} onPress={handleLogin}>登录</Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...mixins.colCenter,
    paddingHorizontal: sizes.gap,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: sizes.gap - 2,
    resizeMode: 'cover',
  },
  loginText: {
    color: '#000000',
    fontSize: fonts.h2.fontSize,
    letterSpacing: 2,
    marginTop: sizes.gap * 0.85,
    marginBottom: sizes.gap * 0.75,
  },
  register: {
    color: '#636365',
    fontSize: sizes.goldenRatio * 20,
    letterSpacing: 0.1,
    marginTop: 0,
    marginBottom: sizes.gap * 2,
  },
  button: {
    fontSize: sizes.gap * 1,
    marginTop: sizes.gap * 2,
  },
  inputWrapper: {
    ...mixins.rowCenter,
    width: sizes.screen.width * 0.8,
    marginBottom: sizes.gap,
  },
  verification: {
    position: 'absolute',
    fontSize: sizes.gap * 0.9,
    color: '#000',
  },
  line: {
    position: 'absolute',
    backgroundColor: '#B8B4B4',
    width: 1,
    marginLeft: sizes.gap * 2.75,
    height: sizes.gap * 1.1,
  },
  input: {
    height: sizes.gap * 3,
    paddingLeft: sizes.gap * 3.6,
    fontSize: sizes.gap * 0.9,
    borderBottomWidth: 1,
    borderBottomColor: '#C9CACD',
    width: '100%',
  },
  obtain: {
    position: 'absolute',
    fontSize: sizes.gap * 0.9,
    right: sizes.gap * 0.5,
    color: '#1E90FF',
  },
})
