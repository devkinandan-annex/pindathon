import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '../Icon';
import { Text } from '../Text';
import { colors, typography } from '../../theme';
import Graph from '../Graph/Graph';
import AcivityDateHeader from './AcivityDateHeader';


export default function ActivityViewDay(props) {
  const { mode } = props;
  const date = new Date();
  const currentMonth = date.getMonth() + 1;

  const data = [
    {
      steps: [
        {
          day: [
            {time: "12 AM", steps: 0},
            {time: "4 AM", steps: 1000},
            {time: "8 AM", steps: 4000},
            {time: "12 PM", steps: 1500},
            {time: "1 PM", steps: 2000},
            {time: "2 PM", steps: 3000},
            {time: "4 PM", steps: 3000},
            {time: "5 PM", steps: 3000},
          ],
         

          
          
        }
        
      ],

      sleep: [
        {
          day: [
            {time: "12 AM", sleep: 0},
            {time: "4 AM", sleep: 1000},
            {time: "8 AM", sleep: 4000},
            {time: "12 PM", sleep: 1500},
            {time: "1 PM", sleep: 2000},
            {time: "2 PM", sleep: 3000},
            {time: "4 PM", sleep: 3000},
            {time: "5 PM", sleep: 3000},
          ],

          
          
        }
        
      ],

    }
    
  ];

  const HeaderDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      var day = new Date().getDay();

      return day+', '+month+' '+date
  }

  


  return (
    <View style={styles.historyContainer}>
      
      <AcivityDateHeader type="day" />
      <View style={styles.activityBody}>
        {
          mode == 'step' ? 
            <View style={styles.activityHeader}>
              <Icon icon='foot' style={styles.activityHeaderIcon} />
              <Text text="0" style={styles.activityHeaderText} />
            </View> : 
            <View style={styles.activityHeader}>
              <Icon icon='moon' style={styles.activityHeaderIcon} />
              <Text text="0" style={styles.activityHeaderText} />
              <Text text="%" style={styles.activityHeaderText} />
            </View>
        }
        {/* Import here ActivitySkeleton.tsx and call it conditionally */}
        <View style={styles.graphContainer}>
          {
            mode == 'step' ? 
              <Graph 
                data={data[0].steps[0].day} 
                x="time" 
                y="steps" 
                mode={mode} 
                domainPadding={10} 
                xlabelStyle={styles.xlabelStyle} 
                ylabelStyle={styles.ylabelStyle} 
              />
            :
              <Graph 
                data={data[0].sleep[0].day} 
                x="time" 
                y="sleep" 
                mode={mode} 
                domainPadding={10} 
                xlabelStyle={styles.xlabelStyle} 
                ylabelStyle={styles.ylabelStyle} 

              />
          }
          
        </View>

        {
          mode == 'step' ? 
            <View style={styles.activityFooter}>
              <Text tx="goalScreen.activity.totalSteps" style={styles.activityFooterTitle} />
              <Text text="21.943" style={styles.activityFooterValue} />
            </View>

        :

          <View style={styles.activityFooter}>
            <Text tx="goalScreen.activity.totalSleep" style={styles.activityFooterTitle} />
            <Text text="30%" style={styles.activityFooterValue} />
          </View>

        }
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  historyContainer: {
    marginTop: 34
  },
  
  activityBody: {
    marginTop: 16
  },
  activityHeader: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems:  'center',
    justifyContent: 'center'
  },
  activityHeaderIcon: {
    width: 28,
    height: 28,
    marginRight: 12
  },
  activityHeaderText: {
    fontSize: 40,
    lineHeight: 48,
    fontFamily: typography.fonts.nexa.bold,
    color: colors.blackText,
    // paddingLeft: 12,
    top: 6

  },
  activityFooter: {
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
    elevation: Platform.OS == 'android' && 3,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: colors.background,
    shadowOpacity: 4,
    shadowRadius: 7,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle:'solid',
    borderColor: colors.connectDeviceButton
  },
  
  activityFooterTitle: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.regular,
    color: colors.descText,
    paddingTop: 20
  },
  activityFooterValue: {
    fontSize: 28,
    lineHeight: 32,
    fontFamily: typography.fonts.nexa.bold,
    color: colors.blackText,
    paddingTop: 12,
    paddingBottom: 16
  },
  graphContainer: {
    marginBottom: 25
  },
  xlabelStyle: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: typography.fonts.nexa.regular,
    color: colors.blackText,
    // angle :45
  },
  ylabelStyle: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: typography.fonts.nexa.regular,
    fill: colors.descText,
    
  }


})