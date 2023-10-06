import { ScrollView, StyleSheet, TouchableOpacity, View, Dimensions } from "react-native"
import React, { useCallback, useRef, useState } from "react"
import { Icon, Text } from "../../components"
import GradientCircularProgress from "../../components/GradientCircular/GradientCircularProgress"
// import { colors, typography } from "../../theme"
import MonthlyGoalType from "./MonthlyGoalType"
import RBSheet from "react-native-raw-bottom-sheet"
import MonthlyCalendar from "./MonthlyCalendar"
import BottomSheet from "../../components/BottomSheet/BottomSheet"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import Carousel from "react-native-snap-carousel"
import SkeletonLoader from "expo-skeleton-loader"
import { LinearGradient } from 'expo-linear-gradient'
import { spacing } from "../../theme";
import LottieView from 'lottie-react-native';

export default function RunningGoals(prop) {
  const [activeIndex, setActiveIndex] = useState(1)
  const [currentMode, setCurrentMode] = useState("step");
  const [animation, setAnimation] = useState(false);
  const animationRef = useRef(null)
  const [data, setData] = useState([
    {
      id: 0,
      name: "goalScreen.Steps",
      icon: "foot",
      number: 700,
      progress: 60,
      valuesId: 'step'
    },
    {
      id: 1,
      name: "goalScreen.newGoalSleep",
      icon: "moon",
      number: "100%",
      progress: 100,
      valuesId: 'sleep'
    },
  ])
  const windowWidth = Dimensions.get("window").width - 50
  const refRBSheet = useRef(null)
  const sliderRef = useRef(null)
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const Loader = () => {
    return (
      <View style={styles.mainLoaderView}>
        <View style={styles.loaderCircleView}>
          <SkeletonLoader
            boneColor="#F3F3F3"
            highlightColor="#E7ECEE"
            // @ts-ignore
            style={loaderStyles.circleSkeleton}
          >
            <SkeletonLoader.Item style={loaderStyles.firstItem} />

            <SkeletonLoader.Item style={loaderStyles.secondItem} />
            <SkeletonLoader.Item style={loaderStyles.thirdItem} />
          </SkeletonLoader>
        </View>
        <View style={styles.switchMainView}>
          <View style={styles.loaderSwitchButton}>
            <Icon
              icon="mainComponent"
              style={styles.icon}
              color={activeIndex == 1 ? colors.activeTabs : colors.normalTabs}
            />
          </View>
          <View style={[styles.loaderSwitchButton, { marginLeft: 12 }]}>
            <Icon
              icon="graph"
              style={styles.icon}
              color={activeIndex == 2 ? colors.activeTabs : colors.normalTabs}
            />
          </View>
        </View>
        <View style={styles.goalContentView}>
          <SkeletonLoader
            boneColor="#F3F3F3"
            highlightColor="#E7ECEE"
            style={{ flexDirection: "row" }}
          >
            <SkeletonLoader.Item style={loaderStyles.goalContentItem} />
            <SkeletonLoader.Item style={loaderStyles.goalContentItem} />
            <SkeletonLoader.Item style={loaderStyles.goalContentItem} />
          </SkeletonLoader>
          <SkeletonLoader
            boneColor="#F3F3F3"
            highlightColor="#E7ECEE"
            style={loaderStyles.goalStaticsMain}
          >
            <SkeletonLoader.Item style={loaderStyles.staticsTitle} />
            <SkeletonLoader.Container style={loaderStyles.staticsBarContainer}>
              <SkeletonLoader.Item style={loaderStyles.staticsBar} />
            </SkeletonLoader.Container>
          </SkeletonLoader>
        </View>
      </View>
    )
  }

  const activeTab = (val) => {
    setActiveIndex(val)
  }
  const onpress = () => {
    refRBSheet.current.close()
  }
  const openModal = () => {
    refRBSheet.current.open()
  }
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const d = new Date()
  let month = monthName[d.getMonth()]
  const y = new Date()
  let year = y.getFullYear();

  const renderSlider = useCallback((value: any, index: number) => {
    const { item } = value;
    return (

      <View style={styles.gradientMain}>
        {item.progress === 100 ?
          <LinearGradient
            start={[0.0, 0.0]}
            end={[1.0, 1.0]}
            colors={[colors.lightPink, colors.lightPink1]}
            style={styles.bottomEllispe}
          >
            <LinearGradient
              start={[0, 0]}
              end={[0.2, 1.0]}
              colors={[colors.darkBlue, colors.darkPink]}
              style={styles.topEllispe}
            >
              <Icon icon="check" style={{ width: 60, height: 40 }} color="#FFFFFF" />
              <Text tx="goalsScreen.goalAchieved" style={styles.whiteColor} />
            </LinearGradient>
          </LinearGradient> :
          <GradientCircularProgress
            progress={item.progress}
            startColor="#413CF1"
            endColor="#F63C81"
            size={240}
            middleColor="#F63C81"
          >
            <View style={styles.gradientInner}>
              <Icon icon={item.icon} style={styles.footIcon} />
              <Text text={item.number} style={styles.setpNumber} />
              <Text tx={item.name} style={styles.setpName} />
            </View>
          </GradientCircularProgress>
        }

      </View>
    )
  }, [])

  const changeMode = (val) => {
    let currentVal = ''
    if (val == 0) {
      // setCurrentMode("step");
      currentVal = 'step'
    } else {
      // setCurrentMode("sleep")
      currentVal = 'sleep'
    }
    setCurrentMode(currentVal);
    const index = data.findIndex((item: any) => {
      return item.valuesId == currentVal
    })
    data[index].progress
    if (data[index].progress === 100) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false)
      }, 2000);
    }else{
      setAnimation(false)
    }

  }

  return (
    <View style={styles.container}>
      <BottomSheet
        RenderComponent={<MonthlyCalendar close={onpress} CalendarTittle={[month, year]} />}
        refRBSheet={refRBSheet}
        height={380}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
        headerTitle={month + " " + year}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {animation && <View style={{ position: 'absolute', zIndex: 0, width: 400 }}>
          {/* <Icon icon="animation" style={{width:400, height:400}} /> */}
          <LottieView
            autoPlay
            ref={animationRef}
            style={{
              width: 400,
              height: 400,
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require('../../../assets/animation/confetti.json')}
          />
        </View>}
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.leftArrow}>
            <Icon icon="leftArrowBig" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.middleDate} onPress={() => openModal()}>
            <Text text="Thu, 20 Oct " style={styles.date} />
            <Icon icon="rightArrow" style={styles.dropArrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightArrow}>
            <Icon icon="rightArrowBig" style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Call here Skeleton Loader conditionally */}
        <Carousel
          ref={sliderRef}
          data={data}
          // @ts-ignore
          renderItem={renderSlider}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          onScrollIndexChanged={(i) => changeMode(i)}
        />
        {/* progress bar circular */}

        <View style={styles.switchButtonContainer}>
          <TouchableOpacity style={styles.switchButton} onPress={() => activeTab(1)}>
            <Icon
              icon="mainComponent"
              style={styles.icon}
              color={activeIndex == 1 ? colors.activeTabs : colors.normalTabs}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => prop.prop.navigation.navigate("Activity", currentMode)}
          >
            <Icon
              icon="graph"
              style={styles.icon}
              color={activeIndex == 2 ? colors.activeTabs : colors.normalTabs}
            />
          </TouchableOpacity>
        </View>

        <MonthlyGoalType prop={prop.prop}/>
      </ScrollView>
    </View>
  )
}

