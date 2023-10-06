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

type GoalHistoryMonthProps = {
  navigation: any
  route: any
}
const Loader = () => {
  return (
    <View>
      <View style={styles.goalContentView}>
        <SkeletonLoader
          boneColor="#F3F3F3"
          highlightColor="#E7ECEE"
          style={{ flexDirection: "row" }}
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
      {Array.from(Array(4).keys()).map((item, index) => {return(
      <View style={styles.dateMainContainer}>
        {Array.from(Array(7).keys()).map((item, index) => {
          return(
            <View style={styles.dateContainer}>
          <View
            style={styles.roundProgressBar}
          ></View>
          <SkeletonLoader boneColor="#F3F3F3" highlightColor="#E7ECEE">
            <SkeletonLoader.Item style={loaderStyles.numberItem} />
          </SkeletonLoader>
        </View>)
        })}
       </View>)})}
       <View>
       <View style={styles.dateStreakContainer}>
        <View style={styles.onlyDateContainer}>
       {Array.from(Array(2).keys()).map((item, index) => {
          return(
            <View style={styles.dateContainer}>
          <View
            style={styles.roundProgressBar}
          ></View>
          <SkeletonLoader boneColor="#F3F3F3" highlightColor="#E7ECEE">
            <SkeletonLoader.Item style={loaderStyles.numberItem} />
          </SkeletonLoader>
        </View>)
        })}
        </View>
        <View style={styles.streakContent}>
          <Icon icon="streakSkeleton" style={styles.streakIcon}/>
          <SkeletonLoader boneColor="#F3F3F3" highlightColor="#E7ECEE">
            <SkeletonLoader.Item style={loaderStyles.streakText} />
          </SkeletonLoader>
        </View>
        </View>
        </View>

    </View>
  )
}

const GoalHistoryMonth: React.FC<GoalHistoryMonthProps> = (_props) => {
  const { navigation, route } = _props
  return (
    <Screen
      preset="auto"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={{ marginTop: 26 }}>
        <TopHeader
          leftIcon={"back"}
          rightIcon={"graph"}
          HeaderText={route.params.monthName}
          onPressLeft={() => navigation.goBack()}
          onPressRight={() => navigation.navigate(route.params.graphRoute)}
        />
        {/* Call here Skeleton Loader Conditionally */}
        <GoalProgress
          steps={route.params.monthSteps}
          GoalMode={route.params.monthMode}
          Reward={route.params.monthReward}
          progress={route.params.MonthlyReached}
          Component={
            <StraightProgressBar
              containerStyle={styles.progressBarContainer}
              filling={styles.fillingsContainer}
              progress={route.params.MonthlyReached}
            />
          }
        />
        <MonthlyCalendar containerStyle={styles.containerStyle} Streak={30} />
      </View>
    </Screen>
  )
}

export default GoalHistoryMonth

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    marginTop: 8,
    borderRadius: 16,
    paddingHorizontal: 20,
    shadowColor: colors.palette.neutral800,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 12.81,
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
    height: 130,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.palette.connectDeviceButton,
    width: "100%",
  },
  dateMainContainer: {
    flexDirection: "row",
    width:'100%',
    justifyContent:'space-between',
    marginTop: 24,
    paddingHorizontal: 19
  },
  dateContainer:{
    flexDirection:'column',
  },
  roundProgressBar:{
    height: 20,
    width: 20,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: colors.palette.challangeBorder,
    borderRadius: 60,
  },
  dateStreakContainer:{
    flexDirection: "row",
  width:'100%',
  justifyContent:'space-between',
  marginTop: 24,
  paddingHorizontal: 19},
  onlyDateContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width:'24%'

  },
  streakIcon:{
    height:24,
    width:22,
    marginTop: 8
  },
  streakContent:{
    flexDirection: "row",
  }
})
const loaderStyles = {
  goalContentItem: { height: 32, width: 60, borderRadius: 12, marginRight: 16 },
  goalStaticsMain: { marginTop: 38 },
  staticsTitle: { height: 8, width: 72, borderRadius: 16 },
  staticsBarContainer: { backgroundColor: "#F5F7F8", marginTop: 8, borderRadius: 12 },
  staticsBar: { height: 12, width: 119, borderRadius: 12 },
  numberItem: { height: 12, width: 20, borderRadius: 16, marginTop: 4 },
  streakText:{
    height:14,
    width: 97,
    borderRadius: 20,
    marginTop:15,
    marginLeft: 9
  }
}
