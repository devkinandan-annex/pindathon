import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import { Icon, Screen, Text } from "../../../components"
import useWellxStyle from "../../../utils/useWellxStyle"
type HeightPickerProps = {
  activeNumber: number;
  setHeight: (arg: number) => void,
  onClose: () => void
}

const HeightPicker: React.FC<HeightPickerProps> = ({ activeNumber = 180, setHeight, onClose}) => {
  let data = [];
  for (let index = 29; index < 272; index++) {
    const cureentId = index;
    data.push(cureentId);
  }
  const activeIndex = data.indexOf(activeNumber);
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const styles = getLocalStyle(theme)

  return <View style={{ alignItems: "center", alignSelf: "center", alignContent: "center", marginTop: 20 }}>
    <WheelPickerExpo
      height={212}
      width={150}
      initialSelectedIndex={activeIndex}
      selectedStyle={{borderColor:'#DCD9FB', borderWidth:2 }}
      items={data.map(name => ({ label: name, value: '' }))}
      onChange={({ item }) => setHeight(Number(item.label))} />
      <Text text="cm" style={{position:'absolute', top:96, fontSize:18, right:Dimensions.get('screen').width /2 - 80, lineHeight:22, color:'#242627' }} />
    <View style={styles.unfollowFooter}>
      <TouchableOpacity style={styles.buttonCancel} onPress={onClose}>
        <Text tx="moreScreen.myProfile.profileSettings.HeightWeightScreen.back" style={styles.buttonCancelTitle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonConfirm} onPress={onClose}>
        <Text tx="moreScreen.myProfile.profileSettings.HeightWeightScreen.confirm" style={styles.buttontitle} />
      </TouchableOpacity>
    </View>
  </View>
}
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    unfollowFooter: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
      marginTop: 20,
    },
    buttonConfirm: {
      width: "47%",
      paddingBottom: 12,
      paddingTop: 14,
      backgroundColor: colors.activeTabs,
      alignItems: "center",
      borderRadius: 12,
    },
    buttontitle: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 14,
      fontWeight: "700",
      color: colors.background,
      // paddingVertical: 7,
    },
    buttonCancelTitle: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 14,
      fontWeight: "700",
      color: colors.activeTabs,
      // paddingVertical: 7,
    },
    buttonCancel: {
      paddingTop: 14,
      paddingBottom: 12,
      backgroundColor: colors.connectDeviceButton,
      width: "47%",
      alignItems: "center",
      borderRadius: 12,
    },
  })
}

export default HeightPicker;