/**
 * Text
 * @file 公共文本控件，解决了默认颜色和样式的问题
 * @module app/components/common/text
 */

import React from 'react'
import { Text as RNText, TextProps } from 'react-native'
import { observer } from 'mobx-react'
import { glyphs } from './iconfont.json'

const iconMap: { [key: string]: string } = glyphs.reduce((map, icon) => {
  return {
    ...map,
    [icon.font_class]: String.fromCharCode(parseInt(icon.unicode, 16)),
  }
}, {})



interface IconfontProps extends TextProps {
  name: string
  color?: string
  size?: number
}

// eslint-disable-next-line no-undef
export const Iconfont = observer((props: IconfontProps): JSX.Element => {
  return (
    <RNText
      {...props}
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          color: props.color,
          fontFamily: 'iconfont',
        },
        !props.size ? null : {
          fontSize: props.size,
        },
        props.style,
      ]}
    >
      {iconMap[props.name]}
    </RNText>
  )
})
