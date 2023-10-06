import { StyleSheet, View, TouchableOpacity, Platform } from "react-native"
import React, { useState } from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { MyFollowingsScreen } from "../../screens/MyFollowingsScreen/MyFollowingsScreen"
import MyOrganizationScreen from "../../screens/MyOrganizationScreen/MyOrganizationScreen"
import { translate } from "../../i18n"
import { Text } from "../Text"
import {Icon } from "../../components"

import { colors, spacing, typography } from "../../theme"
import { CallforchallengeScreen } from "../../screens/CallForChallengeScreen/CallforchallengeScreen"

const Tab = createMaterialTopTabNavigator()

export default function FollowAndOrganization(prop: any) {
  const [activeIndex, setActiveIndex] = useState(2)
  const Tabs = () => {
    const activeTab = (val) => {
      setActiveIndex(val)
    }
    const goToPostScreen = () => {
      prop.prop.navigation.navigate("PostScreen")
    }
    return (<>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeIndex == 1 && { backgroundColor: "#5043ED", borderRadius: 15 },
          ]}
          onPress={() => activeTab(1)}
        >
          <Text
            tx="followAndOrganization.tab1"
            style={activeIndex == 1 ? styles.tabActiveText : styles.tabInActiveText}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeIndex == 2 && { backgroundColor: "#5043ED", borderRadius: 15 },
          ]}
          onPress={() => activeTab(2)}
        >
          <Text
            tx="followAndOrganization.tab2"
            style={activeIndex == 2 ? styles.tabActiveText : styles.tabInActiveText}
          />
        </TouchableOpacity>
      </View>
       <TouchableOpacity style={styles.addPostContainer} onPress={()=>goToPostScreen()}>
       <Icon icon="plus" color={colors.blackText} style={styles.addIcon} />
       <Text tx="MyFollowingScreen.addPost" style={styles.addPostText} />
     </TouchableOpacity>
     </>
    )
  }

  const TabScreens = () => {
    switch (activeIndex) {
      case 2:
        return <MyOrganizationScreen _props={prop} />
        break

      default:
        return <MyFollowingsScreen _props={prop} />
        break
    }
  }

  return (
    <>
      <Tabs />
      <TabScreens />
    </>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 36,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.challangeBorder,
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
     shadowOpacity: 0.5,
    borderRadius: 16,
    marginHorizontal: spacing.medium,
    height: 50,
  },
  addPostContainer: {
    flexDirection: "row",
    backgroundColor: colors.connectDeviceButton,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 24,
    marginHorizontal:16
  },
  addPostText: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 18,
    
    color: colors.blackText,
    paddingVertical: 12,
  },
  addIcon: {
    maxHeight: 16,
    maxWidth: 16,
    marginRight: 5,
  },
  tabButton: {
    margin:4,
    // width: "50%",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  tabActiveText: {
    color: "white",
    fontFamily: typography.fonts.nexa.bold,
    
    fontSize: 16,
    lineHeight: 18
  },
  tabInActiveText: {
    color: colors.blackText,
    fontFamily: typography.fonts.nexa.regular,
    
    fontSize: 16,
    lineHeight: 18
  },
})
