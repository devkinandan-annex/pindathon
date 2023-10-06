import { StyleSheet, View, ViewStyle } from "react-native"
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import CustomFlatList from "../../components/Common/CustomFlatList"
interface SettingsPrivacyScreenProps extends AppStackScreenProps<"support"> { }
export const SettingsPrivacyScreen: FC<SettingsPrivacyScreenProps> = observer(function SettingsPrivacyScreen(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText={"moreScreen.Settings.SettingsPrivacyScreen.title"}
      />

      <View style={styles.PrivacyTerms}>
        <Text style={styles.DetailsBoxTitle} tx={'moreScreen.Settings.SettingsPrivacyScreen.PrivacyTitle'} />
        <Text style={styles.DetailsBoxTitle} tx={'moreScreen.Settings.SettingsPrivacyScreen.PrivacyTitle2'} />
        <Text style={styles.DetailsBoxTitle} tx={'moreScreen.Settings.SettingsPrivacyScreen.PrivacyTitle2'} />
        <Text style={styles.DetailsBoxTitle} tx={'moreScreen.Settings.SettingsPrivacyScreen.PrivacyTitle2'} />
        <Text style={styles.DetailsBoxTitle} tx={'moreScreen.Settings.SettingsPrivacyScreen.PrivacyTitle2'} />
      </View>


    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginTop: 23,
    },


    PrivacyTerms: {
      display: 'flex',
      flexDirection:'column',
      backgroundColor: colors.background,
    },

    DetailsBoxTitle: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 16,
      lineHeight:22,
      marginBottom:16,

    },
   


  })
}
