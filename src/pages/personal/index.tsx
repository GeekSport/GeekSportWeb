/**
 * Personal
 * @file 个人主页
 * @module pages/personal/index
 * @author Jed
 */

import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';
import { observable } from 'mobx';
import fonts from '@app/style/fonts';
import sizes from '@app/style/sizes';
import mixins from '@app/style/mixins';
import colors from '@app/style/colors';
import Calendar from '@app/components/common/Calendar'
import { Iconfont } from '@app/components/common/iconfont';
import AuthenticationIcon from '@app/assets/svg/authenticationIcon.svg';
import SigningIcon from '@app/assets/svg/signingIcon.svg';
import WelfareIcon from '@app/assets/svg/welfareIcon.svg';
import ComunicationIcon from '@app/assets/svg/communicationIcon.svg';
import InviteIcon from '@app/assets/svg/inviteIcon.svg';

function Personal({ route, navigation }: { route: any, navigation: any }) {
  const { styles } = obStyles

  const logOut = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons} className='text-green-600'>
          <TouchableOpacity>
            <Iconfont name="taiyangtianqi" size={22} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollContent}>
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={require('@app/assets/images/Wx.jpeg')}
          />
          <View style={styles.headerText}>
            <Text style={styles.username}>JedediahXu</Text>
            <View style={styles.badges}>
              <View style={styles.badge}>
                <AuthenticationIcon style={styles.badgeIcon} width={26} height={26} />
                <Text style={styles.badgeText}>已认证</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.homepage}>
            <Text style={styles.homepageText}>个人主页</Text>
            <Iconfont style={styles.homepageText} name="jiantou" />
          </TouchableOpacity>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem} >
            <Text style={styles.statNumber}>26</Text>
            <Text style={styles.statLabel}>动态</Text>
          </View>
          <View style={styles.statItem} className='ml-4'>
            <Text style={styles.statNumber}>19</Text>
            <Text style={styles.statLabel}>收藏</Text>
          </View>
          <View style={styles.statItem} className='ml-4'>
            <Text style={styles.statNumber}>99</Text>
            <Text style={styles.statLabel}>关注</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <View style={styles.actionButton}>
            <SigningIcon style={styles.actionIcon} width={55} height={55} />
            <Text>连续签到</Text>
          </View>
          <View style={styles.actionButton}>
            <WelfareIcon style={styles.actionIcon} width={55} height={55} />
            <Text>福利兑换</Text>
          </View>
          <View style={styles.actionButton}>
            <ComunicationIcon style={styles.actionIcon} width={55} height={55} />
            <Text>联系人</Text>
          </View>
          <View style={styles.actionButton}>
            <InviteIcon style={styles.actionIcon} width={55} height={55} />
            <Text>邀请好友</Text>
          </View>
        </View>

        <Calendar />

        <View style={styles.setUp}>
          <View style={styles.additionalSections}>
            <View style={styles.actionButton}>
              <TouchableOpacity>
                <Iconfont name="kecheng" size={39} className='mb-2' />
              </TouchableOpacity>
              <Text>课程中心</Text>
            </View>
            <View style={styles.actionButton}>
              <TouchableOpacity>
                <Iconfont name="tuiguangshouyi" size={45} className='mb-2' />
              </TouchableOpacity>
              <Text>賺钱推广</Text>
            </View>
            <View style={styles.actionButton}>
              <TouchableOpacity>
                <Iconfont name="pingfen" size={45} className='mb-2' />
              </TouchableOpacity>
              <Text>鼓励一下</Text>
            </View>
            <View style={styles.actionButton}>
              <TouchableOpacity>
                <Iconfont name="yjfk" size={45} className='mb-2' />
              </TouchableOpacity>
              <Text>意见反馈</Text>
            </View>
          </View>
          <View style={styles.additionalSections}>
            <View style={styles.actionButton}>
              <TouchableOpacity>
                <Iconfont name="fenxiang" size={39} className='mb-2' />
              </TouchableOpacity>
              <Text>快速分享</Text>
            </View>
            <View style={styles.actionButton}>
              <TouchableOpacity>
                <Iconfont name="pingfen" size={45} className='mb-2' />
              </TouchableOpacity>
              <Text>训练计划</Text>
            </View>
            <View style={styles.actionButton}>
              <TouchableOpacity>
                <Iconfont name="pingfen" size={45} className='mb-2' />
              </TouchableOpacity>
              <Text>技巧文章</Text>
            </View>
            <View style={styles.actionButton}>
              <TouchableOpacity>
                <Iconfont name="shezhi" size={45} className='mb-2' />
              </TouchableOpacity>
              <Text>系统设置</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export { Personal }

