/**
 * Navigation animation
 * @file 导航动画
 * @module app/components/common/tabbarIcon
 */

import posed from 'react-native-pose'
import React from 'react'
import { Iconfont } from '@app/components/common/iconfont'

const Scaler = posed.View({
  active: { scale: 1 },
  inactive: { scale: 0.9 },
})

export  const TabBarIcon = ({ focused, name }: { focused: boolean, name: string })  => {
  return (
    <Scaler pose={focused ? 'active' : 'inactive'}>
      <Iconfont name={name} size={25} color={focused ? '#3f51b5' : '#F69F3D'} />
    </Scaler>
  )
}
