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
import { Iconfont } from '@app/components/common/iconfont';

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
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Iconfont name="taiyangtianqi" size={22} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollContent}>
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={require('@app/assets/images/geekSport.png')} 
          />
          <View style={styles.headerText}>
            <Text style={styles.username}>JedediahXu</Text>
            <View style={styles.badges}>
              <Text style={styles.badge}>已认证</Text>
              <Text style={styles.badge}>超级达人</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.homepage}>
            <Text style={styles.homepageText}>个人主页</Text>
            <Iconfont name="jiantou" size={22} />
          </TouchableOpacity>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>26</Text>
            <Text style={styles.statLabel}>动态</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>19</Text>
            <Text style={styles.statLabel}>收藏</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>99</Text>
            <Text style={styles.statLabel}>关注</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <View style={styles.actionButton}>
            <Text>连续签到</Text>
          </View>
          <View style={styles.actionButton}>
            <Text>福利兑换</Text>
          </View>
          <View style={styles.actionButton}>
            <Text>联系人</Text>
          </View>
          <View style={styles.actionButton}>
            <Text>邀请好友</Text>
          </View>
        </View>

        <View style={styles.activity}>
          <Text>近期动态</Text>
          <View style={styles.calendar}>
            <View style={styles.calendarRow}>
              <View style={styles.calendarDay}></View>
              <View style={styles.calendarDay}></View>
              <View style={styles.calendarDay}></View>
            </View>
          </View>
        </View>

        <View style={styles.additionalSections}>
          <View style={styles.section}>
            <Text>课程中心</Text>
          </View>
          <View style={styles.section}>
            <Text>赚金币</Text>
          </View>
          <View style={styles.section}>
            <Text>跑步一下</Text>
          </View>
          <View style={styles.section}>
            <Text>意见反馈</Text>
          </View>
          <View style={styles.section}>
            <Text>快速分享</Text>
          </View>
          <View style={styles.section}>
            <Text>训练计划</Text>
          </View>
          <View style={styles.section}>
            <Text>技巧文章</Text>
          </View>
          <View style={styles.section}>
            <Text>系统设置</Text>
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
        marginBottom: sizes.gap * 0.7,
        marginTop: sizes.gap * 3,
        marginRight: sizes.gap * 1.7,
      },
      scrollContent: {
        flex: 1,
        backgroundColor: '#F4F5F6',
      },
      profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 10,
      },
      container: {
        flex: 1,
      },
      headerIcons: {
        alignItems: 'flex-end',
      },
      avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
      },
      headerText: {
        flex: 1,  
        marginLeft: 10,
      },
      username: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      badges: {
        flexDirection: 'row',
        marginTop: 5,
      },
      badge: {
        backgroundColor: '#FFD700',
        borderRadius: 10,
        paddingHorizontal: 5,
        marginRight: 5,
      },
      homepage: {
        flexDirection: 'row',
        alignItems: 'center', 
      },
      homepageText: {
        fontSize: 16,
        color: '#888',
        marginRight: 5,
      },
      stats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
      },
      statItem: {
        alignItems: 'center',
      },
      statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      statLabel: {
        fontSize: 14,
        color: '#888',
      },
      actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
      },
      actionButton: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
      },
      activity: {
        marginBottom: 20,
      },
      calendar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      calendarRow: {
        flexDirection: 'row',
      },
      calendarDay: {
        width: 20,
        height: 20,
        backgroundColor: '#90ee90',
        margin: 2,
        borderRadius: 5,
      },
      additionalSections: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      section: {
        width: '48%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginBottom: 10,
      },
    });
  }
})
