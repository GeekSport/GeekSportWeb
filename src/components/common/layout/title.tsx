/**
 * Common header
 * @file 全局公共头部组件
 * @module app/components/layout/header
 * @author Surmon <https://github.com/surmon-china>
 */

import React from 'react'
import { Text, TextProps } from 'react-native'
import { observer } from 'mobx-react'
import posed from 'react-native-pose'
import { LANGUAGE_KEYS } from '@app/constants/language'
import i18n from '@app/services/i18n'

interface I18nTitleProps extends TextProps {
  size?: number
  color?: string
  focused?: boolean,
  i18nKey?: LANGUAGE_KEYS
}

const Scaler = posed.View({
  active: { scale: 1.1 },
  inactive: { scale: 1 },
})

export const AutoI18nTitle = observer((props: I18nTitleProps): JSX.Element => {
  const { i18nKey, style } = props
  const styles = [
    {
      color: props.color,
      fontSize: props.size
    },
    style
  ]
  return (
    <Scaler pose={props.focused ? 'active' : 'inactive'}>
    <Text style={styles}>{i18nKey && i18n.t(i18nKey)}</Text>
    </Scaler>
  )
})

