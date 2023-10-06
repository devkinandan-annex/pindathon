import { ImageBackground, StyleSheet, View, ViewStyle } from "react-native"
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"

import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import CustomFlatList from "../../components/Common/CustomFlatList"
import WellxBtn from "../../components/Buttons/WellxBtn"
import MapView from "react-native-maps"
interface HospitalScreenProps extends AppStackScreenProps<"myInsurance"> {

}
export const HospitalScreen: FC<HospitalScreenProps> = observer(function HospitalScreen(props?:any) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)


  const dummyArray = [
    {
      leftIcon: "hospitalIcon",
      tittle: "moreScreen.hospitalScreen.HospitalTitle",
      subTitle:'12.12.2022',
      rightIcon: "phoneIcon",
      routeName: "HospitaldetailsScreen",
    },
    {
      leftIcon: "ccnIcon",
      tittle: "moreScreen.hospitalScreen.HospitalTitle2",
      subTitle:'12.12.2022',
      rightIcon: "phoneIcon",
      routeName: "HospitaldetailsScreen",
    },
    {
      leftIcon: "medIcon",
      tittle: "moreScreen.hospitalScreen.HospitalTitle3",
      subTitle:'12.12.2022',
      rightIcon: "phoneIcon",
      routeName: "HospitaldetailsScreen",
    },
    {
      leftIcon: "familyIcon",
      tittle: "moreScreen.hospitalScreen.HospitalTitle4",
      subTitle:'12.12.2022',
      rightIcon: "phoneIcon",
      routeName: "HospitaldetailsScreen",
    },
    {
      leftIcon: "hospitalIcon",
      tittle: "moreScreen.hospitalScreen.HospitalTitle",
      subTitle:'12.12.2022',
      rightIcon: "phoneIcon",
      routeName: "HospitaldetailsScreen",
    },
    {
      leftIcon: "ccnIcon",
      tittle: "moreScreen.hospitalScreen.HospitalTitle2",
      subTitle:'12.12.2022',
      rightIcon: "phoneIcon",
      routeName: "HospitaldetailsScreen",
    },
    {
      leftIcon: "medIcon",
      tittle: "moreScreen.hospitalScreen.HospitalTitle3",
      subTitle:'12.12.2022',
      rightIcon: "phoneIcon",
      routeName: "HospitaldetailsScreen",
    },
    {
      leftIcon: "familyIcon",
      tittle: "moreScreen.hospitalScreen.HospitalTitle4",
      subTitle:'12.12.2022',
      rightIcon: "phoneIcon",
      routeName: "HospitaldetailsScreen",
    },
    
  ]

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>

<CustomFlatList data={dummyArray} type="btn" bigButton="true" onpress={props.props.navigation.navigate} />

    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  return StyleSheet.create({
    container: {

    },

  })
}
