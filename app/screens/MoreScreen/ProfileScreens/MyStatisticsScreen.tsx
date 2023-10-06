import { ScrollViewComponent, StyleSheet, View, ViewStyle, ScrollView, TouchableOpacity, Platform } from "react-native"
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../../navigators"
import useWellxStyle from "../../../utils/useWellxStyle"
import useAppConfig from "../../../utils/useAppConfig"
import { Icon, Screen, Text, TextField } from "../../../components"
import TopHeader from "../../../components/Header/TopHeader"
import CustomFlatList from "../../../components/Common/CustomFlatList"
import EmptyScreen from "../../../components/Common/EmptyScreen"

interface MyStatisticsScreenProps extends AppStackScreenProps<"MyStatisticsScreen"> { }
export const MyStatisticsScreen: FC<MyStatisticsScreenProps> = observer(function MyStatisticsScreen(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const [activeTab, setActiveTab] = useState(0)


  const tabing = [
    {
      title: "moreScreen.myProfile.myStatisticsScreen.tab1",
      id: 1,
    },
    {
      title: "moreScreen.myProfile.myStatisticsScreen.tab2",
      id: 2,
    },
    {
      title: "moreScreen.myProfile.myStatisticsScreen.tab3",
      id: 3,
    },
    {
      title: "moreScreen.myProfile.myStatisticsScreen.tab4",
      id: 4,
    },
  ]

  const myStatisticsData = [
    {
      stepsScore: "4.999.999",
      footIcon:'foot',
      SubTitle:'moreScreen.myProfile.myStatisticsScreen.stepsTitle',
      id:1
    },
    {
      stepsScore: "100%",
      footIcon:'moon',
      SubTitle:'moreScreen.myProfile.myStatisticsScreen.sroceTitle',
      id:2
    },
   
  ]
  const Tab = () => {
    return (
      <ScrollView style={styles.tabContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
        {tabing.map((val, index) => (
          <TouchableOpacity
            key={val.id}
            style={[styles.tabBtn, activeTab == index && styles.tabBtnActive]}
            onPress={() => setActiveTab(index)}
          >
            <Text
              tx={val.title}
              style={[styles.tabBtnText, activeTab == index && styles.tabBtnActiveText]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        customStyle={styles.customHeaderContainer}
        onPressLeft={() => _props.navigation.goBack()}
        centerText="moreScreen.myProfile.myStatisticsScreen.pageTitle"
      />
      <Tab />

      <View style={styles.stepsBoxMain}>
      {myStatisticsData.map((val, index) => (
         <View style={styles.stepsBox} key={val.id}>
         <Text style={styles.stepsTopTitle} tx={val.SubTitle}/>
         <View style={styles.stepsBoxInner}>
           <Icon icon={val.footIcon} style={{ height: 25, width: 25, }} />
           <Text style={styles.stepsTitle} text={val.stepsScore} />
         </View>
       </View>
        ))}        
      </View>

      <View style={styles.communitylevelsMain}>
         <View style={styles.communitylevelsBox}>
         <Text style={[styles.stepsTopTitle,styles.levelsTopTitle ]} tx="moreScreen.myProfile.myStatisticsScreen.levelTitle"/>
         <Icon style={styles.dropArrow} icon="downArrow" size={12} />
         <View style={styles.stepsBoxInner}>
           <Icon icon="levelsIcon" size={48} />
           <Text style={styles.levelsTitle} text="200.000 steps / 250 hours of sleep" />
         </View>
       </View>
      </View>
      
      <View style={styles.communitylevelsMain}>
         <View style={styles.communitylevelsBox}>
         <Text style={[styles.stepsTopTitle,styles.levelsTopTitle ]} tx="moreScreen.myProfile.myStatisticsScreen.levelTitle2"/>
         {/* <Icon style={styles.dropArrow} icon="downArrow" size={12} /> */}
         <View style={styles.stepsBoxInner}>
           <Icon icon="fire" size={30} />
           <Text style={styles.levelsTitle} text="12 days of steps challenge" />
         </View>
       </View>
      </View>

    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  return StyleSheet.create({
    container: {
      marginTop: 23,
      paddingHorizontal: 16,
    },
    tabContainer: {
      flexDirection: 'row',
      backgroundColor: colors.background,
      marginTop: 16,
    },
    tabBtn: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      marginHorizontal: 4,
      borderRadius: 30,
      backgroundColor: colors.connectDeviceButton,
    },
    customHeaderContainer: {
      marginBottom: 0,
    },
    tabBtnActive: {
      backgroundColor: colors.activeTabs
    },
    tabBtnText: {
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 14,
      lineHeight: 18,
      color: colors.blackText
    },
    tabBtnActiveText: {
      color: colors.background,
      fontFamily: typography.fonts.nexa.bold,

    },
    stepsBoxMain:{
marginTop:24,
    },

    communitylevelsMain:{
      marginTop:0,
    },

    
    communitylevelsBox: {
      backgroundColor: colors.background,
      paddingHorizontal: 14,
      paddingVertical: 20,
      borderRadius: 16,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 4,
      shadowRadius: 5,
      marginBottom: 16,
    },
  
    stepsBox:{
      backgroundColor: colors.background,
      paddingHorizontal: 14,
      paddingVertical: 20,
      borderRadius: 16,
      height: 112,
      borderColor: colors.activeTabs,
      borderWidth: 1,
      marginBottom: 16
    },

    stepsBoxInner: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    levelsTopTitle:{
  marginBottom:17,
    },
    levelsTitle: {
      fontSize: 14,
      lineHeight: 18,
      color: colors.blackText,
      marginLeft:12,
      fontFamily: typography.fonts.nexa.regular,

    },
    stepsTopTitle: {
      fontSize: 14,
      lineHeight: 18,
      color: colors.descText,
      marginBottom: 12,
      fontFamily: typography.fonts.nexa.regular,

    },
    stepsTitle: {
      fontSize: 40,
      lineHeight: 48,
      marginLeft: 12,
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
    },
    dropArrow:{
    position:'absolute',
    right:10,
    bottom:20,
    transform: [{ rotate: '-90deg'}]
    },
   

  })
}
