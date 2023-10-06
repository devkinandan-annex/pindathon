import {
  ImageBackground,
  StyleSheet,
  View,
  ViewStyle,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
  Platform,
} from "react-native"
import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import FollowAndOrganization from "../../components/newsfeedComponents/FollowAndOrganization"
import SkeletonLoader from "expo-skeleton-loader"
import Clipboard from "@react-native-community/clipboard"
interface MyvouchersScreenProps extends AppStackScreenProps<"MyvouchersScreen"> {}
export const MyvouchersScreen: FC<MyvouchersScreenProps> = observer(function MyvouchersScreen(
  _props,
) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const [activeIndex, setActiveIndex] = useState(1)
  const Tabs = () => {
    switch (activeIndex) {
      case 2:
        return used()
        break
      default:
        return Active()
        break
    }
  }
  const Loader = () => {
    return (
      <>
        <SkeletonLoader boneColor="#F3F3F3" highlightColor="#E7ECEE" style={{ marginBottom: 16 }}>
          <SkeletonLoader.Container style={{ height: 258, borderRadius: 20 }}>
            {/* Ignore This */}
          </SkeletonLoader.Container>
        </SkeletonLoader>
        <Icon icon="leftVoucherCurve" style={styles.leftSkeletonCurve} />
        <Icon icon="rightVoucherCurve" style={styles.rightSkeletonCurve} />
      </>
    )
  }
  const activeTab = (val) => {
    setActiveIndex(val)
  }
  const copyToClipboard = (data: string) => {
    console.log(data)
    Clipboard.setString(data)
  }
  const myVoucherList = [
    {
      name: "Amazon -25% OFF",
      icon: "amazon",
      orderDate: "11 Nov, 2022",
      price: "2.500",
      voucherCode: "BHSJXDX20",
      successfully: "Successfully used",
      status: 1,
      id: 1,
    },
    {
      name: "Shopify -12% OFF",
      icon: "shopify",
      orderDate: "18 Nov, 2022",
      price: "400",
      voucherCode: "542HYBNS0",
      successfully: "Successfully used",
      status: 0,
      id: 2,
    },
    {
      name: "Amazon -25% OFF",
      icon: "amazon",
      orderDate: "11 Nov, 2022",
      price: "2.500",
      voucherCode: "BHSJXDX20",
      successfully: "Successfully used",
      status: 1,
      id: 3,
    },
    {
      name: "Shopify -12% OFF",
      icon: "shopify",
      orderDate: "18 Nov, 2022",
      price: "400",
      voucherCode: "542HYBNS0",
      successfully: "Successfully used",
      status: 0,
      id: 4,
    },
  ]
  const used = () => {
    return myVoucherList.map((val) => (
      <ImageBackground
        key={val.id}
        source={require("../../../assets/icons/common/Usedvouchershape.png")}
        resizeMode="contain"
        imageStyle={{}}
        style={styles.leatherBoardBg}
      >
        <View style={[styles.Activevouchers, styles.UnActivevouchers]}>
          <View style={styles.ActivevouchersHead}>
            <View style={styles.VoucherAicon}>
              <Icon icon={val.icon} size={37} />
            </View>
            <Text style={styles.itemTitle} text={val.name} />
          </View>
          <View style={styles.marketplaceItemCenter}>
            <View style={styles.VoucherpriceCenterLeft}>
              <Text
                style={[styles.titleCenterLeft, styles.titleCenterBottom]}
                tx="marketplaceScreen.pricetitle"
              />
              <Text style={styles.titleCenterLeft} tx="marketplaceScreen.datetitle" />
            </View>
            <View style={styles.VoucherpriceRight}>
              <View style={styles.vouchersTitleBox}>
                <Icon
                  style={styles.marketplaceIcon}
                  icon="marketplaceIcon"
                  color="black"
                  size={16}
                />
                <Text style={styles.titleCenterRIght} text={val.price} />
              </View>
              <Text style={styles.titleCenterRIght} text={val.orderDate} />
            </View>
          </View>
        </View>
        <View style={styles.VoucherprBottom}>
          <View style={styles.Voucherpriceborder}>
            <Icon style={styles.voucherBorder} icon="voucherBorder" />
          </View>
          <View
            style={[styles.VouchersBtn, styles.SuccessfullyMainBtn]}
            
          >
            <Text text={val.successfully} style={styles.SuccessfullyBtn} />
            <Icon icon="successfully" size={32} />
          </View>
        </View>
      </ImageBackground>
    ))
  }
  const Active = () => {
    return myVoucherList.map((val) => (
      <ImageBackground
        key={val.id}
        source={require("../../../assets/icons/common/vouchershape.png")}
        resizeMode="contain"
        imageStyle={{}}
        style={styles.leatherBoardBg}
      >
        <View style={styles.Activevouchers}>
          <View style={styles.ActivevouchersHead}>
            <View style={styles.VoucherAicon}>
              <Icon icon={val.icon} size={37} />
            </View>
            <Text style={styles.itemTitle} text={val.name} />
          </View>
          <View style={styles.marketplaceItemCenter}>
            <View style={styles.VoucherpriceCenterLeft}>
              <Text
                style={[styles.titleCenterLeft, styles.titleCenterBottom]}
                tx="marketplaceScreen.pricetitle"
              />
              <Text style={styles.titleCenterLeft} tx="marketplaceScreen.datetitle" />
            </View>
            <View style={styles.VoucherpriceRight}>
              <View style={styles.vouchersTitleBox}>
                <Icon
                  style={styles.marketplaceIcon}
                  icon="marketplaceIcon"
                  color="black"
                  size={16}
                />
                <Text style={styles.titleCenterRIght} text={val.price} />
              </View>
              <Text style={styles.titleCenterRIght} text={val.orderDate} />
            </View>
          </View>
          <View style={styles.Voucherpriceborder}>
            <Icon style={styles.voucherBorder} icon="voucherBorder" />
          </View>
          <TouchableOpacity style={styles.VouchersBtn}>
            <Text text={val.voucherCode} style={styles.VoucherscopyBtn} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.copyBtnWrapper}
          onPress={() => {copyToClipboard(val.voucherCode),  ToastAndroid.show("Coupon code copied", ToastAndroid.SHORT)}}
        >
          <Icon icon="vouchersCopy" size={24} />
        </TouchableOpacity>
      </ImageBackground>
    ))
  }
  return (
    <Screen
      preset="scroll"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top"]}
      ScrollViewProps={{ stickyHeaderIndices: [0] }}
    >
      <View style={{ backgroundColor: colors.background }}>
        <TopHeader
          leftIcon="back"
          onPressLeft={() => _props.navigation.goBack()}
          centerText="MyvouchersScreen.pageTitle"
          customStyle={{marginTop: 12}}
        />
        <View style={styles.tabContainer}>
          <View style={styles.tabButtonBox}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeIndex == 1 && { backgroundColor: "#5043ED", borderRadius: 15 },
              ]}
              onPress={() => activeTab(1)}
            >
              <Text
                tx="MyvouchersScreen.tab1"
                style={activeIndex == 1 ? styles.tabActiveText : styles.tabInActiveText}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tabButtonBox}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeIndex == 2 && { backgroundColor: "#5043ED", borderRadius: 15 },
              ]}
              onPress={() => activeTab(2)}
            >
              <Text
                tx="MyvouchersScreen.tab2"
                style={activeIndex == 2 ? styles.tabActiveText : styles.tabInActiveText}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Call here Skeleton Loader conditionally */}
      {/* <View style={{ marginTop: 28 }}>
        {Array.from(Array(4).keys()).map((item, index) => {
          return <Loader />
        })}
      </View> */}
      {Tabs()}
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      //   marginTop: 22,
      paddingHorizontal: 16,
      paddingBottom: 45,
    },
    tabContainer: {
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
  elevation: Platform.OS == 'android' && 3,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.5,
      borderRadius: 16,
    },
    tabButtonBox: {
      width: "50%",
    },
    copyBtnWrapper:{ position: "absolute", bottom: 20, right: 78 },
    tabButton: {
      paddingHorizontal: 35,
      paddingVertical: 10,
    },
    tabActiveText: {
      color: "white",
      textAlign: "center",
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 16,
    },
    tabInActiveText: {
      textAlign: "center",
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 16,
    },
    Activevouchers: {
      width: "100%",
      borderRadius: 20,
      paddingHorizontal: 26,
      paddingVertical: 20,
      top: -10,
      position: "relative",
      zIndex: -1,
      borderColor: colors.connectDeviceButton,
      backgroundColor: colors.background,
    },
    UnActivevouchers: {
      paddingBottom: 0,
      opacity: 0.3,
    },
    VoucherprBottom: {
      paddingHorizontal: 26,
      paddingBottom: 20,
      paddingTop: 0,
      top: -10,
      position: "relative",
    },
    ActivevouchersHead: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 25,
    },
    marketplaceItemCenter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 32,
    },
    VoucherpriceCenterLeft: {
      width: "50%",
    },
    VoucherpriceRight: {
      position: "relative",
    },
    Voucherpriceborder: {
      width: "100%",
      marginBottom: 20,
    },
    voucherBorder: {
      width: "85%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    VouchersBtn: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection:'row',
    },
    SuccessfullyMainBtn: {
      position: "relative",
      opacity: 1,
      zIndex: 1,
    },
    VoucherscopyBtn: {
      marginRight: 12,
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 24,
      lineHeight: 28,
    },
    SuccessfullyBtn: {
      marginRight: 12,
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 20,
      lineHeight: 28,
    },
    titleCenterLeft: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 16,
      lineHeight: 18,
    },
    VoucherAicon: {
      width: 60,
      height: 60,
      borderRadius: 50,
      borderWidth: 1,
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      justifyContent: "center",
      borderColor: colors.connectDeviceButton,
      marginRight: 12,
    },
    itemTitle: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 18,
      lineHeight: 22,
    },
    marketplaceIcon: {
      marginRight: 7,
    },
    titleCenterRIght: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 16,
      lineHeight: 18,
    },
    titleCenterBottom: {
      marginBottom: 16,
    },
    vouchersTitleBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: 16,
    },
    leatherBoardBg: {
      height: 258,
      marginTop: 24,
      padding: 10,
      position: "relative",
      // zIndex: 1,
      marginBottom: 0,
    },

    leftSkeletonCurve: {
      position: "absolute",
      height: 54,
      width: 42,
      bottom: 60,
      left: -12,
      zIndex: 1,
    },
    rightSkeletonCurve: {
      position: "absolute",
      height: 54,
      width: 42,
      zIndex: 1,
      right: -12,
      bottom: 60,
    },

    Usedvouchers: {
      opacity: 0.2,
    },
  })
}
