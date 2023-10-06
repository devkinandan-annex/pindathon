import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FC, useState } from 'react'
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import { Screen, Text } from '../../components'
import { colors, spacing, typography } from '../../theme'
import TopHeader from '../../components/Header/TopHeader'
import ActivityViewDay from '../../components/GoalComponents/ActivityViewDay';
import ActivityViewWeek from '../../components/GoalComponents/ActivityViewWeek';
import ActivityViewMonth from '../../components/GoalComponents/ActivityViewMonth';

interface ActivityScreenProps extends AppStackScreenProps<"Activity"> { }
export const ActivityScreen: FC<ActivityScreenProps> = observer(function ActivityScreen(_props,) {

  const {navigation, route} = _props

  const [activeTab, setActiveTab] = useState(0);
  const [mode, setMode] = useState(route.params);
  console.log("routerouterouteroute",route);

  const tabing = [
    {
      title: "goalScreen.activity.dayTab",
      id:1
    },
    {
      title: "goalScreen.activity.weekTab",
      id:2
    },
    {
      title: "goalScreen.activity.monthTab",
      id:3
    },
  ]

  const Tab = () => {
    return(
      <View style={styles.tabContainer}>        

        {
          tabing.map((val, index) => 
            <TouchableOpacity key={val.id} style={[styles.tabBtn, activeTab == index && styles.tabBtnActive]} onPress={() => setActiveTab(index)}>
              <Text tx={val.title} style={[styles.tabBtnText, activeTab == index && styles.tabBtnActiveText]} />
            </TouchableOpacity>
          )
        }

      </View>
    )
  }

  const TabComponent = () => {

    switch (activeTab) {
        case 0:
          return (<ActivityViewDay mode={mode} />)
          break;
    
        case 1:
          return (<ActivityViewWeek mode={mode} />)
          break;

        case 2:
          return (<ActivityViewMonth mode={mode} />)
          break;
        default:
            return;
            break;
    }

   

  }


  return (
    <Screen
      preset="auto"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top", "bottom"]}
    >
        <TopHeader 
            centerText="goalScreen.activity.activityPageHeading" 
            leftIcon="back" 
            onPressLeft={() => _props.navigation.goBack()}
        />

        <Tab />
        <TabComponent />

    </Screen>
  )
})
const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing.large,
        paddingHorizontal: spacing.medium,
        flex: 1,
    },
    tabContainer: {
      // marginTop: 28,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: colors.challangeBorder,
      borderWidth: 1,
      borderRadius: 14,
    },
    tabBtn: {
      paddingHorizontal: 32,
      paddingVertical: 14,
      margin: 4,
      borderRadius: 14
    },
    tabBtnActive: {
      backgroundColor: colors.activeTabs
    },
    tabBtnText: {
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 16,
      lineHeight: 18,
      color: colors.blackText
    },
    tabBtnActiveText: {
      color: colors.background
    },
})