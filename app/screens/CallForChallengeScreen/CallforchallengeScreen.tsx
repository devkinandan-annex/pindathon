import { StyleSheet, View, ViewStyle, TouchableOpacity, Platform } from "react-native"
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import BadgePost from "../../components/Common/BadgePost"
import WellxBtn from "../../components/Buttons/WellxBtn"
import { ChallengeAllTab } from "../CallForChallengeScreen/ChallengeAllTab"
import { ChallengePrivateTab } from "../CallForChallengeScreen/ChallengePrivateTab"
import { ChallengeNewTab } from "../CallForChallengeScreen/ChallengeNewTab"

interface CallforchallengeScreenProps extends AppStackScreenProps<"CallforchallengeScreen"> {
  prop?: any
}
export const CallforchallengeScreen: FC<CallforchallengeScreenProps> = observer(
  function CallforchallengeScreen(_props) {
    const { navigation }: any = _props
    const appConfig = useAppConfig()
    const wellxStyle = useWellxStyle()
    const { theme } = wellxStyle
    const { colors } = theme
    const styles = getLocalStyle(theme)

    const [buttonActive, setButtonActive] = useState(true)
    const [activeTab, setActiveTab] = useState(0)


    const tabing = [
      {
        title: "CallForChallenge.tab1",
        id: 1,
      },
      {
        title: "CallForChallenge.tab2",
        id: 2,
      },
      {
        title: "CallForChallenge.tab3",
        id: 3,
      },
    ]
    const Tab = () => {
      return (
        <View style={styles.tabContainer}>
          {tabing.map((val, index) => (
            <TouchableOpacity
              key={val.id}
              style={[styles.tabBtn, activeTab == index && styles.tabBtnActive]}
              onPress={() => setActiveTab(index)}
            >
              <Text
                tx={val.title}
                style={[styles.tabBtnText, activeTab == index && styles.tabBtnActiveText]}
              />
            </TouchableOpacity>
          ))}

        </View>
      )
    }
    const TabComponent = () => {
      switch (activeTab) {
        case 0:
          return <ChallengeAllTab prop={_props} />
          break

        case 1:
          return <ChallengePrivateTab  prop={_props}  />
          break

        case 2:
          return <ChallengeNewTab  prop={_props} />
          break
        default:
          return
          break
      }
    }

    return (
      <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
        <TopHeader
          leftIcon="back"
          customStyle={styles.customHeader}
          onPressLeft={() => _props.navigation.goBack()}
          centerText={"CallForChallenge.PageTitle"}
        />
        <View style={styles.navigationItem}>
          <View style={styles.navigationItemLeft}>
            <Icon icon="navigationProfile" size={52} />
          </View>
          <View style={styles.navigationItemRight}>
            <Text style={styles.itemTitle} text="Abdul Floyd" />
            <Text style={styles.itemSubTitle} text="@abdulfloyd" />
          </View>
        </View>
        <Tab />
        <TabComponent />
      </Screen>
    )
  },
)
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      marginTop: 23,
      paddingHorizontal: 16,
    },
    customHeader: {
      marginBottom: 24,
    },
    navigationItem: {
      display: "flex",
      flexDirection: "row",
      paddingHorizontal: 14,
      paddingVertical: 16,
      backgroundColor: colors.background,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 4,
      shadowRadius: 7,
    },
    profilesimages:{
     
    },

    navigationItemLeft: {
      width: 52,
      height: 52,
      marginRight: 12,
      borderRadius: 100,
      borderWidth: 1,
      overflow: 'hidden',
      borderColor: colors.challangeBorder,
    },
    navigationItemRight: {
      position: "relative",
    },
    itemTitle: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.bold,
      color: colors.blackText,
      marginBottom: 4,
    },
    itemSubTitle: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.descText,
    },

    tabContainer: {
      marginTop: 28,
      flexDirection: "row",
      justifyContent: "space-between",
      borderColor: colors.challangeBorder,
      borderWidth: 1,
      borderRadius: 14,
    },
    tabBtn: {
      paddingHorizontal: 32,
      paddingVertical: 14,
      margin: 4,
      borderRadius: 14,
    },
    tabBtnActive: {
      backgroundColor: colors.activeTabs,
    },
    tabBtnText: {
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 16,
      lineHeight: 18,
      color: colors.blackText,
    },
    tabBtnActiveText: {
      color: colors.background,
    },
  })
}
