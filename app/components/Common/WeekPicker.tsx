import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import moment from 'moment';

export default function WeekPicker(props) {
  
  const {onChange} = props;

  let weeks = [];
  let weekName = '';

  for (let index = 0; index < 20; index++) {
    const weekStart = moment().add(index, 'week').startOf('week').format('D');
    const weekEnd = moment().add(index, 'week').endOf('week').format('D');
    const weekMonth = moment().add(index, 'week').startOf('week').format('MMM, YYYY');
    weekName = weekStart+' - '+weekEnd+' '+weekMonth;
    weeks.push(weekName)
    
  }
  
  return (
    <WheelPickerExpo
        height={240}
        width={'100%'}
        // initialSelectedIndex={3}
        items={weeks.map(name => ({ label: name, value: '' }))}
        onChange={( {item} ) => onChange(item.label)} 
        // selectedStyle={ {borderColor: 'red', borderWidth: 25} }
        
    />
  )
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: 'red'
  }
})