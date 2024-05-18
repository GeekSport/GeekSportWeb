/**
 * Login
 * @file  密码登陆组件
 * @module app/components/common/Login
 */

import React, { useState, useCallback } from 'react';
import { Keyboard, TextInput, Image, Text, Alert, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Check as CheckIcon } from '@tamagui/lucide-icons';
import { Button, View, Checkbox } from 'tamagui';
import { obStyles } from "@app/style/common/login"
import { useFocusEffect } from '@react-navigation/native';

type Props = {
  route: any;
  navigation: any;
};

export const PasswordLogin = ({ route, navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isSelected, setSelection] = useState(false);

  const isButtonEnabled = phoneNumber.trim() !== '' && verificationCode.trim() !== '' && isSelected;

  const { styles } = obStyles

  useFocusEffect(
    useCallback(() => {
      setPhoneNumber('');
      setVerificationCode('');

      return () => { };
    }, [])
  );


  const handleLogin = () => {
    if (isButtonEnabled) {
      navigation.reset({
        index: 1,
        routes: [{ name: 'TabNavigator' }],
      });
    }
  };

  const handleRegister = () => {
    navigation.navigate('Login');
  };

  const onForgotPassword = () => {
    Alert.alert('忘记密码', '请联系管理员重置密码');
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Image source={require('@app/assets/images/geekSport.png')} style={styles.logo} />
        <Text style={styles.loginText}>登录体验更多精彩</Text>
        <Text style={styles.register}>未注册手机验证后自动注册</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.verification}>账号 </Text>
          <TextInput
            style={styles.input}
            placeholder="请输入手机号/用户名"
            value={phoneNumber}
            placeholderTextColor="#999"
            onChangeText={setPhoneNumber}
            onSubmitEditing={() => setVerificationCode('')}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.verification}>密码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入密码"
            value={verificationCode}
            placeholderTextColor="#999"
            onChangeText={setVerificationCode}
          />
          <TouchableOpacity onPress={onForgotPassword} style={styles.obtain} >
            <Text style={styles.obtainText}>忘记密码</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.protocolContainer}>
          <Checkbox
            size="$2.5"
            checked={isSelected}
            onCheckedChange={() => setSelection(!isSelected)}
          >
            {isSelected && <CheckIcon size="$1" />}
          </Checkbox>
          <Text style={styles.protocol}>
            我已阅读并同意<Text style={styles.choice}>用户协议</Text>和<Text style={styles.choice}>隐私协议</Text>
          </Text>
        </View>
        <Button
          style={[styles.button, !isButtonEnabled && styles.disabledButton]}
          disabled={!isButtonEnabled}
          onPress={handleLogin}
        >
          登 陆
        </Button>
        <Button style={styles.buttonTwo} onPress={handleRegister}>手 机 号 快 捷 登 陆</Button>
      </View>
    </TouchableWithoutFeedback>
  );
};
