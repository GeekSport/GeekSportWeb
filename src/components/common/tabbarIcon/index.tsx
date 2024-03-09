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
  active: { scale: 1 },
  inactive: { scale: 0.9 },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    marginTop: 0,
  },
  label: {
    marginTop: 0,
  },
})

export const TabBarIcon = ({ focused, iconNameDefault, iconNameFocused, label }: { focused: boolean, iconNameDefault: string, iconNameFocused: string, label:string })  => {
  const iconName = focused ? iconNameFocused : iconNameDefault
  return (
    <Scaler pose={focused ? 'active' : 'inactive'}>
      <View style={styles.container}>
        <Iconfont style={styles.icon} name={iconName} size={22} color={focused ? '#00B96B' : '#ccc'} />
        <RNText style={[styles.label, { color: focused ? '#00B96B' : '#ccc', fontSize: 13 }]}>{label}</RNText>
      </View>
    </Scaler>
  )
}
