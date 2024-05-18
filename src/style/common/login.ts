
import { StyleSheet } from 'react-native';
import { observable } from 'mobx';
import fonts from '@app/style/fonts';
import sizes from '@app/style/sizes';
import mixins from '@app/style/mixins';
import colors from '@app/style/colors';



export const obStyles = observable({get styles() {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      ...mixins.colCenter,
      paddingHorizontal: sizes.gap,
    },
    logo: {
      width: 80,
      height: 80,
      borderRadius: sizes.gap - 2,
      resizeMode: 'cover',
    },
    loginText: {
      color: colors.cardBackground,
      fontSize: fonts.h2.fontSize * 1.1,
      letterSpacing: 2,
      marginTop: sizes.gap * 1,
      marginBottom: sizes.gap * 0.75,
    },
    register: {
      color: colors.textSecondary,
      fontSize: sizes.goldenRatio * 24,
      letterSpacing: 0.1,
      marginBottom: sizes.gap * 1.8,
    },
    button: {
      fontSize: sizes.gap * 0.9,
      marginTop: sizes.gap * 2.5,
      width: sizes.screen.width * 0.87,
      height: sizes.screen.height * 0.053,
      backgroundColor: colors.primary,
      borderRadius: sizes.gap - 13,
      color: colors.textLink,
      ...mixins.rowCenter,
    },
    disabledButton: {
      backgroundColor: '#42B685',
      opacity: 0.7,
    },
    buttonTwo: {
      fontSize: sizes.gap * 0.9,
      marginTop: sizes.gap * 1.5,
      width: sizes.screen.width * 0.87,
      height: sizes.screen.height * 0.053,
      borderRadius: sizes.gap - 13,
      color: colors.cardBackground,
      borderWidth: 1,
      borderColor: colors.textFrame,
      ...mixins.rowCenter,
    },
    inputWrapper: {
      ...mixins.rowCenter,
      width: sizes.screen.width * 0.87,
      marginBottom: sizes.gap,
    },
    verification: {
      position: 'absolute',
      fontSize: sizes.gap * 0.8,
      color: colors.grey,
    },
    line: {
      position: 'absolute',
      backgroundColor: colors.textDefault,
      width: 1,
      marginLeft: sizes.gap * 2.75,
      height: sizes.gap * 1.1,
    },
    input: {
      height: sizes.gap * 2.5,
      paddingLeft: sizes.gap * 3.6,
      fontSize: sizes.gap * 0.8,
      borderBottomWidth: 1,
      borderBottomColor: colors.textDefault,
      width: '100%',
    },
    obtain: {
      position: 'absolute',
      right: sizes.gap * 0.5,
    },
    obtainText: {
      fontSize: sizes.gap * 0.8,
      color: colors.accent,
    },
    protocol: {
      fontSize: sizes.gap * 0.65,
      paddingLeft: sizes.gap * 0.5,
      color: colors.textSecondary,
    },
    protocolContainer: {
      marginLeft: sizes.gap * 0.3,
      marginTop: sizes.gap * -0.2,
      ...mixins.rowCenter,
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    choice: {
      color: colors.accent,
    },
  });
} })
