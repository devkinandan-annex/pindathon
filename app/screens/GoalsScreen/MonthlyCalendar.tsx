import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useMemo } from "react"
import moment from "moment"
import { colors, typography } from "../../theme"
import { Icon } from "../../components"

type MonthlyCalendartProps = {
  close?: () => any
  containerStyle?: any,
  CalendarTittle?:any,
  rightIcon?: string
  Titlecontainer?: any
  Streak?: number
}

const MonthlyCalendar: React.FC<MonthlyCalendartProps> = ({
  close,
  containerStyle,
  CalendarTittle,
  rightIcon,
  Titlecontainer,
  Streak,
}) => {
  
  const dayData = []
  const RenderLoop = useMemo(() => {
    let myDays = []
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate()
    for (let i = 1; i <= totalDays; i++) {
      dayData.push(i)
      myDays.push(
        <View key={i}>
          <TouchableOpacity style={styles.dateContainer}>
          
            <Icon icon={"goalComplete"} />
            <Text style={styles.date}>{i}</Text>
          
        </TouchableOpacity>
        </View>
        
      )
    }
    return myDays
  }, [])
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const d = new Date()
  let month = monthName[d.getMonth()]
  const y = new Date()
  let year = y.getFullYear()
  return (
    <View style={containerStyle}>
      {/* <View style={Titlecontainer}>
        <Text style={styles.title}>{CalendarTittle}</Text>
      </View> */}

      <View style={styles.calenderInner}>
        {/* <Text>{RenderLoop}</Text> */}
        <Text>{RenderLoop}</Text>
      </View>
      {Streak && (
        <View style={styles.streakContainer}>
          <Icon icon="fire" style={styles.streakIcon} />

          <Text style={styles.streakText}>{Streak} Day Streak</Text>
        </View>
      )}
    </View>
  )
}

export default MonthlyCalendar
const gap = 33
const itemPerRow = 7
const totalGapSize = (itemPerRow - 1) * gap
const windowWidth = Dimensions.get('window').width - 50
const childWidth = (windowWidth - totalGapSize) / itemPerRow

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: "100%",
  },
  Titlecontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    paddingRight: 17,
    fontSize: 24,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 28,
    color: colors.blackText,
  },
  dateContainer: {
    // flexDirection: "column",
     alignItems: "center",
    alignSelf: "center",
    // // alignContent: "center",
    // textAlign: "center",
    // // width: '25%',
    // marginBottom: 21,
    // // paddingHorizontal: 15

    width: childWidth,
    height: childWidth,
    marginVertical: (gap / 2),
    alignContent: "center",
    marginHorizontal: (gap / 2)
  },
  date: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 16,
    color: colors.descText,
    paddingTop: 4,
  },
  streakContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    right: 45,
    alignItems: "center"
  },
  streakText: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.bold,
    
    color: colors.blackText,
  },
  streakIcon: {
    height: 24,
    width: 24,
    marginRight: 8
  },
  calenderInner: {
    marginTop: 24,
    // flexDirection:"row",
    // // justifyContent: "space-between",
    // // position:'absolute',
    // alignContent:'center',
    // alignSelf:'center',
    // gap: 20,
    // // flex: 1,
    // display: "flex"

    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
    alignItems: "center",
    alignSelf: "center",
  }
})
