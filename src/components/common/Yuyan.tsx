import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import i18n, { languageMaps, TLanguage } from '@app/services/i18n'
import { optionStore } from '@app/stores/option'
import colors from '@app/style/colors'
import { LANGUAGE_KEYS } from '@app/constants/language'

const languages = ['en', 'zh'] as TLanguage[]

export const Setting = observer(() => {
  const [currentLanguage, setCurrentLanguage] = useState<TLanguage>('en')

  const handleLanguageChange = (language: TLanguage) => {
    setCurrentLanguage(language)
    optionStore.updateLanguage(language)
    optionStore.incrementCount();
  }

  return (
    <View>
      <View>
      <Text>{optionStore.count}</Text>
        <Text>更改语言</Text>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang}
            onPress={() => handleLanguageChange(lang)}
            style={[
              styles.button,
              currentLanguage === lang && { backgroundColor: colors.primary },
            ]}
          >
            <Text style={styles.buttonText}>{languageMaps[lang].name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text>{i18n.t(LANGUAGE_KEYS.FILTER_RESULT)}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})
