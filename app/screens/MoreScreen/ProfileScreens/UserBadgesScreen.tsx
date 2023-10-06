import { ScrollViewComponent, StyleSheet, View, ViewStyle, ScrollView, TouchableOpacity } from "react-native"
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../../navigators"
import useWellxStyle from "../../../utils/useWellxStyle"
import useAppConfig from "../../../utils/useAppConfig"
import { Icon, Screen, Text, TextField } from "../../../components"
import TopHeader from "../../../components/Header/TopHeader"
import CustomFlatList from "../../../components/Common/CustomFlatList"
import EmptyScreen from "../../../components/Common/EmptyScreen"

interface UserBadgesScreenProps extends AppStackScreenProps<"UserBadgesScreen"> { }
export const UserBadgesScreen: FC<UserBadgesScreenProps> = observer(function UserBadgesScreen(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const [activeTab, setActiveTab] = useState(0)

  const steps = [
    {
      icon: "badge1",
      title: "Walk 2.000 steps in a day",
    },
    {
      icon: "badgeblack1",
      title: "Walk 10.000 steps in a day",
    },
    {
      icon: "badgeblack1",
      title: "Walk 2.000 steps in a day",
    },
    {
      icon: "badgeblack1",
      title: "Walk 10.000 steps in a day",
    },
    {
      icon: "badgeblack1",
      title: "70% sleep score in a week ",
    },
  ]
  const SleepScore = [
    {
      icon: "badge2",
      title: "Walk 2.000 steps in a day",
    },
    {
      icon: "badgeblack2",
      title: "Walk 10.000 steps in a day",
    },
    {
      icon: "badgeblack2",
      title: "Walk 2.000 steps in a day",
    },
    {
      icon: "badgeblack2",
      title: "Walk 10.000 steps in a day",
    },
    {
      icon: "badgeblack2",
      title: "70% sleep score in a week ",
    },
  ]

  const GoodJob = [
    {
      icon: "badge4",
      title: "Walk 2.000 steps in a day",
    },
    {
      icon: "badgeblack3",
      title: "Walk 10.000 steps in a day",
    },
    {
      icon: "badgeblack3",
      title: "Walk 2.000 steps in a day",
    },
    {
      icon: "badgeblack3",
      title: "Walk 10.000 steps in a day",
    },
    {
      icon: "badgeblack3",
      title: "70% sleep score in a week ",
    },
  ]

  

  

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        customStyle={styles.customHeaderContainer}
        onPressLeft={() => _props.navigation.goBack()}
        centerText="moreScreen.myProfile.BadgesScreen.pageTitle"
      />

     <View style={styles.badgesContainer}>
        <View style={styles.TitleContainer}>
          <Text tx="moreScreen.myProfile.BadgesScreen.Steps" style={styles.statisticsTitle} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {steps.map((val, index) => (
            <TouchableOpacity
              style={styles.badgeContainer}
              onPress={() => alert(index)}
              key={index}
            >
              <Icon icon={val.icon} style={styles.badgeIcon} />
              <Text text={val.title} style={styles.badgeTitle} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.badgesContainer}>
        <View style={styles.TitleContainer}>
          <Text tx="moreScreen.myProfile.BadgesScreen.SleepScore" style={styles.statisticsTitle} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {SleepScore.map((val, index) => (
            <TouchableOpacity
              style={styles.badgeContainer}
              onPress={() => alert(index)}
              key={index}
            >
              <Icon icon={val.icon} style={styles.badgeIcon} />
              <Text text={val.title} style={styles.badgeTitle} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.badgesContainer}>
        <View style={styles.TitleContainer}>
          <Text tx="moreScreen.myProfile.BadgesScreen.GoodJob" style={styles.statisticsTitle} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {GoodJob.map((val, index) => (
            <TouchableOpacity
              style={styles.badgeContainer}
              onPress={() => alert(index)}
              key={index}
            >
              <Icon icon={val.icon} style={styles.badgeIcon} />
              <Text text={val.title} style={styles.badgeTitle} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
     

    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  return StyleSheet.create({
    container: {
      marginTop: 23,
      paddingHorizontal: 16,
    },
    customHeaderContainer:{
marginBottom:0,
    },
    badgesContainer: {
      marginTop: 34,
    },
    TitleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    statisticsTitle: {
      fontSize: 24,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 28,
      color: colors.blackText,
    },
    badgeContainer: {
      marginTop: 36,
      maxWidth: 180,
      alignItems: "center",
      marginRight:16,
    },
    badgeIcon: {
      height: 130,
      width: 130,
    },
    badgeTitle: {
      marginTop: 15,
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
      textAlign: "center",
      maxWidth: "80%",
    },

   

  })
}
