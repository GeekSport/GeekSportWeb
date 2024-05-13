/**
 * Navigation animation
 * @file 导航动画
 * @module app/components/common/TabBarIcon
 */

import React from 'react'
import {  View, StyleSheet } from 'react-native'
import posed from 'react-native-pose'
import { observer } from 'mobx-react';
import { Iconfont } from '@app/components/common/iconfont'

const Scaler = posed.View({
  active: { scale: 1.1 },
  inactive: { scale: 1 },
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    marginTop: 2,
  },
})

export const TabBarIcon = observer(({ focused, iconNameDefault, iconNameFocused}: { focused: boolean, iconNameDefault: string, iconNameFocused: string }) => {
  const iconName = focused ? iconNameFocused : iconNameDefault;
  return (
    <Scaler pose={focused ? 'active' : 'inactive'}>
      <View style={styles.container}>
        <Iconfont style={styles.icon} name={iconName} size={22} color={focused ? '#00B96B' : '#ccc'} />
      </View>
    </Scaler>
  );
});
