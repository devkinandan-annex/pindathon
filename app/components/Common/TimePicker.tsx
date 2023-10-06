import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'


export default function TimePicker(props) {
  const {date, onDateChange} = props;
  return (
    <DatePicker date={date} onDateChange={onDateChange} mode="time" />
  )
}

const styles = StyleSheet.create({})