import { StyleSheet, View } from "react-native"
import React from "react"
import { colors, typography } from "../../theme"
import NextMonthGoal from "./NextMonthGoal"
import StraightProgressBar from "../../components/ProgressBar/StraightProgressBar"
import GoalProgress from "../../components/GoalProgress/GoalProgress"

export default function MonthlyGoalType(prop) {
  return (
    <View>
      <GoalProgress
        steps={"50"}
        GoalMode={"Medium"}
        Reward={"1500"}
        progress={"57%"}
        Component={
          <StraightProgressBar
            containerStyle={styles.progressBarContainer}
            filling={styles.fillingsContainer}
            progress={"57%"}
          />
        }
      />
      <View style={styles.nextmonthContainer}>
        <NextMonthGoal prop={prop.prop}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 12,
    backgroundColor: colors.connectDeviceButton,
    borderRadius: 12,
    marginTop: 8,
  },
  fillingsContainer: {
    height: 12,
    backgroundColor: colors.red,
    borderRadius: 12,
  },
  nextmonthContainer: {
    borderTopWidth: 1,
    borderColor: colors.challangeBorder,
  },
})
