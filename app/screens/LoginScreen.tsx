import { LinearGradient } from "expo-linear-gradient"
import { observer } from "mobx-react-lite"
import { string } from "mobx-state-tree/dist/internal"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, TouchableOpacity, View, ViewStyle,Platform } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps, navigationRef } from "../navigators"
import { colors, spacing, typography } from "../theme"
import { useIsFocused } from '@react-navigation/native';
import WellxBtn from "../components/Buttons/WellxBtn"
import TopHeader from "../components/Header/TopHeader"
import { Style } from "victory-core"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const authPasswordInput = useRef<TextInput>()
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const [mobile, setMobileNumber] = useState(false);
  const isFocused = useIsFocused();
  const [inputFocus, setFocus] = useState(false);


  // const {
  //   authenticationStore: {
  //     authMobile,
  //     setAuthMobile,
  //     setAuthToken,
  //     validationErrors,
  //   },
  // } = useStores()

  useEffect(() => {
    // setMobileNumber(false)
  }, [isFocused])

  // const errors: typeof validationErrors = isSubmitted ? validationErrors : ({} as any)

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)
    // console.log('working ', errors);
    // if (Object.values(validationErrors.authMobile).some((v) => !!v)) return
    console.log('Not working');

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    // setAuthMobile("")

    // We'll mock this with a fake token.
    // setAuthToken(String(Date.now()))

    _props.navigation.navigate('Otp');
  }

  function privacy(){
    _props.navigation.navigate('SettingsPrivacyScreen');
  }

  function terms(){
    _props.navigation.navigate('SettingsTermsScreen');
  }

  

  useEffect(() => {

    // console.log(errors);
    // return () => {
    //   setAuthMobile("")
    // }
  }, [])


  const mobileNumber = (val: string) => {
    // setAuthMobile(val);
    if(val != ''){
      setMobileNumber(true);      
    }else{
      setMobileNumber(false);
    }
    
  }

  const close = () => {
    // setAuthMobile("");
    setIsSubmitted(false);
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      
      <TopHeader centerIcon="wellxLogo" centerIconStyle={$centerLogo} />
      <Text testID="login-heading" tx="loginScreen.signIn" preset="heading" style={$signIn} />
      {/* {attemptsCount > 2 && <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />} */}
      <View style={$inputOuter}>
        <TextField
          // value={authMobile}
          maxLength={9}
          onChangeText={(v) => mobileNumber(v)}
          // containerStyle={$textField}
          // inputWrapperStyle={[$inputWrapper,  errors.authMobile ? $errorBorder  : inputFocus ? $focusBorder : null ]}
          style={$textInput}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType = 'numeric'
          labelTx="loginScreen.emailFieldLabel"
          placeholderTx="loginScreen.emailFieldPlaceholder"
          placeholderTextColor={colors.descText}
          // helper={errors?.authMobile}
          // status={errors?.authMobile ? "error" : undefined}
          onSubmitEditing={() => authPasswordInput.current?.focus()}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          LabelTextProps={{style: $labelStyle}}          
        />
         <Text text='+971' style={$countryCode} />
         <TouchableOpacity    onPress={() => close()} >
          {/* <Icon icon="close" size={8}  color={colors.background} containerStyle={errors.authMobile ? $closeIconContainer : null}  /> */}
         </TouchableOpacity>
      </View>
      


      <WellxBtn 
        title="loginScreen.tapToSignIn" 
        onPress={login} 
        customStyle={$buttonMain} 
        disable={mobile ? false : true} 
        btnType="primary"
        
      />

      <View style={$copyRightContainer}>
        <Text tx="loginScreen.copyright" style={$copyrightTextTop} />
        <View style={$copyrightBottom}>
          <TouchableOpacity onPress={privacy} style={$copyrightConContainer}>
            <Text tx="loginScreen.privicy" style={$copyrightPrivacyandterm} />
          </TouchableOpacity>
          <Text tx="loginScreen.and" style={[$copyrightTextTop, {paddingTop: 6, paddingHorizontal: 5}]} />
          <TouchableOpacity onPress={terms} style={$copyrightConContainer}>
            <Text tx="loginScreen.term" style={$copyrightPrivacyandterm} />
          </TouchableOpacity>
        </View>
      </View>

    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.large,
  flex: 1,
}

const $header: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 52
}

const $signIn: TextStyle = {
  marginBottom: 24,
  fontSize: 36,
  lineHeight: 42,
  fontFamily: typography.fonts.nexa.bold,
  
  color: colors.blackText,
}

const $centerLogo: ViewStyle = {
  width: 120,
  height: 32
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.medium,
}

const $inputWrapper: ViewStyle = {
  backgroundColor: colors.background,
  borderRadius: 16,
  borderColor: colors.challangeBorder,
  position: "relative",
  paddingLeft: 48,
  height:54,
  
}
const $buttonMain: ViewStyle = {
  position: "absolute",
  bottom: 56,
  width: '100%',
  marginBottom: 16,
  alignSelf: "center"
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
  textAlign: "center"
}
const $textInput: TextStyle = {
  justifyContent: "center",
  alignItems:"center",
  alignContent: "center",
  fontSize: 16,
  lineHeight: 18,
  alignSelf:'center',
  fontFamily: typography.fonts.nexa.regular,
  paddingTop: Platform.OS == 'ios' ? 0 : 5.5,
  
  color: colors.blackText,
}
const $inputOuter: ViewStyle = {
  position: "relative",
  alignSelf:'center',
  width:"100%",
}

const $countryCode: TextStyle = {
  fontSize: 16,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.regular,
  color: colors.blackText,
  position: "absolute",
  // bottom: 11,
  top:45.5,
  left: 22
}

const $copyRightContainer: ViewStyle = {

  position: "absolute",
  bottom: 10,
  alignSelf: "center"
  
}

const $copyrightTextTop: TextStyle = {
  textAlign: "center",
  fontSize: 14,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.regular,
  
  color: colors.descText 
}

const $copyrightBottom: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center"
}

const $copyrightConContainer: ViewStyle= {
  marginTop: 6
}
const $copyrightPrivacyandterm: TextStyle= {
  fontSize: 14,
  lineHeight: 14,
  
  fontFamily: typography.fonts.nexa.bold,
  color: colors.blue
}

const $disable: ViewStyle= {
  opacity: 0.4
}
const $enable: ViewStyle= {
  opacity: 1
}

const $errorBorder: ViewStyle= {
  borderColor: colors.error
}

const $focusBorder: ViewStyle= {
  borderColor: colors.activeTabs
}

const $closeIconContainer: ViewStyle= {
  backgroundColor: colors.error,
  width: 16,
  height: 16,
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  borderRadius: 16,
  position: "absolute",
  // bottom: 11,
  bottom:50,
  right: 20
}

const $closeIcon: TextStyle= {
  // padding: 5
}

const $labelStyle: TextStyle={
  fontSize: 16,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.regular,
  
  color: colors.blackText,
  marginBottom:8,
}