import { ImageBackground, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from ".."
import TopHeader from "../Header/TopHeader"
interface UserProfileFrameProps extends AppStackScreenProps<"Leaderboard"> {
  type: string
  userImage?: string
  userLevel: number
  onpress?:any
}
export const UserProfileFrame: FC<UserProfileFrameProps> = observer(function UserProfileFrame(
  _props,
) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const { userLevel, userImage,onpress } = _props

  function borderColors() {
    if (userLevel === 1) {
      return colors.palette.lvl1
    } else if (userLevel === 2) {
      return colors.palette.lvl2
    } else if (userLevel === 3) {
      return colors.palette.lvl3
    } else if (userLevel === 4) {
      return colors.palette.lvl4
    } else if (userLevel === 5) {
      return colors.palette.lvl5
    } else if (userLevel === 6) {
      return colors.palette.lvl6
    } else if (userLevel === 7) {
      return colors.palette.lvl7
    } else if (userLevel >= 8 && userLevel < 99) {
      return colors.palette.lvl8
    } else if (userLevel >= 99 && userLevel < 999) {
      return colors.palette.lvl99
    } else if (userLevel === 999) {
      return colors.palette.lvl999
    }
  }
  const userLevelColor = userLevel <= 5 ? colors.blackText : colors.palette.neutral100

  return (
    <Screen contentContainerStyle={styles.container}>
      {_props.type == "big" ? (
        <View style={styles.ProfileBoxMain}>
          <View style={[styles.ProfileBox, { borderColor: borderColors() }]}
          //  onPress={() => onpress()}
           >
            <View style={styles.ProfileTopShape}></View>
            <Icon icon="profileShape" style={styles.ProfileShapeLeft} />
            <Icon icon="profileShape" style={styles.ProfileShapeRight} />
            <View style={styles.ProfilePicMain}>
              <Icon icon={userImage} size={108} style={styles.ProfilePic} />
            </View>
          </View>
          <ImageBackground
            source={require("../../../assets/images/Profile-Shape.png")}
            resizeMode="contain"
            imageStyle={{ borderRadius: 100 }}
            style={[styles.ProfileBottomShape, { backgroundColor: borderColors() }]}
          >
            <Text text={String(userLevel)} style={[styles.labeltext, { color: userLevelColor }]} />
          </ImageBackground>
        </View>
      ) : (
        <TouchableOpacity style={styles.ProfileBoxMainSmall}>
          <View style={[styles.ProfileBoxSmall, { borderColor: borderColors() }]}>
            <View style={styles.ProfileTopShapeSmall}></View>
            <Icon icon="profileShape" style={styles.ProfileShapeLeftSmall} />
            <Icon icon="profileShape" style={styles.ProfileShapeRightSmall} />
            <View style={styles.ProfilePicMainSmall}>
              <Icon icon={userImage} size={57} style={styles.ProfilePic} />
            </View>
          </View>
          <ImageBackground
            source={require("../../../assets/images/Profile-Shape.png")}
            resizeMode="contain"
            imageStyle={{ borderRadius: 100 }}
            style={[styles.ProfileBottomShapeSmall, { backgroundColor: borderColors() }]}
          >
            <Text
              text={String(userLevel)}
              style={[styles.labeltextSmall, { color: userLevelColor }]}
            />
          </ImageBackground>
        </TouchableOpacity>
      )}
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      // paddingTop: spacing.large + spacing.extraLarge,
      paddingHorizontal: spacing.large,
    },
    // Large Profile css  *****************

    ProfileBoxMain: {
      backgroundColor: colors.background,
      paddingBottom: 15,
    },
    ProfileBox: {
      width: 108,
      height: 108,
      alignContent: "center",
      position: "relative",
      borderWidth: 5,
      backgroundColor: colors.background,
      borderRadius: 100,
      alignSelf: "center",
    },
    ProfilePicMain: {
      overflow: "hidden",
      width: 98,
      height: 98,
      borderRadius: 100,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
    },
    ProfileTopShape: {
      width: 10,
      height: 5,
      alignContent: "center",
      alignSelf: "center",
      backgroundColor: colors.background,
      borderRadius: 2,
      position: "absolute",
      top: -5,
    },
    ProfileShapeLeft: {
      top: 2,
      position: "absolute",
      left: 0,
      width: 17,
    },
    ProfileShapeRight: {
      top: 2,
      position: "absolute",
      right: 0,
      transform: [{ rotate: "100deg" }],
      width: 17,
    },
    ProfilePic: {
      position: "relative",
    },
    ProfileBottomShape: {
      width: 62,
      height: 36,
      borderRadius: 100,
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      paddingVertical: 5,
      position: "absolute",
      bottom: 0,
    },
    labeltext: {
      textAlign: "center",
      fontSize: 18,
      fontFamily: typography.fonts.nexa.bold,
    },

    // Small Profile css  *****************

    ProfileBoxMainSmall: {
      backgroundColor: colors.background,
      paddingBottom: 15,
      alignItems: "center",
      alignSelf: "flex-start",
    },
    ProfileBoxSmall: {
      width: 66,
      height: 66,
      alignContent: "center",
      alignItems: "center",
      position: "relative",
      borderWidth: 5,
      backgroundColor: colors.background,
      borderRadius: 100,
    },
    ProfilePicMainSmall: {
      overflow: "hidden",
      width: 57,
      height: 57,
      borderRadius: 100,
      backgroundColor: colors.background,
    },
    ProfileTopShapeSmall: {
      width: 8,
      height: 5,
      alignContent: "center",
      alignSelf: "center",
      backgroundColor: colors.background,
      borderRadius: 2,
      position: "absolute",
      top: -5,
    },
    ProfileShapeLeftSmall: {
      top: -5,
      position: "absolute",
      left: -32,
      transform: [{ rotate: "-4deg" }],
      width: 14,
    },
    ProfileShapeRightSmall: {
      top: -5,
      position: "absolute",
      right: -32,
      transform: [{ rotate: "100deg" }],
      width: 14,
    },
    ProfileBottomShapeSmall: {
      width: 38,
      height: 22,
      borderRadius: 100,
      alignContent: "center",
      alignItems: "center",
      paddingVertical: 0,
      position: "absolute",
      bottom: 10,
    },
    labeltextSmall: {
      textAlign: "center",
      fontSize: 11,
      fontFamily: typography.fonts.nexa.regular,
    },
  })
}
