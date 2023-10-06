import { Platform, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import CustomFlatList from "../../components/Common/CustomFlatList"
import { AnyObject } from "yup/lib/types"
interface MyOrganizationProps extends AppStackScreenProps<"MyOrganization"> {}
export const MyOrganization: FC<MyOrganizationProps> = observer(function MyOrganization(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)

  const departmentData = [
    {
      title: "UX/UI designers",
      subTitle: "12 members",
      route:'designers'
    },
    {
      title: "Developers",
      subTitle: "36 members",
      route:'Developers'

    },
    {
      title: "PMs",
      subTitle: "27 members",
      route:'PMs'

    },
  ]
  const [members, setMembers] = useState([
    {
      leftIcon: "userProfile",
      tittle: "Abdul Floyd",
      subTittle: "@abdulfloyd",
      follow: false,
    },
    {
      leftIcon: "userProfile",
      tittle: "Abdul Floyd",
      subTittle: "@abdulfloyd",
      follow: true,
    },
    {
      leftIcon: "userProfile",
      tittle: "Abdul Floyd",
      subTittle: "@abdulfloyd",
      follow: false,
    },
  ])

  const handleChange = (i, val) => {
    let newTabData = [...members]
    newTabData[i].follow = !val
    setMembers(newTabData)
  }

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText="moreScreen.myProfile.myOrganization.title"
        customStyle={{marginTop: 12}}
      />

      <View style={styles.ButtonContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.IconContainer}>
            <Icon icon={"googleLogo"} style={styles.leftIcon} />
          </View>
          <View>
            <Text text={"Google Inc."} style={styles.title} />
          </View>
        </View>
      </View>

      {/* =============================== */}

      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <View style={styles.upperInnerContainer}>
            <Icon icon="crown" style={styles.crownIcon} />
            <Icon icon="rightArrowBig" style={styles.rightArrow} />
          </View>
          <View style={styles.lowerInnerContainer}>
            <Text
              tx="moreScreen.myProfile.myOrganization.leaderboard"
              style={styles.leaderBoardTitle}
            />
            <Text
              tx="moreScreen.myProfile.myOrganization.subTitleLeaderboard"
              style={styles.leaderBoardSubTitle}
            />
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.upperInnerContainer}>
            <Icon icon="myChallenges" style={styles.crownIcon} />
            <Icon icon="rightArrowBig" style={styles.rightArrow} />
          </View>
          <View style={styles.lowerInnerContainer}>
            <Text
              tx="moreScreen.myProfile.myOrganization.challenges"
              style={styles.leaderBoardTitle}
            />
            <Text
              tx="moreScreen.myProfile.myOrganization.subTitlechallenges"
              style={styles.leaderBoardSubTitle}
            />
          </View>
        </View>
      </View>

      {/* =================DEPARTMENT================= */}

      <View style={styles.departmentContainer}>
        <Text text={"Depatments"} style={styles.departmentHeader} />

        {departmentData.map((value:any, index) => (
          <TouchableOpacity style={[styles.ButtonContainer, { marginTop: 16 }]} key={value.route}
          onPress={() => _props.navigation.navigate('UsersList',value )}>
            <View style={styles.leftContainer}>
              <View>
                <Text text={value.title} style={styles.titleDepartment} />
                <Text text={value.subTitle} style={styles.subTitleDepartment} />
              </View>
            </View>
            <View style={styles.RightIconContainer}>
              <Icon icon={"rightArrowBig"} style={styles.rightIcon} color={colors.activeTabs} />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* ================Members============== */}

      <View style={styles.departmentContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text text={"Members"} style={styles.departmentHeader} />
          <TouchableOpacity>
            <Text text={"View All"} style={styles.seeAll} />
          </TouchableOpacity>
        </View>
        <CustomFlatList data={members} type="users" rightClick={handleChange} />
      </View>
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      // paddingTop: spacing.large + spacing.extraLarge,
      paddingHorizontal: spacing.medium,
    },
    ButtonContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 22,
      paddingHorizontal: 25,
      borderRadius: 16,
      width: "100%",
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
      elevation: Platform.OS == 'android' && 3,
      shadowOpacity: 0.06,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 16,
      backgroundColor:colors.background,
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
    mainContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
    },
    subContainer: {
      width: "48%",
      borderWidth: 1,
      borderRadius: 16,
      paddingVertical: 16,
      borderColor: colors.challangeBorder,
    },
    upperInnerContainer: {
      paddingLeft: 14,
      paddingRight: 21,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: 20,
    },
    lowerInnerContainer: {
      paddingHorizontal: 14,
    },
    leaderBoardTitle: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 16,
      color: colors.blackText,
      paddingBottom: 4,
    },
    leaderBoardSubTitle: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 18,
      color: colors.descText,
    },
    crownIcon: {
      width: 32,
      height: 32,
    },
    rightArrow: {
      width: 7,
      height: 14,
    },

    // Department CSS

    departmentContainer: {
      marginTop: 24,
    },
    departmentHeader: {
      fontSize: 24,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 28,
      color: colors.blackText,
      paddingBottom: 4,
    },
    subTitleDepartment: {
      paddingTop: 6,
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.descText,
    },
    titleDepartment: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
    },
    seeAll: {
      color: colors.activeTabs,
      fontSize: 16,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 18,
    },
  })
}
