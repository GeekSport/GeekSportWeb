/**
 * Home
 * @file 主页
 * @module pages/home/index
 * @author Jed
 */

import React from 'react';
import { View, Text } from 'react-native';
import i18n, { TLanguage } from '@app/services/i18n';
import colors from '@app/style/colors';
import { LANGUAGE_KEYS, LANGUAGES } from '@app/constants/language';
import { Setting } from '../../components/common/Yuyan';
import { observer } from 'mobx-react';
import { optionStore } from '@app/stores/option';

// 将observer移到函数组件外部
export const Home = observer(function Home({ navigation }: { navigation: any }) {
  const { language } = optionStore;

  return (
    <View className="flex-1 items-center justify-center" >
      <Setting />
      <Text style={[
        {
          color: colors.cardBackground,
        },
      ]}>{i18n.t(LANGUAGE_KEYS.FILTER_RESULT)}</Text>
      <Text className="text-amber-500 text-xl">
        <Text>{i18n.t(LANGUAGE_KEYS.FILTER_RESULT)}</Text>
      </Text>
      <Text>{language === LANGUAGES.EN ? 'English Text' : '中文文本'}</Text>

    </View>
  );
});
