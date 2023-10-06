import { StyleSheet, View, ViewStyle } from "react-native"
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen, Toggle } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
interface ProfilePolicyProps extends AppStackScreenProps<"Leaderboard"> {}
export const ProfilePolicy: FC<ProfilePolicyProps> = observer(function ProfilePolicy(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const [goalMode, setGoalMode] = useState(1)
  const [userMode, setUserMode] = useState(1)
  const modeData = [
    {
      name: "moreScreen.myProfile.profileSettings.ProfilePolicyScreen.allUser",
      type: 1,
    },
    {
      name: "moreScreen.myProfile.profileSettings.ProfilePolicyScreen.Everyone",
      type: 2,
    },
    {
      name: "moreScreen.myProfile.profileSettings.ProfilePolicyScreen.organization",
      type: 3,
    },
    {
      name: "moreScreen.myProfile.profileSettings.ProfilePolicyScreen.none",
      type: 4,
    },
  ]
  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText="moreScreen.myProfile.profileSettings.profilePolicy"
      />
      <View style={styles.textContainer}>
        <Text
          tx="moreScreen.myProfile.profileSettings.ProfilePolicyScreen.policy"
          style={styles.topText}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text
          tx="moreScreen.myProfile.profileSettings.ProfilePolicyScreen.title"
          style={styles.titleText}
        />
      </View>
      <View style={styles.radioContainer}>
        {modeData.map((val) => (
          <Toggle key={val.type}
            variant="radio"
            value={val.type == goalMode ? true : false}
            labelPosition="right"
            labelTx={val.name}
            labelStyle={styles.labelStyle}
            inputWrapperStyle={styles.inputContainer}
            inputInnerStyle={styles.inputInner}
            inputOuterStyle={styles.inputOuter}
            inputDetailStyle={styles.inputActive}
            onPress={() => setGoalMode(val.type)}
          />
        ))}
      </View>
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    textContainer: {
      width: "100%",
      paddingRight: 70,
      alignItems: "center",
      alignContent: "center",
      alignSelf: "center",
    },
    topText: {
      color: colors.descText,
      fontSize: 16,
      lineHeight: 22,
      fontFamily: typography.fonts.nexa.regular,
    },
    titleContainer: {
      marginTop: 16,
    },
    titleText: {
      color: colors.blackText,
      fontSize: 18,
      lineHeight: 22,
      fontFamily: typography.fonts.nexa.bold,
    },
    radioContainer: {
      marginTop: 27,
    },
    labelStyle: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
      left: 0,
    },
    inputContainer: {
      marginVertical: 17,
    },
    inputInner: {
      // backgroundColor: colors.blue,
      borderWidth: 6,
      borderRadius: 25,
      borderColor: colors.blue,
    },
    inputOuter: {
      borderColor: colors.challangeBorder,
      backgroundColor: colors.background,
    },
    inputActive: {
      backgroundColor: colors.background,
    },
  })
}
