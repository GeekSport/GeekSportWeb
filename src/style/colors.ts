/**
 * Style colors
 * @file Theme 主题/颜色配置
 * @module app/colors
 * @author Jed
 */

import { observable } from 'mobx'
import { Appearance } from 'react-native';

export enum Themes {
  Default = 'default',
  Dark = 'Dark'
}

type ThemeKey =
  | 'primary'// 主题色
  | 'secondary' // 次要主题色

  | 'accent' // 强调色
  | 'red' // 红色，错误色
  | 'yellow' // 黄色，警告色
  | 'grey' // 银灰色
  | 'inverse' // 反色

  | 'border' // 边框色
  | 'background' // 全局背景色
  | 'cardBackground' // 模块背景色

  | 'textDefault' // 默认文本
  | 'textSecondary' // 次要文本
  | 'textMuted' // 禁用文本
  | 'textFrame' // 边框


  | 'textTitle' // 标题文本
  | 'textLink' // 链接文本

type Theme = Record<ThemeKey, string>

export const Default: Theme = {
  primary: '#00B96B',
  secondary: '#262626',
  accent: '#1E90FF',
  red: '#ff5722',
  yellow: '#ffeb3b',
  grey: '#000000',
  inverse: '#333333',
  border: '#BBBBBB',
  background: '#EEEEEE',
  cardBackground: '#1a1a1a',

  textDefault: '#C9CACD',
  textSecondary: '#636365',
  textMuted: '#eee',
  textFrame: '#C9C9C9',

  textTitle: '#222',
  textLink: '#FFFFFF'
}

export const Dark: Theme = {
  primary: '#00B96B',
  secondary: '#262626',
  accent: '#1E90FF',
  red: '#ff5722',
  yellow: '#ffeb3b',
  grey: '#000000',
  inverse: '#FFFFFF',
  border: '#333333',
  background: '#000000',
  cardBackground: '#1a1a1a',

  textDefault: '#C9CACD',
  textSecondary: '#636365',
  textMuted: '#333333',
  textFrame: '#C9C9C9',

  textTitle: '#EEEEEE',
  textLink: '#FFFFFF'
}

const themeMode = Appearance.getColorScheme();

export const isDarkSystemTheme =  themeMode === 'dark'

const colors = observable<Theme>(isDarkSystemTheme ? Dark : Default)

export default colors
export const updateTheme = (darkTheme: boolean) => {
  Object.keys(Default).forEach(key => {
    const themeKty = (key as keyof Theme)
    colors[themeKty] = darkTheme ? Dark[themeKty] : Default[themeKty]
  })
}
