import { StyleSheet, View, Platform, ViewStyle } from "react-native"
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import CustomFlatList from "../../components/Common/CustomFlatList"
import ToggleSwitch from "toggle-switch-react-native"

interface SettingsNotificationsScreenProps extends AppStackScreenProps<"support"> {}
export const SettingsNotificationsScreen: FC<SettingsNotificationsScreenProps> = observer(
  function SettingsNotificationsScreen(_props) {
    const appConfig = useAppConfig()
    const wellxStyle = useWellxStyle()
    const { theme } = wellxStyle
    const { colors } = theme
    const styles = getLocalStyle(theme)
    const [togle, setTogle] = useState(false)
    const [switchActive, setSwitchActive] = useState(true)
    const [switchActive2, setSwitchActive2] = useState(true)

    return (
      <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
        <TopHeader
          leftIcon="back"
          onPressLeft={() => _props.navigation.goBack()}
          centerText={"moreScreen.Settings.SettingsNotifications.title"}
        />

        <View style={styles.DetailsBox}>
          <Text
            style={styles.DetailsBoxTitle}
            tx={"moreScreen.Settings.SettingsNotifications.NotificationsTitle"}
          />
          <View style={styles.ToggleSwitchBtn}>
          <ToggleSwitch
              isOn={switchActive}
              onColor={colors.activeTabs}
              offColor={colors.challangeBorder}
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={ (switchActive) => setSwitchActive(switchActive)}
            />
          </View>
        </View>
        <View style={styles.DetailsBox}>
          <Text
            style={styles.DetailsBoxTitle}
            tx={"moreScreen.Settings.SettingsNotifications.NotificationsTitle2"}
          />
          <View style={styles.ToggleSwitchBtn}>
            <ToggleSwitch
              isOn={switchActive2}
              onColor={colors.activeTabs}
              offColor={colors.challangeBorder}
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={ (switchActive2) => setSwitchActive2(switchActive2) }
            />
          </View>
        </View>
      </Screen>
    )
  },
)
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginTop: 23,
    },

    DetailsBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 16,
      backgroundColor: colors.background,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 7,
      marginBottom: 8,
    },

    DetailsBoxTitle: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 16,
      lineHeight: 18,
      width: "70%",
    },
    ToggleSwitchBtn: {
      // width: 58,
      // height: 32,
      // borderRadius: 50,
      // backgroundColor: colors.activeTabs,
    },
  })
}
