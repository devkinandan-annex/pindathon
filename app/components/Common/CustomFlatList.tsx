import {
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native"
import React, { useEffect, useRef } from "react"
import { colors, typography, spacing } from "../../theme"
import { Text } from "../Text"
import { Icon } from "../Icon"
import WellxBtn, { OuterBtn } from "../../components/Buttons/WellxBtn"
import { LinearGradient } from "expo-linear-gradient"

export default function CustomFlatList(props) {
  const {
    data,
    type,
    height,
    onpress,
    navigation,
    deleteAction,
    rename,
    refreshAction,
    rightClick,
    bigButton,
    customStyle
  } = props
  // console.log(data, 'navigation', props)
  const ItemView = ({ item, index }) => {
    const gradientColor = item.me == true ? ["#413CF1", "#F63C81"] : ["#FFFFFF", "#FFFFFF"]
    return (
      <View key={Math.random()}>
        {type == "lbd" && (
          <LinearGradient
            colors={gradientColor}
            start={{ x: 1.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={[item.me == true && styles.meStyle]}
          >
            <View style={[item.me == true ? styles.singleStyleWithoutShadow : styles.singleStyle]}>
              {/* <Text text={userData.name} /> */}
              <View style={styles.LeatherBoardMain}>
                <View style={styles.LeatherBoardInner}>
                  <View style={styles.LeatherBoardLeft}>
                    <View style={styles.LeatherBoardLeftInner}>
                      <Text text={item.level} style={styles.levelText} />
                      {item.levelType == "up" ? (
                        <Icon icon="lvlup" style={styles.levelIcon} />
                      ) : (
                        <Icon icon="lvldown" style={styles.levelIcon} />
                      )}
                    </View>
                    <Icon icon={item.userProfile} style={styles.userIcon} />
                    <Text text={item.name} style={styles.userName} />
                  </View>
                  <View>
                    <Text text={item.score} style={styles.userScore} />
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        )}

        {type == "btn" && (
          <TouchableOpacity
            style={[styles.tabContainer,customStyle]}
            onPress={() => onpress(item.routeName)}
            key={Math.random()}
          >
            <View style={styles.leftContainer}>
              <View style={styles.IconContainer}>
                <Icon icon={item.leftIcon} style={styles.leftIcon} />
              </View>
              <View style={{ width: "80%", flexDirection: "column" }}>
                <Text tx={item.tittle} style={styles.title} />
                {item.subTitle && <Text text={item.subTitle} style={[styles.subTitle,{marginTop:4}]} />}
              </View>
            </View>

            <Icon
              icon={item.rightIcon}
              style={bigButton == "true" ? styles.rightBigIcon : styles.rightIcon}
            />
          </TouchableOpacity>
        )}

        {type == "users" && (
          <TouchableOpacity style={[styles.mainContainer ]} key={Math.random()}>
            <View style={styles.leftContainer}>
              <View style={styles.IconContainer}>
                <Icon icon={item.leftIcon} style={styles.leftIconStyle} />
              </View>
              <View style={styles.textContainer}>
                <Text text={item.tittle} style={styles.titleStyle} />
                <Text text={item.subTittle} style={styles.subTitleStyle} />
              </View>
            </View>
            <Pressable
              style={item.follow ? styles.followContainerStyle : styles.unFollowContainerStyle}
              onPress={() => rightClick(index, item.follow)}
            >
              <Text
                text={item.follow ? "Follow" : "Unfollow"}
                style={item.follow ? styles.followTextStyle : styles.unfollowTextStyle}
              />
            </Pressable>
          </TouchableOpacity>
        )}
        {type == "device" && (
          <View style={styles.deviceBox} key={Math.random()}>
            <View style={styles.deviceTitleBox}>
              <View style={styles.row}>
                <Icon icon="whoopIcon" style={styles.deviceIcon} />
                <View style={styles.textBox}>
                  <Text text={item.name} style={styles.Devicetitle} />
                  <Text tx="common.connected" style={styles.status} />
                </View>
              </View>
              <Icon
                icon="redDelete"
                style={styles.deleteIcon}
                onPress={() => deleteAction(item.id)}
              />
            </View>

            <View style={styles.boxFooter}>
              <WellxBtn
                btnType="normal"
                customStyle={styles.refreshBtn}
                customStyleInner={styles.refreshBtn}
                onPress={refreshAction}
              >
                <Icon icon="refresh" style={{ width: 12, height: 12 }} />
                <Text tx="common.refresh" style={styles.btnText} />
              </WellxBtn>
              <WellxBtn
                btnType="normal"
                customStyle={styles.renameBtn}
                customStyleInner={styles.renameBtn}
                // onPress={() => [refRBSheet.current.open(), setDeviceName('My whoop')]}
                onPress={() => rename(item.name, item.id)}
              >
                <Icon icon="rename" style={{ width: 12, height: 12 }} />
                <Text tx="common.rename" style={styles.btnText} />
              </WellxBtn>
            </View>
          </View>
        )}
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={data}
    
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
        style={[type !== "device" && styles.listStyle, { height: height }]}
        // stickyHeaderIndices={[1]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  meStyle: {
    paddingTop: 3,
    paddingHorizontal: 3,
    marginBottom: 8,
    marginHorizontal:16,
    borderRadius: 20,
    marginTop: 2,
    // justifyContent: "center",
    backgroundColor: colors.background,
    height: 74,
  },
  singleStyleWithoutShadow: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: colors.background,
    marginBottom: 8,
    borderRadius: 18,
  
  },
  singleStyle: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 4,
    shadowRadius: 5,
    marginHorizontal:16,
    backgroundColor: colors.background,
    marginBottom: 8,
    borderRadius: 18,
    marginTop: 2,
    borderWidth: 1,
    borderColor: colors.challangeBorder
    
  },
  LeatherBoardMain: {},
  LeatherBoardInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  LeatherBoardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  levelText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: typography.fonts.nexa.regular,
    color: colors.blackText,
  },
  levelIcon: {
    width: 14,
    height: 14,
  },
  userIcon: {
    width: 44,
    height: 44,
    borderRadius: 60,
    borderColor: colors.challangeBorder,
    borderWidth: 1,
    marginLeft: 13,
  },
  userName: {
    marginLeft: 12,
    fontSize: 16,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.regular,
    color: colors.blackText,
  },
  userScore: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.regular,
    color: colors.descText,
  },
  LeatherBoardLeftInner: {
    alignItems: "center",
  },
  listStyle: {
    paddingHorizontal: 1,
    flex: 1,
  },

  // Type == btn CSS

  tabContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 16,
    width: "100%",
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
    elevation: Platform.OS == 'android' && 3,
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 16,
    backgroundColor:colors.background,
    // elevation:1,
    borderWidth: 1,
    borderColor: colors.challangeBorder,
  },
  textContainer: {
    // backgroundColor: colors.error,
    // width: "80%",
  },
  title: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.regular,
    color: colors.blackText,
    marginLeft: 12,
  },

  subTitle: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.regular,
    color: colors.descText,
    marginLeft: 12,
  },
  leftContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  IconContainer: {
    maxHeight: 40,
    maxWidth: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  leftIcon: {
    maxHeight: 40,
    maxWidth: 40,
  },
  rightBigIcon: {
    maxHeight: 20,
    maxWidth: 20,
  },
  rightIcon: {
    maxHeight: 14,
    maxWidth: 7.17,
  },

  // Type == User CSS

  mainContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginHorizontal:6,
    marginBottom: 8,
    borderRadius: 16,
    width: "97%",
    backgroundColor:colors.background,
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
  deviceBox: {
    paddingHorizontal: 14,
    paddingVertical: 16,
    backgroundColor: colors.background,
    elevation: 1,
    width: "100%",
    height: 138,
    borderRadius: 16,
    // shadowColor: '#e0e0e9',
    // shadowOffset: {width: 2, height: 3},
    // shadowOpacity: 0.38,
    // shadowRadius: 16,
    marginBottom: 10,
  },
  deviceTitleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  deviceIcon: {
    borderRadius: 16,
    width: 44,
    height: 44,
  },
  textBox: {
    marginLeft: spacing.medium,
  },
  Devicetitle: {
    fontSize: 18,
    lineHeight: 22,
    color: colors.blackText,
    fontFamily: typography.fonts.nexa.regular,
    fontWeight: "400",
  },
  status: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 18,
    color: colors.success,
    fontFamily: typography.fonts.nexa.regular,
    fontWeight: "400",
  },
  deleteIcon: {
    height: 20,
    width: 20,
  },
  boxFooter: {
    marginTop: 20,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  refreshBtn: {
    backgroundColor: "#F5F7F8",
    borderRadius: 12,
    height: 42,
    width: "49%",
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  renameBtn: {
    backgroundColor: colors.connectDeviceButton,
    borderRadius: 12,
    height: 42,
    width: "49%",
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnText: {
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 18,
    color: colors.blackText,
    fontFamily: typography.fonts.nexa.regular,
    fontWeight: "400",
  },
  redeemBtn: {
    marginTop: spacing.medium,
    height: 54,
    borderWidth: 2,
    borderColor: colors.activeTabs,
    borderRadius: spacing.medium,
    width: "100%",
    position: "absolute",
    bottom: 8,
  },
  redeemBtnText: {
    color: colors.activeTabs,
    lineHeight: spacing.medium,
    fontSize: 14,
    fontFamily: typography.fonts.nexa.bold,
    fontWeight: "700",
  },
})
