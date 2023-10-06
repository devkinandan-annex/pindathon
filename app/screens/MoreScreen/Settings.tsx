import { StyleSheet, View, ViewStyle } from "react-native"
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import CustomFlatList from "../../components/Common/CustomFlatList"
interface SettingsProps extends AppStackScreenProps<"support"> {}
export const Settings: FC<SettingsProps> = observer(function Settings(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)

  const dummyArray = [
  
    {
      leftIcon: "Notifications",
      tittle: "moreScreen.Settings.Notifications",
      rightIcon: "rightArrow",
      routeName: "SettingsNotificationsScreen",     
    },  
    {
      leftIcon: "Faq",
      tittle: "moreScreen.Settings.FAQ",
      rightIcon: "rightArrow",
      routeName: "SettingsFAQScreen",
    },  
    {
      leftIcon: "profilePolicy",
      tittle: "moreScreen.Settings.privacyPolicy",
      rightIcon: "rightArrow",
      routeName: "SettingsPrivacyScreen",
    },  
    {
      leftIcon: "documentsIcon",
      tittle: "moreScreen.Settings.TermsUse",
      rightIcon: "rightArrow",
      routeName: "SettingsTermsScreen",
    },  
    {
      leftIcon: "Feedback",
      tittle: "moreScreen.Settings.feedbackAbout",
      rightIcon: "rightArrow",
      routeName: "SettingsFeedbackAppScreen",
    },  
]

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText={"moreScreen.Settings.title"}
      />

<CustomFlatList data={dummyArray} type="btn"  onpress={_props.navigation.navigate} />

    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginTop:23,
    },
  })
}