export const obStyles = observable({
  get styles() {
    return StyleSheet.create({
      header: {
        alignItems: 'flex-end',
        marginBottom: sizes.gap * 0.5,
        marginTop: sizes.gap * 3,
        marginRight: sizes.gap * 1.7,
      },
      scrollContent: {
        flex: 1,
      },
      profile: {
        ...mixins.rowCenter,
        justifyContent: 'space-between',
        padding: sizes.gap * 0.8,
        marginBottom: sizes.gap - 10,
      },
      container: {
        flex: 1,
      },
      headerIcons: {
        alignItems: 'flex-end',
      },
      avatar: {
        width: 67,
        height: 67,
        borderRadius: 60,
      },
      headerText: {
        flex: 1,
        marginLeft: sizes.gap - 7,
      },
      username: {
        fontSize: sizes.gap * 1,
      },
      badges: {
        flexDirection: 'row',
        marginTop: 5,
      },
      badge: {
        ...mixins.rowCenter,
        borderRadius: sizes.gap - 12,
        height: sizes.gap + 3,
        left: sizes.gap * 0.3,
        top: sizes.gap * 0.3,
        paddingLeft: 0,
        backgroundColor: '#CFE4FF',
        paddingHorizontal: sizes.gap * 0.6,
        paddingVertical: sizes.gap * 0.1,
      },
      badgeIcon: {
        right: sizes.gap * 0.3,
      },
      actionIcon: {
        ...mixins.rowCenter,
        right: sizes.gap * 0.1,
        marginTop: sizes.gap * 0.1,
        marginBottom: sizes.gap * 0.2,
      },
      badgeText: {
        color: '#044D81',
        fontSize: sizes.gap * 0.65,
      },
      homepage: {
        ...mixins.rowCenter,
      },
      homepageText: {
        fontSize: sizes.gap * 0.75,
        color: '#888',
        marginBottom: sizes.gap * 1.2,
        marginRight: sizes.gap * 0.3,
      },
      stats: {
        ...mixins.level,
        marginBottom: sizes.gap * 0.5,
      },
      statItem: {
        alignItems: 'center',
      },
      statNumber: {
        fontSize: sizes.gap * 1.2,
        marginBottom: sizes.gap * 0.2,
      },
      statLabel: {
        fontSize: sizes.gap * 0.78,
        color: '#888',
      },
      actions: {
        ...mixins.level,
        marginBottom: sizes.gap * 0.8,
        height: sizes.gap * 5.2,
        margin: sizes.gap * 0.8,
        borderRadius: sizes.gap * 0.3,
        backgroundColor: '#FFFFFF',
      },
      setUp: {
        flexDirection: 'column',
        height: sizes.gap * 11.3,
        margin: sizes.gap * 0.8,
        padding: sizes.gap * 0.5,
        borderRadius: sizes.gap * 0.3,
        backgroundColor: '#FFFFFF',
      },
      additionalSections: {
        ...mixins.level,
        marginBottom: 0,
        marginTop: sizes.gap * 0.3,
      },
      actionButton: {
        ...mixins.colCenter,
        padding: 10,
      },
    });
  }
})
