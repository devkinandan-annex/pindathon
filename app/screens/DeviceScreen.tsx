import { LinearGradient } from "expo-linear-gradient"
import { observer } from "mobx-react-lite"
import React, {
  FC,
} from "react"
import { Image, ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"

import {
  Button,
  Header,
  Icon,
  Screen,
  Text,
} from "../components"
import WellxBtn from "../components/Buttons/WellxBtn"
import TopHeader from "../components/Header/TopHeader"

import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"

interface DeviceScreenProps extends AppStackScreenProps<"Device"> {}

export const DeviceScreen: FC<DeviceScreenProps> = observer(function DeviceScreen(
  _props,
) {
 
  const { navigation } = _props
  // const {
  //   authenticationStore: { logout },
  // } = useStores()


  const devices = [
    {
      icon: 'apple',
      title: 'deviceScreen.apple'
    },
    {
      icon: 'google',
      title: 'deviceScreen.googleFit'
    },
    {
      icon: 'fitbit',
      title: 'deviceScreen.fitbit'
    },
    {
      icon: 'whoop',
      title: 'deviceScreen.whoop'
    },
  ]

  function goNext() {
    navigation.navigate("MainTab", { screen: "NewsfeedScreen" })
  }

  function pressSkip() {
    navigation.navigate("MainTab", { screen: "NewsfeedScreen" })
  }
  function deviceConnected() {
    navigation.navigate("OnboardingScreen")
    
  }


  

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$container}
      safeAreaEdges={["top", "bottom"]}
    >
      
      <TopHeader 
        leftIcon="back" 
        onPressLeft={() => _props.navigation.goBack} 
        centerIcon="wellxLogo" 
        rightText="deviceScreen.skip"
        onPressRight={() => pressSkip()}
        centerIconStyle={$centerLogo}
      />

      <Text testID="login-heading" tx="deviceScreen.heading" preset="heading" style={$pageHeading} />
      <Text tx="deviceScreen.details" preset="subheading" style={$pageDesc} />
      <View style={$deviceContainer}> 
        {devices.map((item, index) =>         
          <TouchableOpacity style={$deviceBtn} key={item.icon}>
            <Icon icon={item.icon} style={$deviceBtnIcon} />
            <Text tx={item.title} style={$deviceBtnText} />
          </TouchableOpacity>
        )}                                                                
      </View>      
      <WellxBtn 
        title="deviceScreen.btntext" 
        onPress={deviceConnected} 
        btnType="primary" 
        customStyle={{position: 'absolute', bottom: 16}} 
      />

    </Screen>
  )
})

const $container: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.large,
  flex: 1,
}


  const $centerLogo: ViewStyle = {
    width: 120,
    height: 32
  }
  const $pageHeading: TextStyle = {
    marginBottom: 8,
    fontSize: 36,
    lineHeight: 42,
    fontFamily: typography.fonts.nexa.bold,
    // 
    color: colors.blackText,
    marginTop: 44
  }
  const $pageDesc: TextStyle = {
    marginBottom: 24,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: typography.fonts.nexa.regular,
    
    color: colors.descText,
  }
  const $deviceContainer: ViewStyle = {
    marginTop: 40
  }
  const $deviceBtn: ViewStyle = {
    backgroundColor: colors.connectDeviceButton,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 16,
    marginBottom: 16,
    height:54,
    paddingHorizontal:24,
    paddingVertical: 16

  }
  const $deviceBtnText: TextStyle = {
    fontSize: 16,
    lineHeight: 18,
    
    fontFamily: typography.fonts.nexa.bold

  }
  const $deviceBtnIcon: ViewStyle = {
    marginRight:12,
    height:24,
    width:24,
  }

  
  
  

  

