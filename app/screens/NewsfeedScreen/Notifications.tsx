import { StyleSheet, TouchableOpacity, View, Platform, ViewStyle, Animated } from "react-native"
import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Screen, Icon, Text } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import BottomSheet from "../../components/BottomSheet/BottomSheet"
import { SwipeListView } from "react-native-swipe-list-view"
import { TouchableHighlight } from "react-native-gesture-handler"
import EmptyScreen from "../../components/Common/EmptyScreen"
interface NotificationsProps extends AppStackScreenProps<"NotificationsScreen"> {}
export const Notifications: FC<NotificationsProps> = observer(function Notifications(_props) {
  const refRBSheet = useRef(null)

  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const openModal = () => {
    refRBSheet.current.open()
  }
  const closeModal = () => {
    refRBSheet.current.close()
  }
  const [listData, setListData] = useState(
    Array(5)
      .fill("")
      .map((_, i) => ({ key: `${i}`, text: "" })),
  )

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey)
  }

  const renderItem = (data) => (
    <TouchableHighlight
      // style={styles.rowFront}
      underlayColor={"#AAA"}
    >
      <View style={styles.navigationItem}>
        <View style={styles.navigationItemLeft}>
          <Icon icon="navigationProfile" size={52} />
        </View>
        <View style={styles.navigationItemRight}>
          <Text style={styles.itemTitle} text="Abdul Floyd now followed you!" />
          <Text style={styles.itemSubTitle} text="20 minutes ago" />
        </View>
      </View>
    </TouchableHighlight>
  )

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => alert("working")}
      >
        <Icon icon="deleteIcon" color={colors.background} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  )
  const UnfollowComp = () => {
    return (
      <View style={styles.followContainer}>
        <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
        <Text text="Delete all notifications" style={styles.unfollowTitle} />
        <Icon icon={"cross"} size={17} onPress={()=>refRBSheet.current.close()} style={{marginRight: 8}}/>
        </View>
        <Text
          text="Are you sure you want to delete all notifications?"
          style={styles.unfollowDesc}
        />
        <View style={styles.unfollowFooter}>
          <TouchableOpacity
            style={[styles.buttonMain, styles.buttonCancel]}
            onPress={() => closeModal()}
          >
            <Text tx="followSheet.Cancel" style={styles.buttontitle} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonMain, styles.buttonUnfollow]}>
            <Text
              tx="followSheet.Delete"
              style={[styles.buttontitle, styles.buttonTitleUnfollow]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        // style={styles.notificationHeader}
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText="Notification.headerTittle"
        textStyleCenter={styles.notificationHeader}
        customRightIconCss={styles.customRightIconStyle}
        rightIcon={ listData && "blackDeleteIcon"}
        onPressRight={() => openModal()}
      />

      {/* <View style={styles.navigationItem}>
      <View style={styles.navigationItemLeft}>
        <Icon icon='navigationProfile' size={52} />
      </View>
      <View style={styles.navigationItemRight}>
        <Text style={styles.itemTitle} text="Abdul Floyd now followed you!" />
        <Text style={styles.itemSubTitle} text="20 minutes ago" />
      </View>
    </View> */}
      {listData ? (
        <View style={styles.containerr}>
          <SwipeListView
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={0}
            rightOpenValue={-80}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
          />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <EmptyScreen Icon="emptyNotification" title="Notification.noNotification" />
        </View>
      )}
      <BottomSheet
        RenderComponent={UnfollowComp()}
        refRBSheet={refRBSheet}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
        height={210}
      />
    </Screen>
  )
})
const rowSwipeAnimatedValues = {}
Array(20)
  .fill("")
  .forEach((_, i) => {
    rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0)
  })
function getLocalStyle(theme) {
  const { colors, typography } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      marginHorizontal: 16,
      marginTop: 12,
      flex: 1,
    },

    notificationHeader: {
      fontSize: 18,
      lineHeight: 22,
      fontFamily: typography.fonts.nexa.bold,
      color: colors.blackText,
    },
    navigationItem: {
      display: "flex",
      flexDirection: "row",
      paddingHorizontal: 14,
      paddingVertical: 16,
      backgroundColor: colors.background,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.connectDeviceButton,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
      elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 4,
      shadowRadius: 7,
      marginBottom: 12,
    },

    navigationItemLeft: {
      width: 52,
      height: 52,
      marginRight: 12,
      borderRadius: 100,
      borderWidth: 1,
      overflow: "hidden",
      borderColor: colors.connectDeviceButton,
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

    followContainer: {
      // paddingHorizontal: 16,
      // width: "100%",
    },
    followBtn: {
      flexDirection: "row",
      alignItems: "center",
    },
    followIcon: {
      marginRight: 10,
    },
    deleteIcon:{marginLeft: 14, height: 20, width: 20},
    customRightIconStyle:{
width:15, height: 18
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
    unfollowFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 32,
      width: "100%",
    },
    buttonMain: {
      height: 40,
      minWidth: "48%",
      alignItems: "center",
      justifyContent:'center',
      borderRadius: 12,
    },
    buttonCancel: {
      backgroundColor: colors.connectDeviceButton,
      marginRight: 11,
    },
    buttonUnfollow: {
      backgroundColor: colors.error,
    },
    buttontitle: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 14,
      
      color: colors.activeTabs,
    },
    buttonTitleUnfollow: {
      color: colors.background,
    },
    unfollowTitle: {
      fontSize: 24,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 28,
      color: colors.blackText,
    },
    unfollowDesc: {
      fontSize: 16,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 18,
      color: colors.descText,
      paddingTop: 8,
      maxWidth:'90%'
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    wrapper: {
      backgroundColor: "rgba(36, 38, 39, 0.4)",
    },
    containerr: {
      backgroundColor: "white",
      flex: 1,
    },
    backTextWhite: {
      color: "#FFF",
    },
    rowFront: {
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderBottomColor: "black",
      borderBottomWidth: 1,
      justifyContent: "center",
      height: 50,
    },
    rowBack: {
      alignItems: "center",
      backgroundColor: "#ffffff",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 15,
    },
    backRightBtnRight: {},
    backRightBtn: {
      alignItems: "center",
      bottom: 0,
      justifyContent: "center",
      position: "absolute",
      top: 1,
      backgroundColor: colors.error,
      right: 2,
      width: 100,
      height: 83,
      borderRadius: 16,
    },
    trash: {
      height: 25,
      width: 25,
    },
  })
}
