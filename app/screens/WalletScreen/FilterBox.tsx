import React, { FC, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import useWellxStyle from '../../utils/useWellxStyle';
import { Text, Icon, Screen } from '../../components'
import { OuterBtn } from "../../components/Buttons/WellxBtn"
import moment from 'moment';

type FilterBoxProps = {
  // startClick: () => void,
  // setDateType: (arg: string) => void,
  onClick: (arg: string) => void,
  startDate: any,
  endDate: any

}

const FilterBox: React.FC<FilterBoxProps> = ({ onClick, startDate, endDate }) => {

  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme
  const styles = getLocalStyle(theme);
  const start =  startDate && moment(startDate).format('DD.MM.YYYY')
  const end = endDate && moment(endDate).format('DD.MM.YYYY')
  return <View style={styles.container}>
    {/* <Text tx='walletScreen.filterText' style={styles.title} /> */}
    <View style={styles.filterBox}>
      <View style={styles.startBox}>
        <Text tx='walletScreen.start' style={styles.startText} />
        <OuterBtn customStyle={styles.btn} onPress={() => onClick('start')}>
          {/* <Text text='Slect start date' style={styles.btnText} /> */}
          {start.length > 0 ?
            <Text text={start} style={styles.btnText} />
            : <Text text='Slect start date' style={styles.btnText} />}
        </OuterBtn>

        <OuterBtn customStyle={styles.cancelBtn} onPress={() => onClick('')}>
          <Text tx='common.cancel' style={styles.cancelText} />
        </OuterBtn>
      </View>
      <View style={styles.endBox} >
        <Text tx='walletScreen.end' style={styles.endText} />
        <OuterBtn customStyle={styles.btn} onPress={() => onClick('end')} >
          {end.length > 0 ?
            <Text text={end} style={styles.btnText} />
            : <Text text='Slect end date' style={styles.btnText} />}
        </OuterBtn>

        <OuterBtn customStyle={styles.applyBtn} onPress={() => onClick('')} disable={(start.length > 0 && end.length > 0 ? false : true)}>
          <Text tx='common.apply' style={styles.applyText} />
        </OuterBtn>
      </View>

    </View>
  </View>
}


export default FilterBox
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  return StyleSheet.create({
    container: {
      paddingHorizontal: spacing.medium
    },
    title: {
      color: colors.blackText,
      fontSize: spacing.large,
      lineHeight: 24,
      
      fontFamily: typography.fonts.nexa.bold,
    },
    filterBox: {
      marginTop: spacing.large,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'

    },
    startBox: {
      width: '51%',
      marginRight: 5,
    },
    endBox: {
      width: '51%',
      marginLeft: 5,
    },
    startText: {
      color: colors.blackText,
      fontSize: spacing.medium,
      lineHeight: 18,
      
      fontFamily: typography.fonts.nexa.bold,
    },
    endText: {
      color: colors.blackText,
      fontSize: spacing.medium,
      lineHeight: 18,
      
      fontFamily: typography.fonts.nexa.regular,
    },
    btn: {
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      borderRadius: spacing.small,
      paddingHorizontal: 14,
      paddingVertical: 11,
      backgroundColor: colors.background,
      marginTop: spacing.extraSmall,
      width: '100%',
      textAlign: 'start',
      alignItems: 'flex-start'
    },
    btnText: {
      color: colors.normalTabs,
      fontSize: 14,
      lineHeight: 18,
      
    },
    cancelBtn: {
      marginTop: spacing.extraLarge,
      backgroundColor: colors.connectDeviceButton,
      borderRadius: 12,
      width: '100%',
      height: 40
    },
    cancelText: {
      color: colors.activeTabs,
      fontSize: 14,
      lineHeight: 14,
      
      fontFamily: typography.fonts.nexa.regular,
    },
    applyBtn: {
      backgroundColor: colors.activeTabs,
      marginTop: spacing.extraLarge,
      borderRadius: 12,
      width: '100%',
      height: 40
    },
    applyText: {
      color: colors.background,
      fontSize: 14,
      lineHeight: 14,
      
      fontFamily: typography.fonts.nexa.regular,
    },

  })
}