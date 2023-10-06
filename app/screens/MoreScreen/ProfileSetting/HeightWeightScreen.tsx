import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import React, { FC, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../../navigators"
import useAppConfig from "../../../utils/useAppConfig"
import useWellxStyle from "../../../utils/useWellxStyle"
import { Icon, Screen, Text } from "../../../components"
import TopHeader from "../../../components/Header/TopHeader"
import BottomSheet from "../../../components/BottomSheet/BottomSheet"
import HeightPicker from "./HeightPicker"
import WeightPicker from "./WeightPicker"

interface HeightWeightScreenProps extends AppStackScreenProps<"HeightWeightScreen"> {}
export const HeightWeightScreen: FC<HeightWeightScreenProps> = observer(function HeightWeightScreen(
  _props,
) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const refRBSheet = useRef(null);
  const refWeight = useRef(null);
  const [cureentHeight , setHeight] = useState<number>(180);
  const [cureentWeight , setWeight] = useState<number>(80)
  
  const CITIES = '30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60'.split(',');


  const dummyComponent = () => {
    return (
      <View
        style={{ alignItems: "center", alignSelf: "center", alignContent: "center", marginTop: 20 }}
      >
        
        <WheelPickerExpo
          height={300}
          width={150}
          selectedStyle={ {borderColor: 'grey', borderWidth: 2,} }
          initialSelectedIndex={3}
          items={CITIES.map(name => ({ label: name, value: '' }))}
          onChange={({ item }) => console.log(item.label)} />
        <View style={styles.unfollowFooter}>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text tx="moreScreen.myProfile.profileSettings.HeightWeightScreen.back" style={styles.buttonCancelTitle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonConfirm}>
            <Text tx="moreScreen.myProfile.profileSettings.HeightWeightScreen.confirm" style={styles.buttontitle} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const openModal = () => {
    refRBSheet.current.open()
  }
  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <BottomSheet
        RenderComponent={<HeightPicker activeNumber={cureentHeight}  setHeight={setHeight} onClose={() => refRBSheet.current?.close()}/>}
        refRBSheet={refRBSheet}
        height={358}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
        headerTitleTx="moreScreen.myProfile.profileSettings.setYourHeight"
        type= "cross"
      />
      <BottomSheet
        RenderComponent={<WeightPicker activeNumber={cureentWeight}  setHeight={setWeight} onClose={() => refWeight.current?.close()}/>}
        refRBSheet={refWeight}
        height={358}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
        headerTitleTx="moreScreen.myProfile.profileSettings.setYourHeight"
        type= "cross"
      />
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText="moreScreen.myProfile.profileSettings.heightWeight"
        customStyle={{marginTop: 12}}
      />

      <Text text="Height" style={styles.title} />

      <TouchableOpacity style={styles.btn} onPress={() => openModal()}>
        <Text text={`${cureentHeight} cm`} style={styles.btnText} />
        <Icon icon="rightArrowBig" style={styles.rightIcon} />
      </TouchableOpacity>

      <Text text="Weight" style={[styles.title, {marginTop: 24}]} />


      <TouchableOpacity style={styles.btn} onPress={() => refWeight.current.open()}>
        <Text text={`${cureentWeight} Kg`} style={styles.btnText} />

        <Icon icon="rightArrowBig" style={styles.rightIcon} />
      </TouchableOpacity>
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    BtnContainer: {},
    title: {
      // marginTop: 24,
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.bold,
      
      color: colors.blackText,
    },
    btn: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 22,
      paddingHorizontal: 20,
      margin: 8,
      borderWidth: 1,
      borderColor: colors.descText,
      borderRadius: 16,
      width: "100%",
      alignItems: "center",
      alignSelf: "center",
    },
    btnText: {
      fontSize: 14,
      lineHeight: 14,
      fontFamily: typography.fonts.nexa.bold,
      
      color: colors.blackText,
    },
    rightIcon: {
      maxHeight: 14,
      maxWidth: 7.17,
      transform: [{ rotate: "90deg" }],
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    wrapper: {
      backgroundColor: "rgba(36, 38, 39, 0.4)",
    },

    unfollowFooter: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
      marginTop: 20,
    },

    buttonCancel: {
      paddingTop: 14,
      paddingBottom: 12,
      backgroundColor: colors.connectDeviceButton,
      width: "47%",
      alignItems: "center",
      borderRadius: 12,
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
      
      color: colors.background,
      paddingVertical: 7,
    },
    buttonCancelTitle: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 14,
      
      color: colors.activeTabs,
      paddingVertical: 7,
    },
  })
}
