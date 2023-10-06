import React, { FC, ReactElement, useEffect, useRef, useState } from "react"
import {
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
// import { useSharedValue } from "react-native-reanimated"
// import { SafeAreaView } from "react-native-safe-area-context"
import { isRTL } from "../../i18n"
import { Icon, Screen, Text } from "../../components"
import { colors, spacing, typography } from "../../theme"
import { GradientCircularProgress } from "react-native-circular-gradient-progress"

import { MainBottomTabScreenProps } from "../../navigators/MainBottomTabNavigator"
import EmptyScreen from "../../components/Common/EmptyScreen"
import RunningGoals from "./RunningGoals"

export const GoalsScreen: FC<MainBottomTabScreenProps<"GoalsScreen">> = function GoalsScreen(
  _props,
) {
  const [currentMonthGoal, setCurrentMonthGoal] = useState(1)

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <View style={$subContainer}>
        <View>
          <Text preset="heading" tx="goalsScreen.title" style={$title} />
        </View>
        <TouchableOpacity style={$button} onPress={() => _props.navigation.navigate("GoalHistory")}>
          <Icon icon="history" style={$historyButtonIcon} />
          <Text text={"History"} style={$historyButtonText} />
        </TouchableOpacity>
      </View>
      {currentMonthGoal == null ? (
        <EmptyScreen
          prop={_props}
          Icon={"rocket"}
          title={"goalNotSet.heading"}
          subTittle={"goalNotSet.subHeading"}
          Button={"goalNotSet.buttonText"}
          onpressBtn={() => _props.navigation.navigate("NewGoal")}
          btnType={"primary"}
        />
      ) : (
        <RunningGoals prop={_props} />
      )}
    </Screen>
  )
}

const $container: ViewStyle = {
  marginTop: 12,
  marginHorizontal: 16,
  flex: 1,
}
const $subContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}
const $title: TextStyle = {
  fontSize: 36,
  fontFamily: typography.fonts.nexa.bold,
  lineHeight: 42,
  // 
  color: colors.blackText,
}
const $button: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  paddingHorizontal: 20,
  paddingVertical: 12,
  borderRadius: 12,
  backgroundColor: colors.connectDeviceButton,
}
const $historyButtonText: TextStyle = {
  paddingLeft: 8,
  fontSize: 14,
  fontFamily: typography.fonts.nexa.regular,
  lineHeight: 18,
  
  color: colors.blackText,
}

const $historyButtonIcon: ImageStyle = {
  width: 16,
  height: 16,
}
