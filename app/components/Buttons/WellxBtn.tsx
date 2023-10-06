import { StyleProp, StyleSheet, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { colors, typography } from '../../theme'
import { Text } from '../Text'


interface BtnWrapperProps extends ViewProps {
  disable: boolean
  customStyleInner: StyleProp<ViewStyle>
}

const PrimaryBtnWrapper: React.FC<BtnWrapperProps> = (props) => {
  const { disable, customStyleInner } = props;
  return <LinearGradient
    start={[0.0, 0.0]}
    end={[1.0, 1.0]}
    colors={[colors.blue, colors.red]}
    style={[customStyleInner ? customStyleInner : styles.tapButton, disable ? styles.disable : styles.enable]}

  >
    {props.children}
  </LinearGradient>
}
export function OuterBtn(props) {
  const { title, onPress, disable, customStyle, textStyle, children } = props;
  const btnText = <Text tx={title} style={textStyle} />
  return <TouchableOpacity style={[styles.outerBtn, customStyle, disable ? styles.disable : styles.enable]} onPress={onPress} disabled={disable}>
    {children ? children : btnText}
  </TouchableOpacity>
}


const SecondaryBtnWrapper: React.FC<BtnWrapperProps> = (props) => {
  const { disable, customStyleInner } = props;
  return <LinearGradient
    start={[0.0, 0.0]}
    end={[1.0, 1.0]}
    colors={[colors.blue, colors.blue]}
    style={[customStyleInner ? customStyleInner : styles.tapButton, disable ? styles.disable : styles.enable]}

  >
    {props.children}
  </LinearGradient>
}

const NormalBtnWrapper: React.FC<BtnWrapperProps> = (props) => {
  const { disable, customStyleInner } = props;
  return <View style={[customStyleInner ? customStyleInner : styles.nomalButtonWrapper, disable ? styles.disable : styles.enable]}>
    {props.children}
  </View>
}

const OuterLineBtnWrapper: React.FC<BtnWrapperProps> = (props) => {
  const { disable, customStyleInner } = props;
  return <View style={[customStyleInner ? customStyleInner : styles.lineButtonWrapper, disable ? styles.disable : styles.enable]}>
    {props.children}
  </View>
}



export default function WellxBtn(props) {
  const { title, onPress, disable, customStyle, customStyleInner, customStyleText, btnType, children, simpleTitle} = props;


  let buttonTextStyle = null;

  buttonTextStyle = btnType === "primary" && styles.buttonText ||
    btnType === "blue" && styles.buttonText ||
    btnType === "normal" && styles.buttonTextNormal ||
    btnType === "line" && styles.buttonTextLine;

  const btnText = title ?  <Text tx={title} style={[buttonTextStyle, customStyleText]} /> : <Text text={simpleTitle} style={[buttonTextStyle, customStyleText]} />
  const BtnWrapper = btnType === "primary" && PrimaryBtnWrapper ||
    btnType === "blue" && SecondaryBtnWrapper ||
    btnType === "normal" && NormalBtnWrapper ||
    btnType === "line" && OuterLineBtnWrapper;

  return (
    <TouchableOpacity style={[styles.buttonMain, customStyle]} onPress={onPress} disabled={disable}>
      <BtnWrapper disable={disable} customStyleInner={customStyleInner}>
        {children ? children: btnText}
      </BtnWrapper>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  outerBtn: {
    // width: '100%',
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMain: {
    width: '100%',
    alignSelf: "center"
  },
  tapButton: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 16,
  },
  buttonText: {
    color: colors.background,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 18,
    fontSize: 16,
    textAlign: "center"
  },
  disable: {
    opacity: 0.4
  },
  enable: {
    opacity: 1
  },

  nomalButtonWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 16,
    backgroundColor: colors.connectDeviceButton
  },
  lineButtonWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.blue
  },
  buttonTextNormal: {
    fontFamily: typography.fonts.nexa.bold,
    
    lineHeight: 18,
    fontSize: 16,
    textAlign: "center",
    color: colors.blackText
  },
  buttonTextLine: {
    fontFamily: typography.fonts.nexa.bold,
    
    lineHeight: 18,
    fontSize: 16,
    textAlign: "center",
    color: colors.blue
  }


})