function getLocalStyle(theme) {
  const { colors, typography } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    subContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
    },
    icon: {
      width: 18,
      height: 18,
    },

    leftArrow: {
      backgroundColor: colors.connectDeviceButton,
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 12,
    },
    middleDate: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.connectDeviceButton,
      paddingHorizontal: 55,
      borderRadius: 12,
    },
    date: {
      paddingRight: 17,
      fontSize: 18,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 22,
      
      color: colors.blackText,
    },
    dropArrow: {
      transform: [{ rotate: "90deg" }],
    },
    rightArrow: {
      backgroundColor: colors.connectDeviceButton,
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 12,
    },
    switchButtonContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20,
    },
    switchButton: {
      backgroundColor: colors.connectDeviceButton,
      paddingVertical: 11,
      paddingHorizontal: 20,
      marginHorizontal: 12,
      borderRadius: 12,
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    wrapper: {
      backgroundColor: "rgba(36, 38, 39, 0.4)",
    },
    gradientMain: {
      marginTop: 32,
      justifyContent: "center",
      alignItems: "center",
    },
    gradientInner: {
      backgroundColor: "white",
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: -1,
      justifyContent: "center",
      alignItems: "center",
    },
    setpNumber: {
      marginTop: 12,
      fontFamily: typography.fonts.nexa.blod,
      
      fontSize: 40,
      lineHeight: 48,
      color: colors.blackText,
    },
    setpName: {
      marginTop: 12,
      fontSize: 12,
      lineHeight: 14,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
      
    },
    footIcon: {
      width: 40,
      height: 40,
    },
    loaderSwitchButton: {
      backgroundColor: colors.connectDeviceButton,
      height: 40,
      width: 58,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
    },
    mainLoaderView: { alignItems: "center", marginTop: 32 },
    loaderCircleView: {
      height: 240,
      width: 240,
      borderWidth: 24,
      borderRadius: 999,
      borderStyle: "solid",
      borderColor: colors.palette.connectDeviceButton,
    },
    switchMainView: { flexDirection: "row", marginTop: 20 },
    goalContentView: {
      height: 130,
      borderRadius: 16,
      padding: 16,
      marginTop: 32,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: colors.palette.connectDeviceButton,
      width: "100%",
    },
    bottomEllispe: {
      width: 240,
      height: 240,
      borderRadius: 120,
      justifyContent: 'center',
      alignItems: 'center'
    },
    topEllispe: {
      width: 192,
      height: 192,
      borderRadius: 96,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      zIndex: 99999,
      position: 'absolute'
    },
    whiteColor: {
      color: colors.background,
      fontSize: 14,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 14,
      
      marginTop: spacing.medium

    }

  })
}
const loaderStyles = {
  circleSkeleton: { justifyContent: "center", alignItems: "center" },
  firstItem: { height: 40, width: 40, borderRadius: 16, marginTop: 40 },
  secondItem: { height: 40, width: 132, borderRadius: 16, marginTop: 12 },
  thirdItem: { height: 12, width: 40, borderRadius: 16, marginTop: 12 },
  goalContentItem: { height: 32, width: 60, borderRadius: 12, marginRight: 16 },
  goalStaticsMain: { marginTop: 38 },
  staticsTitle: { height: 8, width: 72, borderRadius: 16 },
  staticsBarContainer: { backgroundColor: "#F5F7F8", marginTop: 8, borderRadius: 12 },
  staticsBar: { height: 12, width: 119, borderRadius: 12 },
}
