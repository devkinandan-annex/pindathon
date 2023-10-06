import { LinearGradient } from "expo-linear-gradient"
import { observer } from "mobx-react-lite"
import { string } from "mobx-state-tree/dist/internal"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import WellxBtn from "../components/Buttons/WellxBtn"
import TopHeader from "../components/Header/TopHeader"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"

interface UserNameScreenProps extends AppStackScreenProps<"Login"> {}

export const UserNameScreen: FC<UserNameScreenProps> = observer(function UserNameScreen(_props) {
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
    _props.navigation.navigate("Device")
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <TopHeader
        leftIcon="back"
        onPressLeft={() => console.log("go back click")}
        centerIcon="wellxLogo"
        centerIconStyle={$centerLogo}
      />
      <Text testID="login-heading" tx="usernameScreen.heading" preset="heading" style={$signIn} />
      {/* <Text tx="otpScreen.enterDetails" preset="subheading" style={$enterDetails} /> */}
      {/* {attemptsCount > 2 && <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />} */}
      <View style={$inputOuter}>
        <TextField
          value={userName}
          onChangeText={(v) => UserName(v)}
          // containerStyle={$textField}
          inputWrapperStyle={$inputWrapper}
          style={$textInput}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          labelTx="usernameScreen.fieldLabel"
          // placeholderTx="loginScreen.emailFieldPlaceholder"
          placeholderTextColor={colors.descText}
        />
      </View>

      <WellxBtn
        title="otpScreen.tapToSignIn"
        customStyle={{ position: "absolute", bottom: 16 }}
        onPress={setUsername}
        disable={enableBtn ? false : true}
        btnType="primary"
      />
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.medium,
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
  borderColor: colors.challangeBorder,
  position: "relative",
  paddingHorizontal: 0,
  paddingVertical: 8,
}
const $buttonMain: ViewStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  alignSelf: "center",
}

const $tapButton: ViewStyle = {
  paddingHorizontal: 16,
  paddingVertical: 18,
  borderRadius: 16,
}
const $buttonText: TextStyle = {
  color: colors.background,
  fontFamily: typography.fonts.nexa.bold,
  
  lineHeight: 18,
  fontSize: 16,
  textAlign: "center",
}
const $centerLogo: ViewStyle = {
  width: 120,
  height: 32
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
  marginTop: 24,
}

const $disable: ViewStyle = {
  opacity: 0.4,
}
const $enable: ViewStyle = {
  opacity: 1,
}
