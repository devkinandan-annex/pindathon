import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import React, { FC, useRef } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import CustomFlatList from "../../components/Common/CustomFlatList"
import BottomSheet from "../../components/BottomSheet/BottomSheet"
import { useStores } from "../../models"
interface ProfileSettingsProps extends AppStackScreenProps<"ProfileSettings"> {}
export const ProfileSettings: FC<ProfileSettingsProps> = observer(function ProfileSettings(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const refRBSheet = useRef(null)
  const openModal = () => {
    refRBSheet.current.open()
  }
  const TabData = [
    {
      leftIcon: "changeAvatar",
      tittle: "moreScreen.myProfile.profileSettings.changeAvatar",
      rightIcon: "rightArrowBig",
      routeName: "ProfileAvatarWeb",
    },
    {
      leftIcon: "changeUserName",
      tittle: "moreScreen.myProfile.profileSettings.changeUsername",
      rightIcon: "rightArrowBig",
      routeName: "ChangeUsername",
    },
    {
      leftIcon: "changeEmail",
      tittle: "moreScreen.myProfile.profileSettings.changeEmail",
      rightIcon: "rightArrowBig",
      routeName: "ChangeEmail",
    },
    {
      leftIcon: "heightWeight",
      tittle: "moreScreen.myProfile.profileSettings.heightWeight",
      rightIcon: "rightArrowBig",
      routeName: "HeightWeightScreen",
    },
    {
      leftIcon: "profilePolicy",
      tittle: "moreScreen.myProfile.profileSettings.profilePolicy",
      rightIcon: "rightArrowBig",
      routeName: "ProfilePolicy",
    },
  ]
  const {
    authenticationStore: { logout },
  } = useStores()
  const deActivate = () => {
    return (
      <View style={styles.deactivateContainer}>
         <View style={styles.headerWrapper}>
        <Text tx="moreScreen.myProfile.profileSettings.deactivateAccount.title" style={styles.unfollowTitle} />
        <TouchableOpacity onPress={() => refRBSheet.current.close()} style={{ justifyContent:'center'}}>
            <Icon icon={"cross"} size={11} style={{marginRight: 4}}/>
          </TouchableOpacity>
        </View>
          <Text
            tx="moreScreen.myProfile.profileSettings.deactivateAccount.subTitle"
            style={styles.SubDesc}
          />
        

        <View style={styles.deactivateFooter}>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text
              tx="moreScreen.myProfile.profileSettings.deactivateAccount.back"
              style={styles.buttontitle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDeactivate} onPress={() => logout()}>
            <Text
              tx="moreScreen.myProfile.profileSettings.deactivateAccount.deactivate"
              style={[styles.buttontitle, styles.buttonTitleUnfollow]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <BottomSheet
        RenderComponent={deActivate()}
        refRBSheet={refRBSheet}
        height={244}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
      />

      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText="moreScreen.myProfile.profileSettings.title"
        customStyle={{ marginTop: 12 }}
      />
      <CustomFlatList
        customStyle={{ marginBottom: 16 }}
        data={TabData}
        type="btn"
        onpress={_props.navigation.navigate}
      />
      <TouchableOpacity onPress={() => openModal()}>
        <Text
          tx="moreScreen.myProfile.profileSettings.deactivateAccount.title"
          style={styles.deactivateAccountText}
        />
      </TouchableOpacity>
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    deactivateAccountText: {
      color: colors.error,
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.bold,
      marginTop: 16,
    },
    headerWrapper:{ flexDirection: "row", justifyContent: "space-between" },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    wrapper: {
      backgroundColor: "rgba(36, 38, 39, 0.4)",
    },
    deactivateContainer: {
      width: "100%",
    },
    followBtn: {
      flexDirection: "row",
      alignItems: "center",
    },
    followIcon: {
      marginRight: 10,
    },
    followText: {
      fontSize: 16,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 18,

      color: colors.blackText,
    },
    unFollow: {
      marginTop: 54,
    },
    deactivateFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 32,
      width: "100%",
    },

    buttonCancel: {
      backgroundColor: colors.connectDeviceButton,
      width: "48%",
      paddingTop: 14,
      paddingBottom: 12,
      borderRadius: 16,
    },
    buttonDeactivate: {
      backgroundColor: colors.error,
      width: "48%",
      paddingTop: 14,
      paddingBottom: 12,
      borderRadius: 16,
    },
    buttontitle: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 14,

      color: colors.activeTabs,
      alignItems: "center",
      alignSelf: "center",
    },
    buttonTitleUnfollow: {
      color: colors.background,
      alignItems: "center",
      alignSelf: "center",
    },
    unfollowTitle: {
      fontSize: 24,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 28,

      color: colors.blackText,
    },
    SubDesc: {
      marginTop: 24,
      fontSize: 16,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 22,
      color: colors.descText,
    },
  })
}
