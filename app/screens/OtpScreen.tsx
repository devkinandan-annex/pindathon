import { LinearGradient } from "expo-linear-gradient"
import { observer } from "mobx-react-lite"
import { string } from "mobx-state-tree/dist/internal"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"
import OTPInput from 'react-native-otp';
import WellxBtn from "../components/Buttons/WellxBtn"
import TopHeader from "../components/Header/TopHeader"

interface OtpScreenProps extends AppStackScreenProps<"Login"> {}


const RESEND_OTP_TIME_LIMIT = 60; // 60 secs
const AUTO_SUBMIT_OTP_TIME_LIMIT = 4;
let resendOtpTimerInterval;


export const OtpScreen: FC<OtpScreenProps> = observer(function OtpScreen(_props) {
  
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const [mobile, setMobileNumber] = useState(false);
  const [otp, setOtp] = useState("");
  const [enableBtn, setEnableButton] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );

  const [autoSubmitOtpTime, setAutoSubmitOtpTime] = useState(
    AUTO_SUBMIT_OTP_TIME_LIMIT,
  );


  const {
    authenticationStore: {
      authOtp,
      setAuthOtp,
      setAuthToken,
      validationErrors,
    },
  } = useStores()
  

  useEffect(() => {
      startResendOtpTimer();
  
      return () => {
        if (resendOtpTimerInterval) {
          clearInterval(resendOtpTimerInterval);
        }
      };
    }, [resendButtonDisabledTime]);


    const startResendOtpTimer = () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
      resendOtpTimerInterval = setInterval(() => {
        if (resendButtonDisabledTime <= 0) {
          clearInterval(resendOtpTimerInterval);
        } else {
          setResendButtonDisabledTime(resendButtonDisabledTime - 1);
        }
      }, 1000);
    };

    function onResendOtp() {
  
      setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
      startResendOtpTimer();
      //dispatch(otpResend({ mobile_no: data.mobile_no }));
    }


  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)
    // console.log(otp)
    // if (Object.values(validationErrors.authOtp).some((v) => !!v)) return
    
    if(otp == '1234'){
        setError(false);
        setSuccess(true);
        setIsSubmitted(false)
        setAuthOtp("")
        setAuthToken(String(Date.now()))
    }else{
        setError(true);
        setSuccess(false);
    }


    console.log('RRROR ', error);
    
  }

  

  

 


  const setupOtp = (val: string) => {
    setError(false);
    setOtp(val);
    // console.log(otp);
    setAuthOtp(otp)
    if(val != ""){
        setEnableButton(true);      
    }else{
        setEnableButton(false);
    }
    
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <TopHeader leftIcon="back" onPressLeft={() => _props.navigation.navigate('Login')} centerIcon="wellxLogo" centerIconStyle={$centerLogo}  />
      <Text testID="login-heading" tx="otpScreen.signIn" preset="heading" style={$signIn} />
      <Text tx="otpScreen.enterDetails" preset="subheading" style={$enterDetails} />
      {/* {attemptsCount > 2 && <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />} */}
      <View style={$inputOuter}>
      <OTPInput
          value={otp}
          onChange={(v) => setupOtp(v)}
          tintColor={colors.activeTabs}
          offTintColor={error ? colors.error : success ? colors.success : colors.challangeBorder}
          otpLength={4}
          cellStyle={$cellStyle}
        />
        {error ? 
          <Text tx="otpScreen.errors.invalidOTP" style={$error} />
          : 
          <Text text="" />
        }

          

        
              
                {resendButtonDisabledTime > 0 ? (
                  <View style={$otpTimerContainer}>
                        <Text tx="otpScreen.resendOtpTitle" style={$otpResendTitle} />
                        <Text style={[$otpResendTitle, {color: colors.activeTabs}]}>00:{resendButtonDisabledTime}</Text>  
                        </View>) 
                          : (
                            <TouchableOpacity onPress={onResendOtp}>
                                <Text tx="otpScreen.otpResendBtn" style={$otpBtn} />
                            </TouchableOpacity>
                          )
                }

          
      </View>         
      

      <WellxBtn title="otpScreen.tapToSignIn" customStyle={{position: 'absolute', bottom: 16}} onPress={login} disable={enableBtn ? false : true} btnType="primary" />

    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.large,
  flex: 1,
}

const $header: ViewStyle = {
//   justifyContent: "center",
  alignItems: "center",
  marginBottom: 52,
  flexDirection: "row"
}

const $backBtn: ViewStyle = {
    backgroundColor: colors.connectDeviceButton,
    padding: 8,
    borderRadius: 12,
    
} 

const $centerLogo: ViewStyle = {
  width: 120,
  height: 32
}

const $logo: ViewStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    right: 18
}

const $signIn: TextStyle = {
  marginBottom:8,
  fontSize: 36,
  lineHeight: 42,
  fontFamily: typography.fonts.nexa.bold,
  
  color: colors.blackText,
}

const $enterDetails: TextStyle = {
  marginBottom: 32,
  fontSize: 16,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.regular,
  
  color: colors.descText,
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
  paddingLeft: 48
  
}
const $buttonMain: ViewStyle = {
  position: "absolute",
  bottom: 0,
  width: '100%',
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
  fontFamily: typography.fonts.nexa.regular,
  
  color: colors.blackText,
}
const $inputOuter: ViewStyle = {
  position: "relative"
}

const $countryCode: TextStyle = {
  fontSize: 16,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.regular,
  
  color: colors.blackText,
  position: "absolute",
  // bottom: 11,
  top: 46,
  left: 22
}



const $disable: ViewStyle= {
  opacity: 0.4
}
const $enable: ViewStyle= {
  opacity: 1
}

const $cellStyle: TextStyle= {
    borderRadius: 16,
    color: colors.blackText,
    height: 76,
    width: 76,
    fontSize:18,
    marginRight:13,
    justifyContent: "flex-start",
    textAlign: "center",
    alignItems: "center",
    display:'flex',
    alignSelf: "center",
paddingHorizontal:20,
paddingVertical:25,

    // backgroundColor: 'red'
}

const $error: TextStyle = {
    color: colors.error,
    fontSize: 14,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 18,
    paddingTop: 8,

}

const $errorBorder: ViewStyle= {
  borderColor: colors.error
}

const $focusBorder: ViewStyle= {
  borderColor: colors.activeTabs,
  
}

const $otpResendTitle: TextStyle= {
  fontSize: 16,
  fontFamily: typography.fonts.nexa.regular,
  lineHeight: 18,
  
  textAlign:'center',
  color: colors.descText,
  
}

const $otpTimerContainer: ViewStyle= {
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  alignSelf:'center',
  marginTop: 42,
}

const $otpBtn: TextStyle= {
  marginTop: 42,
  fontSize: 16,
  lineHeight: 18,
  textAlign:'center',
  fontFamily: typography.fonts.nexa.bold,
  color: colors.activeTabs
}