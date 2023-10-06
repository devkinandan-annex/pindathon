import {
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import { UserProfileFrame } from "../../components/Common/UserProfileFrame"
import WellxBtn from "../../components/Buttons/WellxBtn"
import { LinearGradient } from "expo-linear-gradient"
import EmptyScreen from "../../components/Common/EmptyScreen"
import { ProfileAvatarWeb } from "./ProfileAvatarWeb"
interface ProfileProps extends AppStackScreenProps<"myProfile"> {}
export const Profile: FC<ProfileProps> = observer(function Profile(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme

  const styles = getLocalStyle(theme)
  const [profileLevel, setUserProfileLeve] = useState(5)
  //Change below line in case when profile is of self user or another user.
  const [isUserSelf, setIsUserSelf] = useState(true)
  //Change below line in case when user is following another profile or not.
  const [isFollow, setIsFollow] = useState(true)
  //Add here the logic to show another user profile or not to user.
  const [showProfile, setShowProfile] = useState(false)
  let userLvl = `lvl${profileLevel}`

  const [Plan, setPlan] = useState("Pro")

  const badges = [
    {
      icon: "badge1",
      title: "Walk 2.000 steps in a day",
    },
    {
      icon: "badge2",
      title: "70% sleep score in a week",
    },
    {
      icon: "badge3",
      title: "Challenging every day",
    },
    {
      icon: "badge1",
      title: "Walk 2.000 steps in a day",
    },
    {
      icon: "badge2",
      title: "70% sleep score in a week ",
    },
  ]
  const goToSettings = () => {
    _props.navigation.navigate("ProfileSettings")
  }
  // const changeProfileAvatar = () => {
  //   _props.navigation.navigate('ProfileAvatarWeb')
  // }
  useEffect(() => {
   if(_props.route.params){
    //@ts-ignore
    setIsUserSelf(_props.route.params.isUserSelf),
     //@ts-ignore
    setUserProfileLeve(_props.route.params.profileLevel)
     //@ts-ignore
    setShowProfile(_props.route.params.showProfile)
   }
  }, [_props])
  
  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <View style={{ marginTop: 10 }}>
        <TopHeader
          leftIcon="back"
          onPressLeft={() => _props.navigation.goBack()}
          centerText={isUserSelf? "moreScreen.myProfile.title": "moreScreen.myProfile.title1"}
          rightIcon={isUserSelf &&"settingIcon"}
          onPressRight={isUserSelf && goToSettings}
        />
      </View>

      <View style={{ flexDirection: "column" }}>
        <UserProfileFrame
          type={"big"}
          navigation={undefined}
          route={undefined}
          userImage="avtar1"
          userLevel={1}
          // onpress={changeProfileAvatar}
        />
        <View style={styles.userNameContainer}>
          <Text text={"Mohamed Samy"} style={styles.name} />
          <Text text={"@mohamedsamy"} style={styles.userName} />
        </View>
      </View>

      {/* ++++++++++++++++++FOLLOW++++++++++++++++++++++++ */}

      <View style={styles.followContainer}>
        <TouchableOpacity
          style={styles.followersContainer}
          onPress={() => _props.navigation.navigate("FollowersScreen")}
        >
          <Text tx="moreScreen.myProfile.Followers" style={styles.followText} />
          <Text text="1.234" style={styles.followCount} />
        </TouchableOpacity>
        <View
          style={{
            width: 1,
            height: 44,
            backgroundColor: colors.challangeBorder,
            alignSelf: "center",
          }}
        ></View>
        <TouchableOpacity
          style={styles.followingContainer}
          onPress={() => _props.navigation.navigate("FollowingScreen")}
        >
          <Text tx="moreScreen.myProfile.Following" style={styles.followText} />
          <Text text="12" style={styles.followCount} />
        </TouchableOpacity>
      </View>
      {!isUserSelf && (
        <>
          <TouchableOpacity
            style={[
              styles.followBtnMain,
              isFollow && { backgroundColor: colors.palette.connectDeviceButton },
            ]}
            onPress={() => setIsFollow(!isFollow)}
          >
            <Text
              text={isFollow ? "Unfollow" : "Follow"}
              style={[styles.followBtnText, isFollow && { color: colors.activeTabs }]}
            />
          </TouchableOpacity>
          {isFollow && (
            <TouchableOpacity style={styles.gradientBtnWrapper}>
              <LinearGradient
                start={[0, 0.0]}
                end={[1.0, 1.0]}
                colors={["#4639EA", "#ED3683"]}
                style={styles.changeGoalButton}
              >
                <Icon icon="goal" style={styles.goalIcon} />
                <Text tx="CallForChallenge.challengeBtn" style={styles.gradientBtnText} />
              </LinearGradient>
            </TouchableOpacity>
          )}
        </>
      )}
      {/* ++++++++++++++++++MyStatics++++++++++++++++++++++++ */}

     {isUserSelf || (showProfile && !isUserSelf) ? <><View style={styles.myStatisticsContainer}>
        <View style={styles.TitleContainer}>
          <View>
            <Text
              tx={isUserSelf ? "moreScreen.myProfile.myStatistics" : "moreScreen.myProfile.statistics"}
              style={styles.statisticsTitle}
            />
          </View>

          <TouchableOpacity onPress={() => _props.navigation.navigate("MyStatisticsScreen")}>
            <Text tx="moreScreen.myProfile.viewAll" style={styles.viewAllText} />
          </TouchableOpacity>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.leftInnerContainer}>
            <Text tx="moreScreen.myProfile.avgStep" style={styles.avgText} />
            <Text text="4.842" style={styles.avgCount} />
          </View>
          <View style={styles.rightInnerContainer}>
            <Text tx="moreScreen.myProfile.avgSleep" style={styles.avgText} />
            <Text text="82%" style={styles.avgCount} />
          </View>
        </View>
      </View>

      {/* ++++++++++++++++++Cummunity Level++++++++++++++++++++++++ */}

      <TouchableOpacity
        style={styles.communityBtnContainer}
        onPress={() => _props.navigation.navigate("Communitylevels")}
      >
        <View style={styles.upperContainer}>
          <Text tx="moreScreen.myProfile.communityBtnTitle" style={styles.communityTitle} />
          <Icon icon="rightArrowBig" style={styles.communityRightIcon} />
        </View>
        <View style={styles.lowerContainer}>
          <Icon icon="levelsIcon" style={styles.levelIcon} />
          <Text text="200.000 steps / 250 hours of sleep" style={styles.communitySubTitle} />
        </View>
      </TouchableOpacity>

      {/* ++++++++++++++++++badges++++++++++++++++++++++++ */}

      <View style={styles.badgesContainer}>
        <View style={styles.TitleContainer}>
          <Text tx="moreScreen.myProfile.badges" style={styles.statisticsTitle} />
          <TouchableOpacity onPress={()=>_props.navigation.navigate('UserBadgesScreen')}>
            <Text tx="moreScreen.myProfile.viewAll" style={styles.viewAllText} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {badges.map((val, index) => (
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

      {/* ++++++++++++++++++ MY-PLAN ++++++++++++++++++++++++ */}

      <View style={styles.myStatisticsContainer}>
        <View style={styles.TitleContainer}>
          <Text
            tx={isUserSelf ? "moreScreen.myProfile.myPlan" : "moreScreen.myProfile.insurancePlan"}
            style={styles.statisticsTitle}
          />
        </View>
        <View style={styles.wellxPlanContainer}>
          {Plan == "Regular" && <Icon icon="wellxPlan" style={styles.wellxPlanIcon} />}
          {Plan == "Plus" && <Icon icon="wellxPlusPlan" style={styles.wellxPlanIcon} />}
          {Plan == "Pro" && <Icon icon="wellxProPlan" style={styles.wellxPlanIcon} />}
        </View>
      </View>

      {/* ++++++++++++++++++ My organization ++++++++++++++++++++++++ */}

      <View style={styles.myStatisticsContainer}>
        <View style={styles.TitleContainer}>
          <Text
            tx={
              isUserSelf
                ? "moreScreen.myProfile.myOrganization.title"
                : "moreScreen.myProfile.myOrganization.titleAnotherUser"
            }
            style={styles.statisticsTitle}
          />
        </View>
        <View style={styles.wellxPlanContainer}>
          <TouchableOpacity
            style={styles.ButtonContainer}
            onPress={() => _props.navigation.navigate("MyOrganization")}
          >
            <View style={styles.leftContainer}>
              <View style={styles.IconContainer}>
                <Icon icon={"googleLogo"} style={styles.leftIcon} />
              </View>
              <View>
                <Text text={"Google Inc."} style={styles.title} />
              </View>
            </View>
            <View style={styles.RightIconContainer}>
              <Icon icon={"rightArrowBig"} style={styles.rightIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View></> :<EmptyScreen Icon="privateProfileIcon" customStyle={{marginTop: 68}} title="moreScreen.myProfile.privateProfileText" heading={styles.heading}/>}
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    userNameContainer: {
      marginTop: 12,
      alignContent: "center",
      alignSelf: "center",
    },
    name: {
      fontSize: 18,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 22,
      //   
      color: colors.blackText,
    },
    userName: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.normal,
      lineHeight: 18,
      
      color: colors.blackText,
      alignSelf: "center",
    },
    followContainer: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-around",
      marginTop: 24,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
    },
    followersContainer: {
      alignItems: "center",
      paddingVertical: 16,
      width: "50%",
    },
    followText: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 18,
      color: colors.blackText,
    },
    followCount: {
      fontSize: 16,
      marginTop: 8,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 18,
      color: colors.activeTabs,
    },
    followingContainer: {
      alignItems: "center",
      paddingVertical: 16,
      width: "50%",
    },
    followBtnMain: {
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.activeTabs,
      borderRadius: 12,
      marginTop: 16,
    },
    followBtnText: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 14,
      color: colors.palette.neutral100,
    },
    changeGoalButton: {
      borderRadius: 12,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
    },
    gradientBtnText: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 14,
      color: colors.palette.neutral100,
      marginLeft: 8,
    },
    gradientBtnWrapper:{ height: 40, marginTop: 16 },
    goalIcon: { height: 16, width: 16 },
    heading:{
      fontSize: 20,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 22,
      color: colors.blackText,
      marginTop: 46
    },
    myStatisticsContainer: {
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
      // fontWeight:'bold',
      lineHeight: 28,
      color: colors.blackText,
    },
    viewAllText: {
      fontSize: 16,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 18,
      color: colors.activeTabs,
    },
    innerContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      flex: 1,
      alignItems: "center",
      alignSelf: "center",

      marginTop: 30,
    },
    leftInnerContainer: {
      width: "48%",
      paddingLeft: 14,
      marginRight: 11,
      borderColor: colors.challangeBorder,
      borderWidth: 1,
      borderRadius: 16,
    },
    rightInnerContainer: {
      width: "48%",
      paddingLeft: 14,
      borderColor: colors.challangeBorder,
      borderWidth: 1,
      borderRadius: 16,
    },
    avgText: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      paddingTop: 20,
      color: colors.descText,
    },
    avgCount: {
      paddingTop: 28,
      fontSize: 28,
      lineHeight: 32,
      fontFamily: typography.fonts.nexa.bold,
      color: colors.blackText,
      paddingBottom: 15,
    },
    communityBtnContainer: {
      marginTop: 12,
      flexDirection: "column",
      flex: 1,
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
    },
    upperContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    lowerContainer: {
      paddingTop: 17,
      alignItems: "center",
      flexDirection: "row",
    },
    communityTitle: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.descText,
    },
    communityRightIcon: {
      height: 12,
      width: 6,
    },
    levelIcon: {
      height: 78,
      width: 78,
    },
    communitySubTitle: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
    },
    badgesContainer: {
      marginTop: 34,
    },
    badgeContainer: {
      marginTop: 36,
      maxWidth: 140,
      alignItems: "center",
    },
    badgeTitle: {
      marginTop: 15,
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
      textAlign: "center",
      maxWidth: "90%",
    },
    badgeIcon: {
      height: 90,
      width: 90,
    },
    wellxPlanContainer: {
      marginTop: 16,
      marginBottom: 24,
      width: "100%",
      height: "100%",
      flex: 1,
    },
    wellxPlanIcon: {
      width: "100%",
      height: 63,
      borderRadius: 16,
      overflow: "hidden",
    },
    ButtonContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 25,
      paddingHorizontal: 25,
      borderRadius: 16,
      width: "100%",
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
      elevation: Platform.OS == 'android' && 3,
      shadowOpacity: 0.06,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 16,
      backgroundColor:colors.background,
      // elevation:1,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
    },
    title: {
      fontSize: 16,
      lineHeight: 22,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
      marginLeft: 12,
    },
    leftContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
    },
    IconContainer: {
      maxHeight: 40,
      maxWidth: 40,
    },
    leftIcon: {
      maxHeight: 40,
      maxWidth: 40,
    },
    RightIconContainer: {
      maxHeight: 14,
      maxWidth: 7.17,
    },
    rightIcon: {
      maxHeight: 14,
      maxWidth: 7.17,
    },
  })
}
