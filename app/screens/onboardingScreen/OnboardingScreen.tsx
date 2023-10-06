import { Dimensions, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import React, { FC, useRef } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen, Button } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import Carousel, { Pagination } from "react-native-snap-carousel"
interface OnboardingScreenProps extends AppStackScreenProps<"OnboardingScreen"> {}
export const OnboardingScreen: FC<OnboardingScreenProps> = observer(function OnboardingScreen(
  _props,
) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const windowWidth = Dimensions.get("window").width
  const sliderRef = useRef(null)
  const [index, setIndex] = React.useState(0)
  const btnText = index == 0 || index == 1 ? String("Next") : String("Complete")

  const styles = getLocalStyle(theme)
  const renderItem = ({ item, index }) => {
    return (
      <View key={index}>
        <Icon icon={item.img} style={styles.image} />
        <Text style={styles.title} text={item.title} />
        <Text style={styles.subTitle} text={item.subTitle} />
      </View>
    )
  }
  function btnClick() {
    index == 0 || index == 1
      ? setIndex(index + 1)
      : _props.navigation.navigate("MainTab", { screen: "NewsfeedScreen" })
  }
  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <View>
        <TopHeader
          leftIcon="back"
          onPressLeft={() => _props.navigation.goBack()}
          centerIcon="wellxLogo"
          rightText="deviceScreen.skip"
          onPressRight={()=>_props.navigation.navigate("MainTab", { screen: "NewsfeedScreen" }) }
          centerIconStyle={styles.centerLogo}
          customStyle={styles.customStyle}
        />
        {/* @ts-ignore */}
        <Carousel
          data={OnboardingArray}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          ref={sliderRef}
          onSnapToItem={(index) => setIndex(index)}
          activeSlideOffset={index}
          enableSnap={true}
          firstItem={index}
        />
        <Pagination
          dotsLength={OnboardingArray.length}
          activeDotIndex={index}
          carouselRef={sliderRef}
          dotStyle={styles.dotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={() => btnClick()} style={styles.bottomBtn}>
          <Text text={btnText} style={styles.btnText} />
        </TouchableOpacity>
      </View>
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      paddingVertical: spacing.medium,
      flex: 1,
    },
    centerLogo: {
      width: 120,
      height: 32,
    },
    customStyle: {
      paddingHorizontal: 16,
    },
    image: { width: "100%", height: 380, resizeMode: "stretch", marginVertical: 16 },
    title: {
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 24,
      lineHeight: 28,
      color: colors.blackText,
      textAlign: "center",
      paddingHorizontal: 38,
    },
    subTitle: {
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 16,
      lineHeight: 22,
      color: colors.blackText,
      textAlign: "center",
      paddingHorizontal: 38,
      marginTop: 12,
    },
    btnText: {
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 16,
      lineHeight: 18,
      color: colors.palette.activeBottomTab,
      textAlign: "center",
    },
    bottomBtn: {
      backgroundColor: colors.palette.neutral100,
      width: "100%",
      paddingVertical: 20,
      borderRadius: 16,
      borderColor: colors.activeTabs,
      borderWidth: 2,
      justifyContent: "center",
      borderStyle: "solid",
      alignItems: "center",
    },
    bottomView: {
      position: "absolute",
      bottom: 16,
      paddingHorizontal: 16,
      width: "100%",
    },
    dotStyle:{
      width: 12,
      height: 12,
      borderRadius: 60,
      backgroundColor: colors.palette.activeBottomTab,
    }
  })
}
const OnboardingArray = [
  {
    title: "Participate and create your own challenges",
    subTitle:
      "You can compete with all Wellx users. Invite your friends and earn badges for first place in Challenges.",
    img: "firstOnboarding",
  },
  {
    title: "Set goals and keep track of your activity",
    subTitle:
      "By achieving monthly goals you will receive xCoins and badges, as well as keep track of your activity statistics.",
    img: "secondOnboarding",
  },
  {
    title: "Redeem vouchers in the marketplace",
    subTitle:
      "Spend your xCoins on vouchers from the largest and most popular online stores and gyms.",
    img: "thirdOnboarding",
  },
]
