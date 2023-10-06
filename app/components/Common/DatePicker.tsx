import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
export default function DatePickerComp(props: any) {

    const {date, onDateChange} = props;
    //const [date, setDate] = useState(new Date())

    
  return (
        <DatePicker date={date} onDateChange={onDateChange} mode="date" fadeToColor={'#fff'} />    
  )
}

const styles = StyleSheet.create({})