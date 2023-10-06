import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen, Toggle, Button } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import Filters from "../../components/Leaderboard/Filters"
import LeaderboardUser from "../../components/Leaderboard/LeaderboardUser"
import CustomFlatList from "../../components/Common/CustomFlatList"
import BottomSheet from "../../components/BottomSheet/BottomSheet"
import WellxBtn from "../../components/Buttons/WellxBtn"
import SkeletonLoader from "expo-skeleton-loader"
interface LeaderboardScreenProps extends AppStackScreenProps<"Leaderboard"> {}
export const LeaderboardScreen: FC<LeaderboardScreenProps> = observer(function LeaderboardScreen(
  _props,
) {
  const windowWidth = Dimensions.get("window").width
  const windowHeight = Dimensions.get("window").height

  const [goalMode, setGoalMode] = useState(1)
  const [userMode, setUserMode] = useState(1)

  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const refRBSheet = useRef(null)
  const user = {
    name: "Abdul Satar",
    id: 5
  };
  const openModal = () => {
    refRBSheet.current.open()
  }

  const closeModal = () => {
    refRBSheet.current.close()
  }
  const Loader = () => {
    return (
      <View>
        <ImageBackground
          source={require("../../../assets/images/bgleaderboard.png")}
          resizeMode="contain"
          imageStyle={{ borderRadius: 16 }}
          style={styles.leatherBoardBg}
        >
          <View
            style={styles.userView}
          >
            <SkeletonLoader
              boneColor="#F3F3F3"
              highlightColor="#E7ECEE"
              //@ts-ignore
              style={loaderStyles.leftUserSkeleton}
            >
              <SkeletonLoader.Item style={loaderStyles.leftTopItem} />
              <SkeletonLoader.Item
                style={loaderStyles.leftMiddleItem}
              />
              <SkeletonLoader.Item
                style={loaderStyles.leftBottomItem}
              />
            </SkeletonLoader>
            <SkeletonLoader
              boneColor="#F3F3F3"
              highlightColor="#E7ECEE"
              //@ts-ignore
              style={loaderStyles.centerUserSkeleton}
            >
              <SkeletonLoader.Item
              //@ts-ignore
                style={loaderStyles.centerTopItem}
              />
              <SkeletonLoader.Item
                style={loaderStyles.centerMiddleItem}
              />
              <SkeletonLoader.Item
                style={loaderStyles.centerBottomItem}
              />

              <View style={styles.levelTaz}>
                <Icon icon="crownSkeleton" style={styles.firstLevelTaz} />
              </View>
            </SkeletonLoader>
            <SkeletonLoader
              boneColor="#F3F3F3"
              highlightColor="#E7ECEE"
              //@ts-ignore
              style={loaderStyles.rightUserSkeleton}
            >
              <SkeletonLoader.Item style={loaderStyles.rightTopItem} />
              <SkeletonLoader.Item
                style={loaderStyles.rightMiddleItem}
              />
              <SkeletonLoader.Item
                style={loaderStyles.rightBottomItem}
              />
            </SkeletonLoader>
          </View>
        </ImageBackground>

        {Array.from(Array(4).keys()).map((item, index) => {
          return (
            <View key={index}
              style={{
                borderWidth: 1,
                borderColor: colors.palette.connectDeviceButton,
                borderStyle: "solid",
                borderRadius: 16,
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 8,
              }}
            >
              <SkeletonLoader
                boneColor="#F3F3F3"
                highlightColor="#E7ECEE"
                style={{ alignItems: "center", height: 76, flexDirection: "row" }}
              >
                <SkeletonLoader.Item
                  style={{ height: 14, width: 11, borderRadius: 20, marginLeft: 25 }}
                />
                <SkeletonLoader.Item
                  style={{ height: 44, width: 44, marginLeft: 15, borderRadius: 60 }}
                />
                <SkeletonLoader.Item
                  style={{
                    height: 14,
                    width: 129,
                    marginLeft: 8,
                    borderRadius: 20,
                    marginBottom: 2,
                  }}
                />
              </SkeletonLoader>
              <SkeletonLoader
                boneColor="#F3F3F3"
                highlightColor="#E7ECEE"
                style={{ justifyContent: "center", height: 76 }}
              >
                <SkeletonLoader.Item
                  style={{ height: 14, width: 22, borderRadius: 20, marginRight: 14 }}
                />
              </SkeletonLoader>
            </View>
          )
        })}
      </View>
    )
  }

  const dummyArray = [
    { level: "20", name: "Mohammad Taqi", score: "25", levelType: "up", userProfile: "avtar1", me: false },
    { level: "10", name: "Said Aziz", score: "56", levelType: "down", userProfile: "avtar1", me: false },
    { level: "19", name: "Mohammad Taqi", score: "45", levelType: "up", userProfile: "avtar1", me: false },
    { level: "18", name: "Mohammad Taqi", score: "54", levelType: "down", userProfile: "avtar1", me: false },
    { level: "17", name: "Mohammad Taqi", score: "85", levelType: "up", userProfile: "avtar1", me: false },    
    { level: "4", name: "Mohammad Taqi", score: "45", levelType: "up", userProfile: "avtar1", me: false },
    { level: "5", name: "Mohammad Taqi", score: "55", levelType: "down", userProfile: "avtar1", me: false },
    { level: "7", name: "Abdul Satarr", score: "65", levelType: "down", userProfile: "user", me: false },
    { level: "9", name: "Mohammad Taqi", score: "65", levelType: "up", userProfile: "avtar1", me: false },
    { level: "3", name: "Mohamm", score: "65", levelType: "up", userProfile: "avtar1", me: false },
    { level: "2", name: "Mohamd", score: "65", levelType: "down", userProfile: "avtar1", me: false },
    { level: "11", name: "Mohammad Taqi", score: "65", levelType: "up", userProfile: "avtar1", me: false },
    { level: "15", name: "Mohammad Taqi", score: "65", levelType: "down", userProfile: "avtar1", me: false },
    { level: "1", name: "Abdul Satar", score: "65", levelType: "up", userProfile: "user", me: true },
    { level: "16", name: "Mohammad Taqi", score: "65", levelType: "down", userProfile: "avtar1", me: false },
    { level: "14", name: "Mohammad Taqi", score: "65", levelType: "up", userProfile: "avtar1", me: false },
    { level: "15", name: "Mohammad Taqi", score: "65", levelType: "down", userProfile: "avtar1", me: false },
    { level: "13", name: "Mohammad Taqi", score: "65", levelType: "up", userProfile: "avtar1", me: false },
    { level: "12", name: "Mohammad Taqi", score: "65", levelType: "up", userProfile: "avtar1", me: false },
    { level: "8", name: "Mohammad Taqi", score: "65", levelType: "up", userProfile: "avtar1", me: false },
  ]

  const UserModeData = [
    {
      name: "leaderboardScreen.filterByUserAll",
      type: 1,
    },
    {
      name: "leaderboardScreen.filterByUserFoll",
      type: 2,
    },
  ]

  const GoalModeData = [
    {
      name: "leaderboardScreen.filterByGoalModeEasy",
      type: 1,
    },
    {
      name: "leaderboardScreen.filterByGoalModeMedium",
      type: 2,
    },
    {
      name: "leaderboardScreen.filterByGoalModeHard",
      type: 3,
    },
  ]


  const DESC = (data: any) => {
    return data.sort((a: { score: any }, b: { score: string }) => b.score.localeCompare(a.score))
  }

  const filterModel = () => {
    return (
      <View style={styles.filterContainer}>
        <Text tx="leaderboardScreen.filterByUserLabel" style={styles.filterLabel} />

        <View style={styles.filterUpperInner}>
          {UserModeData.map((val, index) => (
            <Toggle  key={val.type}
              variant="radio"
              value={val.type == userMode ? true : false}
              labelPosition="right"
              labelTx={val.name}
              labelStyle={styles.labelStyle}
              inputWrapperStyle={styles.inputContainer}
              inputInnerStyle={styles.inputInner}
              inputOuterStyle={styles.inputOuter}
              inputDetailStyle={styles.inputActive}
              onPress={() => setUserMode(val.type)}
            />
          ))}
        </View>

        <Text tx="leaderboardScreen.filterByGoalMode" style={styles.filterLabel} />

        <View style={styles.filterDownInner}>
          {GoalModeData.map((val, index) => (
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

        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={() => closeModal()}
                  >
                    <Text tx="leaderboardScreen.filterCancel" style={styles.buttonText}/>
                  </TouchableOpacity> */}
          <WellxBtn
            title="leaderboardScreen.filterCancel"
            onPress={closeModal}
            customStyle={styles.buttonStyle}
            btnType="normal"
            customStyleInner={styles.buttonStyleInner}
          />
          <WellxBtn
            title="leaderboardScreen.filterApply"
            onPress={console.log("Apply")}
            customStyle={styles.buttonStyle}
            btnType="blue"
            customStyleInner={styles.buttonStyleInner}
          />
          {/* <TouchableOpacity 
                    style={[styles.buttonStyle, styles.activeButton]}
                    onPress={() => console.log('Apply')}
                  >
                    <Text tx="leaderboardScreen.filterApply" style={[styles.buttonText, styles.activeButton]}/>
                  </TouchableOpacity> */}
        </View>
      </View>
    )
  }

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top"]}
      ScrollViewProps={{ stickyHeaderIndices: [1] }}
    >
      <BottomSheet
        RenderComponent={filterModel()}
        refRBSheet={refRBSheet}
        height={510}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
        headerTitleTx="leaderboardScreen.filteHeading"
      />
      <View style={styles.topHeader}>
        <TopHeader
          leftIcon="back"
          onPressLeft={() => _props.navigation.goBack()}
          centerText="leaderboardScreen.pageTitle"
          rightIcon="filter"
          onPressRight={() => openModal()}
          customStyle={{marginTop: 12}}
        />
        <Filters />
      </View>
         {/* Call here Skeleton Loader conditionally */}
      <LeaderboardUser data={dummyArray} />
      
      <CustomFlatList data={DESC(dummyArray)} type="lbd" />
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  return StyleSheet.create({
    container: {
      // paddingHorizontal: spacing.medium,
      backgroundColor:colors.background,
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    wrapper: {
      backgroundColor: "rgba(36, 38, 39, 0.4)",
    },
    filterContainer: {
      marginTop: 32,
      width: "100%",
    },
    filterUpperInner: {
      marginTop: 22,
      // flexWrap: 'wrap',
      // flex: 1,
      // flexDirection: 'row',
      justifyContent: "space-between",
      marginBottom: 24,
    },
    filterLabel: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.bold,
      color: colors.blackText,
    },
    filterDownInner: {
      marginTop: 22,
    },
    labelStyle: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
      left: 0,
    },
    inputContainer: {
      marginVertical: 8,
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
    topHeader: {
      backgroundColor: colors.background,
      paddingHorizontal: spacing.medium,

    },
    buttonContainer: {
      marginTop: 43,
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
    },
    buttonStyle: {
      width: "48%",
      borderRadius: 12,
      // backgroundColor: colors.connectDeviceButton,
      paddingVertical: 0,
    },
    buttonText: {
      textAlign: "center",
      color: colors.blue,
      fontSize: 14,
      lineHeight: 14,
      fontFamily: typography.fonts.nexa.regular,
    },
    activeButton: {
      backgroundColor: colors.blue,
      color: colors.background,
    },
    buttonStyleInner: {
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderRadius: 16,
      backgroundColor: colors.connectDeviceButton,
    },

    leatherBoardBg: {
      height: 270,
    },
    levelTaz: {
      left: 0,
      zIndex: 1,
      position: "absolute",
      top: 30,
    },
    firstLevelTaz: {
      width: 32,
      height: 26,
    },
    userView:{
      flexDirection: "row",
      justifyContent: "space-between",
      height: 270,
      paddingHorizontal: 6,
    }

  })
}
const loaderStyles={
leftUserSkeleton:{
    height: 270,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center'
  
},
leftTopItem:{ height: 72, width: 72, borderRadius: 60 },
leftMiddleItem: { height: 12, width: 61, marginTop: 15, borderRadius: 18 } ,
leftBottomItem: { height: 12, width: 19, marginTop: 8, borderRadius: 18 },
centerUserSkeleton:{ alignItems: "center", height: "100%", justifyContent: "center" } ,
centerTopItem: { height: 117, width: 112, borderRadius: 60, position: "relative" },
centerMiddleItem: { height: 14, width: 82, marginTop: 19, borderRadius: 18 } ,
centerBottomItem:{ height: 14, width: 29, marginTop: 8, borderRadius: 18 } ,
rightUserSkeleton:{ alignItems: "center", height: "100%", justifyContent: "center" },
rightTopItem:{ height: 72, width: 72, borderRadius: 60 }
,
rightMiddleItem:{ height: 12, width: 83, marginTop: 15, borderRadius: 18 }  ,
rightBottomItem :{ height: 12, width: 20, marginTop: 8, borderRadius: 18 } 
}