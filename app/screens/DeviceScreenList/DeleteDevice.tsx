import React, { FC, useState, useRef } from 'react'
import { StyleSheet, View, } from 'react-native'
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import { Text, Icon, Screen, TextField } from '../../components'
import WellxBtn, { OuterBtn } from '../../components/Buttons/WellxBtn'
type DeleteDeviceProps = {
  close: () => void,
  remove: () => void
}

const DeleteDevice: React.FC<DeleteDeviceProps> = ({ remove, close }) => {
  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  const refRBSheet = useRef(null);


  return <View style={styles.container}>
    <Text tx='deviceScreen.deleteDetails' style={styles.text} />
    <View style={styles.row}>
      <WellxBtn btnType='normal' customStyle={styles.closebtn} customStyleInner={styles.closebtn} onPress={close}>
        <Text tx='common.cancel' style={styles.closeText} />
      </WellxBtn>
      <WellxBtn btnType='normal' customStyle={styles.okBtn} customStyleInner={styles.okBtn} onPress={remove}>
        <Text tx='followSheet.Delete' style={styles.okText} />
      </WellxBtn>
    </View>
  </View>
}

function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  return StyleSheet.create({
    container: {
      marginTop: spacing.extraLarge
    },
    text: {
      color: colors.normalTabs,
      fontSize: 16,
      lineHeight: 18,
      
      fontFamily: typography.fonts.nexa.regular,
    },
    submit: {
      marginTop: 32,
      height: 54
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: spacing.extraLarge
    },
    closebtn: {
      backgroundColor: colors.connectDeviceButton,
      borderRadius: 12,
      height: 42,
      width: '49%',
      marginRight: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeText: {
      color: colors.activeTabs,
      fontSize: 14,
      lineHeight: 14,
      
      fontFamily: typography.fonts.nexa.regular,
    },
    okBtn: {
      backgroundColor: colors.activeTabs,
      borderRadius: 12,
      height: 42,
      width: '49%',
      marginLeft: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    okText: {
      color: colors.background,
      fontSize: 14,
      lineHeight: 14,
      
      fontFamily: typography.fonts.nexa.regular,
    }

  })
}
export default DeleteDevice