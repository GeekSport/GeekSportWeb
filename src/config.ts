/**
 * App config
 * @file App 配置
 * @module app/config
 * @author Jed
 */

import { Platform } from 'react-native'
import packageJSON from '../package.json'

export const appName = 'GeekSportWeb'
export const email = '510374040@qq.com'
export const webUrl = 'https://GeekSportWeb.me'
export const appApi = 'https://geeksportweb.me'
export const staticApi = 'https://cdn.surmon.me'
export const gravatarApi = 'https://static.geeksportweb.me/avatar'
export const GitHubUrl = 'https://github.com/GeekSport/GeekSportWeb'
export const projectName = packageJSON.name
export const projectUrl = packageJSON.homepage
export const version = packageJSON.version
export const dependencies = packageJSON.dependencies

export const IS_DEV = __DEV__
export const IS_IOS = Object.is(Platform.OS, 'ios')
export const IS_ANDROID = !IS_IOS
