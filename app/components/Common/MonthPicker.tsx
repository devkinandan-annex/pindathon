import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import moment from 'moment';


export default function MonthPicker(props) {
  const {onChange} = props;
  const endYear = 2400;
  let years: any = [];
  let months: any = [];
  let monthname = ''
  for (let currentYear = 2022; currentYear <= endYear; currentYear++) {
    // years.push(index);
    {moment.months().map((data, index: number) => {
      monthname = data+', '+currentYear;
      months.push(monthname);
    })
  }
   
  }
  
  return (
    <WheelPickerExpo
        height={240}
        width={'100%'}
        // initialSelectedIndex={3}
        items={months.map(name => ({ label: name, value: '' }))}
        onChange={( {item} ) => onChange(item.label)} 
    />
  )
}

const styles = StyleSheet.create({})