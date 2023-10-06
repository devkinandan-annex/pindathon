import { StyleSheet, TouchableOpacity, View } from "react-native"
import React from "react"
import { Icon } from "../Icon"
import { colors, typography } from "../../theme"
import { Text } from "../Text"

export default function TopHeader(props) {
  const {
    navigation,
    onPressLeft,
    leftIcon,
    leftTitle,
    rightIcon,
    onPressRight,
    rightText,
    centerIcon,
    centerText,
    textStyleCenter,
    centerIconStyle,
    HeaderText,
    customStyle,

    backIconColor,
    backButtonCustomStyle,

    customRightStyle,
    customRightIconStyle,
    customRightIconCss,
  } = props
  return (
    <View style={[styles.header, customStyle]}>
      {leftIcon && (
        <TouchableOpacity style={[styles.backBtn, backButtonCustomStyle]} onPress={onPressLeft}>
          <Icon
            size={22}
            icon={leftIcon}
            color={backIconColor ? backIconColor : colors.blackText}
          />
        </TouchableOpacity>
      )}
      {leftTitle && (
        <TouchableOpacity style={styles.leftTitleContainer} onPress={onPressLeft}>
          <Text tx={leftTitle} style={styles.leftTitleText} />
        </TouchableOpacity>
      )}
      {centerIcon && (
        <View style={[styles.logo,  { right: (!rightIcon || !rightText) ? 0 : 30 }]}>
          <Icon icon={centerIcon} style={centerIconStyle} />
        </View>
      )}
      {HeaderText && (
        <View style={styles.logo}>
          <Text text={HeaderText} style={styles.centerText} />
        </View>
      )}
      {centerText && (
        <View style={styles.centerTextMain}>
          <Text tx={centerText} style={[styles.centerText, textStyleCenter]} />
        </View>
      )}
      {rightText && (
        <TouchableOpacity style={styles.skipCont} onPress={onPressRight}>
          <Text tx={rightText} style={styles.skipBtn} />
        </TouchableOpacity>
      )}
      {rightIcon && (
        <TouchableOpacity style={[styles.rightIcon, customRightStyle]} onPress={onPressRight}>
          <Icon
            icon={rightIcon}
            style={[styles.icon, customRightIconCss]}
            color={customRightIconStyle}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 24,
    // marginBottom: 48,
    flexDirection: "row",
  },
  backBtn: {
    backgroundColor: colors.connectDeviceButton,
    padding: 8,
    height: 40,
    width: 40,
    borderRadius: 12,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  skipCont: {},
  skipBtn: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.bold,
    
    color: colors.blue,
  },
  centerText: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.regular,
    
    color: colors.blackText,
  },
  leftTitleContainer: {},
  leftTitleText: {
    fontSize: 36,
    lineHeight: 42,
    fontFamily: typography.fonts.nexa.bold,
    // 
    color: colors.blackText,
  },
  icon: {
    width: 24,
    height: 24,
  },

  centerTextMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    right: 0,
  },

  rightIcon: {
    backgroundColor: colors.connectDeviceButton,
    height: 40,
    width: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
})
