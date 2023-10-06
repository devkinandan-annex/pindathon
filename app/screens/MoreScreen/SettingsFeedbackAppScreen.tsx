import { LinearGradient } from "expo-linear-gradient"
import { observer } from "mobx-react-lite"
import { string } from "mobx-state-tree/dist/internal"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Screen, Text, TextField } from "../../components"
import WellxBtn from "../../components/Buttons/WellxBtn"
import TopHeader from "../../components/Header/TopHeader"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing, typography } from "../../theme"

interface SettingsFeedbackAppScreenProps extends AppStackScreenProps<"SettingsFeedbackAppScreen"> {}
export const SettingsFeedbackAppScreen: FC<SettingsFeedbackAppScreenProps> = observer(function SettingsFeedbackAppScreen(_props) {
  const [enableBtn, setEnableButton] = useState(false)
  const [userName, setUserName] = useState("")

  const UserName = (val: string) => {
    setUserName(val)
    if (val != "") {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
  }

  function setUsername() {
    alert("yup! Your UserName is Changed")
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText={'moreScreen.Settings.SettingsFeedbackApp.title'}
      customStyle={{marginTop: 12}}
      />
      <Text tx="moreScreen.Settings.SettingsFeedbackApp.FeedbackAppTitle"  style={$TitleDetails} />
      <Text tx="moreScreen.Settings.SettingsFeedbackApp.FeedbackAppSubTitle" preset="subheading" style={$enterDetails} />
      <View style={$inputOuter}>
        <TextField
          value={userName}
          onChangeText={(v) => UserName(v)}
          inputWrapperStyle={$inputWrapper}
          style={$textInput}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          labelTx="moreScreen.Settings.SettingsFeedbackApp.label"
          placeholder="Enter text here"
          placeholderTextColor={colors.descText}
        />
      </View>

      <WellxBtn
        title="moreScreen.Settings.SettingsFeedbackApp.Send"
        customStyle={{ position: "absolute", bottom: 10 }}
        onPress={setUsername}
        disable={enableBtn ? false : true}
        btnType="primary"
      />
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.medium,
  flex: 1,
}

const $header: ViewStyle = {
  //   justifyContent: "center",
  alignItems: "center",
  marginBottom: 52,
  flexDirection: "row",
}

const $backBtn: ViewStyle = {
  backgroundColor: colors.connectDeviceButton,
  padding: 8,
  borderRadius: 12,
}

const $logo: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  alignSelf: "center",
  right: 18,
}

const $signIn: TextStyle = {
  marginBottom: 8,
  fontSize: 36,
  lineHeight: 42,
  fontFamily: typography.fonts.nexa.bold,
  
  color: colors.blackText,
}

const $inputWrapper: ViewStyle = {
  backgroundColor: colors.background,
  borderRadius: 16,
  borderWidth:1,
  height:110,
  borderColor: colors.challangeBorder,
  position: "relative",
  paddingHorizontal: 0,
  paddingVertical: 8,
}

const $textInput: TextStyle = {
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  fontSize: 16,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.regular,
  
  color: colors.blackText,
}
const $inputOuter: ViewStyle = {
  marginTop: 32,
}

const $disable: ViewStyle = {
  opacity: 0.4,
}
const $enable: ViewStyle = {
  opacity: 1,
}
const $TitleDetails: TextStyle = {
  alignItems: "center",
  alignContent: "center",
  fontSize: 18,
  lineHeight: 22,
  fontFamily: typography.fonts.nexa.bold,
  
  color: colors.blackText,
  marginBottom:8,
}
const $enterDetails: TextStyle = {
    alignItems: "center",
    alignContent: "center",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: typography.fonts.nexa.regular,
    
    color: colors.descText,
}



