import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useMemo, useState } from "react"
import moment from "moment"
import { colors, typography } from "../../theme"
import { Icon, Screen } from "../../components"
import GoalProgress from "../../components/GoalProgress/GoalProgress"
import StraightProgressBar from "../../components/ProgressBar/StraightProgressBar"
import TopHeader from "../../components/Header/TopHeader"
import MonthlyCalendar from "./MonthlyCalendar"
import SkeletonLoader from "expo-skeleton-loader"

type GoalHistoryProps = {
  navigation: any
}
const Loader = () => {
  return (
    <View style={styles.goalContentView}>
      <View>
        <SkeletonLoader
          boneColor="#F3F3F3"
          highlightColor="#E7ECEE"
          // @ts-ignore
          style={loaderStyles.monthWrapper}
        >
          <SkeletonLoader.Item style={loaderStyles.monthTitle} />
          <SkeletonLoader.Item style={loaderStyles.monthIcon} />
        </SkeletonLoader>
      </View>
      <View>
        <SkeletonLoader
          boneColor="#F3F3F3"
          highlightColor="#E7ECEE"
          // @ts-ignore
          style={loaderStyles.staticsWrapper}
        >
          <SkeletonLoader.Item style={loaderStyles.goalContentItem} />
          <SkeletonLoader.Item style={loaderStyles.goalContentItem} />
          <SkeletonLoader.Item style={loaderStyles.goalContentItem} />
        </SkeletonLoader>
        <SkeletonLoader
          boneColor="#F3F3F3"
          highlightColor="#E7ECEE"
          style={loaderStyles.goalStaticsMain}
        >
          <SkeletonLoader.Item style={loaderStyles.staticsTitle} />
          <SkeletonLoader.Container style={loaderStyles.staticsBarContainer}>
            <SkeletonLoader.Item style={loaderStyles.staticsBar} />
          </SkeletonLoader.Container>
        </SkeletonLoader>
      </View>
    </View>
  )
}
const GoalHistory: React.FC<GoalHistoryProps> = ({ navigation }) => {
  const HistoryData = [
    {
      monthName: "October",
      monthSteps: "80",
      monthMode: "Hard",
      monthReward: "5500",
      MonthlyReached: "50%",
      id:1,
      graphRoute:'Activity'
    },
    {
      monthName: "November",
      monthSteps: "70",
      monthMode: "Medium",
      monthReward: "5500",
      MonthlyReached: "80%",
      id:2,
      graphRoute:'Activity'
    },
    {
      monthName: "December",
      monthSteps: "50",
      monthMode: "Hard",
      monthReward: "5500",
      MonthlyReached: "30%",
      id:3,
      graphRoute:'Activity'
    },
  ]

  return (
    <Screen
      preset="auto"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top", "bottom"]}
    >
     
        <TopHeader
          leftIcon={"back"}
          centerText={"goalScreen.History"}
          onPressLeft={() => navigation.goBack()}
          customStyle={{marginTop: 12}}
        />
     
      {/* Call here Skeleton Loader conditionally 
        {Array.from(Array(4).keys()).map((item, index) => {
          return <Loader />
        })} */}
      {HistoryData.map((val, index) => (
        <GoalProgress 
          key={val.id}
          steps={val.monthSteps}
          GoalMode={val.monthMode}
          Reward={val.monthReward}
          progress={val.MonthlyReached}
          MonthName={val.monthName}
          rightIcon={"caretRight"}
          onpress={() => navigation.navigate("GoalHistoryMonth", val)}
          Component={
            <StraightProgressBar
              containerStyle={styles.progressBarContainer}
              filling={styles.fillingsContainer}
              progress={val.MonthlyReached}
            />
          }
        />
      ))}
    </Screen>
  )
}

export default GoalHistory

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
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

  goalContentView: {
    height: 182,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.palette.connectDeviceButton,
    width: "100%",
  },
})
const loaderStyles = {
  goalContentItem: { height: 32, width: 60, borderRadius: 12, marginRight: 20 },
  goalStaticsMain: { marginTop: 20 },
  staticsTitle: { height: 8, width: 72, borderRadius: 16 },
  staticsBarContainer: { backgroundColor: "#F5F7F8", marginTop: 8, borderRadius: 12 },
  staticsBar: { height: 12, width: 119, borderRadius: 12 },
  monthWrapper: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  monthTitle: { width: 80, height: 24, borderRadius: 8 },
  monthIcon: { width: 24, height: 24, borderRadius: 4 },
  staticsWrapper: { flexDirection: "row", marginTop: 46 },
}
