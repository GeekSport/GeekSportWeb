/**
 * Navigation animation
 * @file 导航动画
 * @module app/components/common/tabbarIcon
 */

import posed from 'react-native-pose'
import React from 'react'
import { Text as RNText, View, StyleSheet } from 'react-native'
import { Iconfont } from '@app/components/common/iconfont'

const Scaler = posed.View({
  active: { scale: 0.9 },
  inactive: { scale: 0.8 },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    marginTop: 4,
  },
  label: {
    marginTop: 5,
  },
})

export const TabBarIcon = ({ focused, iconNameDefault, iconNameFocused, label }: { focused: boolean, iconNameDefault: string, iconNameFocused: string, label:string })  => {
  const iconName = focused ? iconNameFocused : iconNameDefault
  return (
    <Scaler pose={focused ? 'active' : 'inactive'}>
      <View style={styles.container}>
        <Iconfont style={styles.icon} name={iconName} size={25} color={focused ? '#3f51b5' : '#ccc'} />
        <RNText style={[styles.label, { color: focused ? '#3f51b5' : '#ccc', fontSize: 14 }]}>{label}</RNText>
      </View>
    </Scaler>
  )
}
