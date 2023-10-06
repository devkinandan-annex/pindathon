import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '../Icon';
import { Text } from '../Text';
import { colors, typography } from '../../theme';
import Graph from '../Graph/Graph';
import AcivityDateHeader from './AcivityDateHeader';

export default function ActivityViewWeek(props) {
  const {mode} = props;
  const data = [
    {
      steps: [
        {
          

          week: [
            {time: "Mon", steps: 0},
            {time: "Tue", steps: 500},
            {time: "Wed", steps: 2000},
            {time: "Thu", steps: 2500},
            {time: "Fri", steps: 2000},
            {time: "Sat", steps: 4000},
            {time: "Sun", steps: 3500},
          ],

          
          
        }
        
      ],

      sleep: [
        {
          

          week: [
            {time: "Mon", sleep: 0},
            {time: "Tue", sleep: 500},
            {time: "Wed", sleep: 2000},
            {time: "Thu", sleep: 2500},
            {time: "Fri", sleep: 2000},
            {time: "Sat", sleep: 4000},
            {time: "Sun", sleep: 3500},
          ],

         
          
        }
        
      ],

    }
    
  ];

  return (
    <View style={styles.historyContainer}>
      
      <AcivityDateHeader type="week" />
      <View style={styles.activityBody}>
        {
          mode == 'step' ? 
            <View style={styles.activityHeader}>
              <Icon icon='foot' style={styles.activityHeaderIcon} />
              <Text text="200" style={styles.activityHeaderText} />
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
                data={data[0].steps[0].week} 
                x="time" 
                y="steps" 
                mode={mode} 
                domainPadding={10} 
                xlabelStyle={styles.xlabelStyle} 
                ylabelStyle={styles.ylabelStyle} 
              />
            :
              <Graph 
                data={data[0].sleep[0].week} 
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
            <View style={styles.activityFooterParent}>
              <View style={styles.activityFooterStp}>
                <Text tx="goalScreen.activity.totalSteps" style={styles.activityFooterTitle} />
                <Text text="21.943" style={styles.activityFooterValue} />
              </View>
              <View style={styles.activityFooterStp}>
                <Text tx="goalScreen.activity.avgSteps" style={styles.activityFooterTitle} />
                <Text text="21.943" style={styles.activityFooterValue} />
              </View>
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
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateHeading: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: typography.fonts.nexa.regular,
    fontWeight: '400'
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
    width: '100%',
    paddingHorizontal: 14
  },
  activityFooterStp: {
    width: '48%',
    alignItems: 'flex-start',
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
    elevation: Platform.OS == 'android' && 3,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: colors.background,
    shadowOpacity: 4,
    shadowRadius: 7,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 14,
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
  activityFooterParent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  graphContainer: {
    marginBottom: 25
  },
  xlabelStyle: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: typography.fonts.nexa.regular,
    color: colors.blackText
  },
  ylabelStyle: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: typography.fonts.nexa.regular,
    fill: colors.descText,
    
  }
})