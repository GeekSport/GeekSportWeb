/**
 * Login
 * @file  登录/注册组件
 * @module app/components/common/Login
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Keyboard, TextInput, Image, Text, Alert, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Check as CheckIcon } from '@tamagui/lucide-icons';
import { Button, View, Checkbox } from 'tamagui';
import { useFocusEffect } from '@react-navigation/native';
import { obStyles  } from "@app/style/common/login";
import {  NavigationProps } from '@app/types/props';


const validatePhoneNumber = (phoneNumber: string) => {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phoneNumber);
};

export const Login = ({ route, navigation }: NavigationProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const isButtonEnabled = phoneNumber.trim() !== '' && verificationCode.trim() !== '' && isSelected;
  const isObtainDisabled = timer > 0;

  const { styles } = obStyles

  useFocusEffect(
    useCallback(() => {
      // 屏幕聚焦时重置phoneNumber、verificationCode和计时器状态
      setPhoneNumber('');
      setVerificationCode('');
      setTimer(0);

      return () => {
        // 当组件未聚焦时，清除计时器间隔
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
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
    navigation.navigate('PasswordLogin');
  };

  const startCountdown = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    setTimer(60);
    const newIntervalId = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(newIntervalId);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    // @ts-ignore
    setIntervalId(newIntervalId);
  }, [intervalId]);

  const onAgreementChange = useCallback(() => {
    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('请输入有效的手机号');
      return;
    }

    if (isSelected) {
      Alert.alert('发送数据成功');
      startCountdown();
    } else {
      Alert.alert('请勾选协议');
    }
  }, [isSelected, phoneNumber, startCountdown]);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

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
          <Text style={styles.verification}> + 86</Text>
          <View style={styles.line} />
          <TextInput
            style={styles.input}
            placeholder="请输入手机号"
            value={phoneNumber}
            placeholderTextColor="#999"
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
            onSubmitEditing={() => setVerificationCode('')}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.verification}>验证码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入验证码"
            value={verificationCode}
            keyboardType="numeric"
            placeholderTextColor="#999"
            onChangeText={setVerificationCode}
          />
          <TouchableOpacity onPress={onAgreementChange} style={styles.obtain} disabled={isObtainDisabled}>
            <Text style={styles.obtainText}>{timer > 0 ? `${timer} s 后重新发送` : '获取验证码'}</Text>
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
        <Button style={styles.buttonTwo} onPress={handleRegister}>账 号 密 码 登 陆</Button>
      </View>
    </TouchableWithoutFeedback>
  );
};
