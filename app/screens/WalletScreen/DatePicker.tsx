import React, { FC, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import useWellxStyle from '../../utils/useWellxStyle';
import { Text, Icon, Screen } from '../../components'
import { OuterBtn } from "../../components/Buttons/WellxBtn"
import DatePicker from 'react-native-date-picker';

type TextProps = {
  title: string,
  onClose: (arg: string) => void,
  setStartDate: (arg: any) => void,
  setEndDate: (arg: any) => void,
  startDate: any,
  endDate: any
}

const DatePickerModal: FC<TextProps> = ({ title, onClose, setStartDate, setEndDate, startDate, endDate}) => {
  const parentData = title == 'start' ? startDate ||  new Date() : endDate || new Date();
  const [date, setDate] = useState<Date>(parentData)
  // yyyy-MM-dd'T'HH:mm:ss.SSS'Z
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme
  const styles = getLocalStyle(theme);

  function apply() {
    if (title == 'start') {
      setStartDate(date);
    } else {
      setEndDate(date)
    }
    onClose('back')
  }
  return <View style={styles.container}>
    {/* <Text tx={`walletScreen.${[title]}`} style={styles.title} /> */}
    <View style={styles.picker}>
      <DatePicker
        androidVariant='nativeAndroid'
        mode='date'
        open={true}
        date={date}
        minimumDate={title != 'start' ? startDate || null : null}
        // title == 'start' ? startDate ||  new Date() : endDate || new Date();
        maximumDate={title == 'start' ? endDate || new Date() : new Date()}
        onDateChange={(value) => {
          setDate(value)
        }}
        onCancel={() => {
          // setOpen(false)
        }}
      />
    </View>
    <View style={styles.bottomView}>
      <OuterBtn customStyle={styles.backBtn} onPress={() => onClose('back')}>
        <Text tx='common.back' style={styles.backText} />
      </OuterBtn>

      <OuterBtn customStyle={styles.applyBtn} onPress={apply}>
        <Text tx='common.confirm' style={styles.applyText} />
      </OuterBtn>
    </View>
  </View>
}


export default DatePickerModal;


function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  const width = Dimensions.get('screen').width
  return StyleSheet.create({
    container: {
      paddingHorizontal: spacing.medium,
      // width: width,
    },
    title: {
      color: colors.blackText,
      fontSize: spacing.large,
      lineHeight: 24,
      
      fontFamily: typography.fonts.nexa.bold,
    },
    picker: {
      width: '100%',
      height: 212,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomView: {
      marginTop: spacing.extraLarge,
      flexDirection: 'row',
      justifyContent: 'space-between',

    },
    backBtn: {
      backgroundColor: colors.connectDeviceButton,
      borderRadius: 12,
      width: '49%',
      height: 40,
      marginRight: 5
    },
    backText: {
      color: colors.activeTabs,
      fontSize: 14,
      lineHeight: 14,
      
      fontFamily: typography.fonts.nexa.regular,
    },
    applyBtn: {
      backgroundColor: colors.activeTabs,
      borderRadius: 12,
      width: '49%',
      height: 40,
      marginLeft: 5
    },
    applyText: {
      color: colors.background,
      fontSize: 14,
      lineHeight: 14,
      
      fontFamily: typography.fonts.nexa.regular,
    },
  })
}