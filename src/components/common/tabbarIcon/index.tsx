/**
 * Navigation animation
 * @file 导航动画
 * @module app/components/common/TabBarIcon
 */

import React from 'react'
import {  View, StyleSheet } from 'react-native'
import posed from 'react-native-pose'
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Iconfont } from '@app/components/common/iconfont'
import fonts from '@app/style/fonts'
import colors from '@app/style/colors';

const Scaler = posed.View({
  active: { scale: 1.1 },
  inactive: { scale: 1 },
})

 const headerStyles = observable({
  get styles() {
    return StyleSheet.create({
      title: {
        ...fonts.h3,
        // fontSize: IS_IOS ? 21 : fonts.h3.fontSize,
        fontWeight: 'bold',
        color: colors.cardBackground
      },
      container: {
        alignItems: 'center',
      },
      icon: {
        marginTop: 2,
      },
    })
  }
})


export const TabBarIcon = observer(({ focused, iconNameDefault, iconNameFocused}: { focused: boolean, iconNameDefault: string, iconNameFocused: string }) => {
  const iconName = focused ? iconNameFocused : iconNameDefault;

  return (
    <Scaler pose={focused ? 'active' : 'inactive'}>
      <View style={headerStyles.styles.container}>
        <Iconfont style={headerStyles.styles.icon} name={iconName} size={22} color={focused ? '#00B96B' : '#ccc'} />
      </View>
    </Scaler>
  );
});
