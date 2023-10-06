import { LinearGradient } from "expo-linear-gradient"
import { observer } from "mobx-react-lite"
import { string } from "mobx-state-tree/dist/internal"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Screen, Text, TextField } from "../../../components"
import WellxBtn from "../../../components/Buttons/WellxBtn"
import TopHeader from "../../../components/Header/TopHeader"
import { AppStackScreenProps } from "../../../navigators"
import { colors, spacing, typography } from "../../../theme"

interface ChangeUsernameProps extends AppStackScreenProps<"ChangeUsername"> {}

export const ChangeUsername: FC<ChangeUsernameProps> = observer(function ChangeUsername(_props) {
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
        centerText={'moreScreen.myProfile.profileSettings.changeUsername'}
      />
      {/* <Text tx="otpScreen.enterDetails" preset="subheading" style={$enterDetails} /> */}
      {/* {attemptsCount > 2 && <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />} */}
      <View style={$inputOuter}>
        <TextField
          value={userName}
          onChangeText={(v) => UserName(v)}
          inputWrapperStyle={$inputWrapper}
          style={$textInput}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          labelTx="usernameScreen.fieldLabel"
          placeholderTx=""
          placeholderTextColor={colors.descText}
        />
      </View>

      <WellxBtn
        title="otpScreen.tapToSignIn"
        customStyle={{ position: "absolute", bottom: 10 }}
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
