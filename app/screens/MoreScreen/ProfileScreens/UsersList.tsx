import { StyleSheet, View, Platform,  ViewStyle } from "react-native"
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../../navigators"
import useWellxStyle from "../../../utils/useWellxStyle"
import useAppConfig from "../../../utils/useAppConfig"
import { Icon, Screen, TextField } from "../../../components"
import TopHeader from "../../../components/Header/TopHeader"
import CustomFlatList from "../../../components/Common/CustomFlatList"
import EmptyScreen from "../../../components/Common/EmptyScreen"
interface UsersListProps extends AppStackScreenProps<"UsersList"> {
}
export const UsersList: FC<UsersListProps> = observer(function UsersList(_props ) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const [tabData, setTabData] = useState([
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
      follow: false,
    },
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
      follow: false,
    },
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
      follow: false,
    },
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
      follow: false,
    },
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
      follow: false,
    },
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
      follow: false,
    },
    {
      leftIcon: "userProfile",
      tittle: "Abdul Floyd",
      subTittle: "@abdulfloyd",
      follow: false,
    },
  ])

  const handleChange = (i, val) => {
    let newTabData = [...tabData]
    newTabData[i].follow = !val
    setTabData(newTabData)
  }

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        customStyle={{paddingHorizontal:16,}}
        onPressLeft={() => _props.navigation.goBack()}
        centerText="moreScreen.myProfile.Following"
      />
      <View style={styles.inputOuter}>
        <View style={{ position: "absolute", zIndex: 1, height: 25, width: 25, top: 15, left: 25 }}>
          <Icon icon="search" style={{ height: 25, width: 25 }} />
        </View>
        <TextField
          // value={userName}
          // onChangeText={(v) => UserName(v)}
          // containerStyle={$textField}
          inputWrapperStyle={styles.inputWrapper}
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          placeholder="Search"
          placeholderTextColor={colors.descText}
        />
      </View>
      {tabData != null ? (
        <View style={{marginHorizontal:10,}}>
        <CustomFlatList data={tabData} type="users" rightClick={handleChange} />
        </View>
      ) : (
        <View style={{ flex: 1, alignItems: "center", alignSelf: "center" }}>
          <EmptyScreen
            Icon="emptyFollowing"
            title="moreScreen.myProfile.FollowingEmptyScreen.title"
          />
        </View>
      )}
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  return StyleSheet.create({
    container: {
     
      // flex:1,
    },
    inputOuter: {
      marginBottom: 24,
      paddingHorizontal: 16,
    },
    inputWrapper: {
      backgroundColor: colors.background,
      borderRadius: 16,
      borderColor: colors.challangeBorder,
      position: "relative",
      paddingHorizontal: 0,
      paddingVertical: 8,
    },
    textInput: {
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      fontSize: 16,
      lineHeight: 18,
      paddingLeft: 30,

      fontFamily: typography.fonts.nexa.regular,
      
      color: colors.blackText,
    },
    mainContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 16,
      paddingHorizontal: 14,
      marginBottom: 8,
      borderRadius: 16,
      width: "100%",
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
      elevation: Platform.OS == 'android' && 3,
      shadowOpacity: 0.06,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 16,
      // elevation:1,
      // borderWidth: 1,
      // borderColor: colors.challangeBorder,
    },
    leftIconStyle: {
      maxHeight: 40,
      maxWidth: 40,
    },
    titleStyle: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
      marginLeft: 12,
    },
    subTitleStyle: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.descText,
      marginLeft: 12,
    },
    followContainerStyle: {
      backgroundColor: colors.activeTabs,
      paddingTop: 8,
      paddingBottom: 6,
      paddingHorizontal: 18,
      borderRadius: 16,
      borderColor: colors.activeTabs,
      borderWidth: 1,
    },
    unFollowContainerStyle: {
      backgroundColor: colors.background,
      paddingTop: 8,
      paddingBottom: 6,
      paddingHorizontal: 10,
      borderRadius: 16,
      borderColor: colors.activeTabs,
      borderWidth: 1,
    },

    followTextStyle: {
      color: colors.background,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 16,
      fontSize: 14,
    },
    unfollowTextStyle: {
      color: colors.activeTabs,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 16,
      fontSize: 14,
    },
  })
}
