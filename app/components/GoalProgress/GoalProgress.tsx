import { Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import React, { useMemo, useState } from "react"
import moment from "moment"
import { colors, typography } from "../../theme"
import MonthlyGoalType from "./GoalProgress"
import StraightProgressBar from "../ProgressBar/StraightProgressBar"
import { Text } from "../Text"
import { Icon } from "../Icon"

type GoalProgressProps = {
  steps?: string
  GoalMode?: string
  Reward?: string
  Component: any
  progress?: any
  MonthName?: string
  rightIcon?: string
  onpress?: any
}

const GoalProgress: React.FC<GoalProgressProps> = (
  { steps, GoalMode, Reward, Component, progress, MonthName, rightIcon, onpress },
  _props,
) => {
  const [monthName, setMonthName] = useState(MonthName)
  return (
    <View style={styles.container}>
      {MonthName && (
        <TouchableOpacity style={styles.monthNameContainer} onPress={onpress}>
          <Text text={MonthName} style={styles.monthName} />
          <Icon icon={rightIcon} />
        </TouchableOpacity>
      )}
      <View style={styles.upperContainer}>
        <View style={styles.upperSubContainer}>
          <Text tx="goalScreen.Steps" style={styles.title} />
          <Text text={steps} style={styles.subTitle} />
        </View>
        <View style={styles.upperSubContainer}>
          <Text tx="goalScreen.Goalmode" style={styles.title} />
          <Text text={GoalMode} style={styles.subTitle} />
        </View>
        <View style={styles.upperSubContainer}>
          <Text tx="goalScreen.Reward" style={styles.title} />
          <View style={{ flexDirection: "row" }}>
            <Text text={Reward} style={styles.subTitle} />
            <Text text=" xCoins" style={styles.subTitle} />
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.lowerSubContainer}>
          <Text text={progress} style={styles.percentText} />
          <Text tx="goalScreen.Monthlygoal" style={styles.monthlyGoalText} />
        </View>
        {Component}
      </View>
    </View>
  )
}
export default GoalProgress

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
    backgroundColor: colors.background,
    // backgroundColor: colors.connectDeviceButton,
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
    elevation: Platform.OS == 'android' && 3,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 4,
    shadowRadius: 7,
    borderBottomWidth: 0,
    borderWidth: 1,
    borderColor: colors.connectDeviceButton
  },
  monthNameContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    alignItems: "center",
  },
  monthName: {
    fontSize: 24,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 28,
    
    color: colors.blackText,
    // paddingTop: 8,
  },
  upperContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  upperSubContainer: {
    flex: 1,
    paddingLeft: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 14,
    
    color: colors.descText,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 14,
    
    color: colors.blackText,
    paddingTop: 8,
  },
  lowerContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  lowerSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  percentText: {
    fontSize: 20,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 22,
    color: colors.activeTabs,
  },
  monthlyGoalText: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 18,
    
    color: colors.activeTabs,
    paddingLeft: 8,
  },
})
