import React, { FC, useState, useRef } from 'react'
import { StyleSheet, View, } from 'react-native'
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import {TextField } from '../../components'
import WellxBtn, { OuterBtn } from '../../components/Buttons/WellxBtn'
type TextProps = {
  name: any,
  nameAction: (arg: any) => void,
}

const DeviceLinkModal: React.FC<TextProps> = ({name, nameAction }) => {
  console.log(name, "name")
  const [deviceName, setDeviceName] = useState(name || "")
  const [enableBtn, setEnableButton] = useState(false)
  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  const refRBSheet = useRef(null);

  const onChange = (val: string) => {
    setDeviceName(val)
    if (val != "") {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
  }
  const save = () =>{
    nameAction(deviceName)
  }
  return <View style={styles.container}>
    <TextField value={deviceName}
      onChangeText={(v) => onChange(v)}
      inputWrapperStyle={styles.inputWrapper}
      style={styles.textInput}
      autoCapitalize="none"
      autoCorrect={false}
      LabelTextProps={{ style: styles.title }}
      keyboardType="default"
      labelTx="deviceScreen.deviceName"
      placeholder="Device name"
      placeholderTextColor={colors.descText} />
    <WellxBtn title="common.saveChange" customStyle={styles.submit} onPress={save}
    btnType="primary" disable={deviceName.length === 0 ? true: false} />
  </View>
}

function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  return StyleSheet.create({
    container: {
      marginTop: spacing.extraLarge
    },
    title: {
      fontSize: spacing.medium,
      lineHeight: 18,
      
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText
    },
    inputWrapper: {
      backgroundColor: colors.background,
      borderRadius: 16,
      borderColor: colors.challangeBorder,
      position: "relative",
      paddingHorizontal: 0,
      paddingVertical: 8,
      marginTop: 8
    },
    textInput: {
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      
      color: colors.blackText,
    },
    submit:{
      marginTop:32,
      height:54
    }

  })
}
export default DeviceLinkModal