import React, { FC, ReactElement, useEffect, useRef, useState } from "react"
import { ImageStyle, Platform, ScrollView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text } from "../../components"
import { colors, typography } from "../../theme"

import { MainBottomTabScreenProps } from "../../navigators/MainBottomTabNavigator"
import { useStores } from "../../models"
import TopHeader from "../../components/Header/TopHeader"

export const MoreScreen: FC<MainBottomTabScreenProps<"MoreScreen">> = function MoreScreen(_props) {
  const {
    authenticationStore: { logout },
  } = useStores()

  const tabData = [
    {
      leftIcon: "myProfile",
      tittle: "moreScreen.myProfile.title",
      rightIcon: "rightArrowBig",
      routeName: "myProfile",
      id:1
    },
    {
      leftIcon: "myInsurance",
      tittle: "moreScreen.myInsurance.title",
      rightIcon: "rightArrowBig",
      routeName: "myInsurance",
      id:2
    },
    {
      leftIcon: "myWallet",
      tittle: "moreScreen.myWallet.title",
      rightIcon: "rightArrowBig",
      routeName: "Wallet",
      id:3
    },
    {
      leftIcon: "myChallenges",
      tittle: "moreScreen.myChallenges.title",
      rightIcon: "rightArrowBig",
      routeName: "myChallenges",
      id:4
    },
    {
      leftIcon: "devices",
      tittle: "moreScreen.Devices.title",
      rightIcon: "rightArrowBig",
      routeName: "deviceList",
      id:5
    },
    {
      leftIcon: "support",
      tittle: "moreScreen.Support.title",
      rightIcon: "rightArrowBig",
      routeName: "support",
      id:6
    },
    {
      leftIcon: "setting",
      tittle: "moreScreen.Settings.title",
      rightIcon: "rightArrowBig",
      routeName: "setting",
      id:7
    },
  ]

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top", "bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TopHeader leftTitle={"moreScreen.title"} />
        </View>
        {tabData.map((val : any) => (
          <TouchableOpacity
            style={$tabContainer} key={val.id}
            onPress={() => _props.navigation.navigate(val?.routeName)}>
            <View style={$leftContainer}>
              <View style={$IconContainer}>
                <Icon icon={val.leftIcon} style={$leftIcon} />
              </View>
              <View>
                <Text tx={val.tittle} style={$title} />
              </View>
            </View>
            <View style={$RightIconContainer}>
              <Icon icon={val.rightIcon} style={$rightIcon} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingHorizontal: 16,
  marginTop: 20,
  flex: 1,
}
const $tabContainer: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 20,
  paddingHorizontal: 16,
  marginBottom: 8,
  borderRadius: 16,
  width: "100%",
  shadowColor: Platform.OS == 'ios' && '#E0E9E0',
  elevation: Platform.OS == 'android' && 3,
  backgroundColor:colors.background,
  shadowOpacity: 0.5,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 16,
  // elevation:1,
  borderWidth: 1,
  borderColor: colors.challangeBorder,
}
const $title: TextStyle = {
  fontSize: 16,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.regular,
  color: colors.blackText,
  marginLeft: 12,
}
const $leftContainer: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
}
const $IconContainer: ViewStyle = {
  maxHeight: 40,
  maxWidth: 40,
}
const $leftIcon: ImageStyle = {
  maxHeight: 40,
  maxWidth: 40,
}
const $RightIconContainer: ViewStyle = {
  maxHeight: 14,
  maxWidth: 7.17,
}
const $rightIcon: ImageStyle = {
  maxHeight: 14,
  maxWidth: 7.17,
}
