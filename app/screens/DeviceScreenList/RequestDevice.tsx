import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import WellxBtn, { OuterBtn } from '../../components/Buttons/WellxBtn'
import { TextField, Text } from '../../components'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { RequestDeviceSchema } from '../../services/schema'


type RequestDeviceProps = {
  onClose: () => void
}

const RequestDevice: React.FC<RequestDeviceProps> = ({ onClose }) => {
  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  const [state, setState] = useState({ name: '', info: '', url: '' })
  const disable = (state.name.length > 0 && state.info.length > 0 && state.url.length > 0);
  const onChange = (val: string, name: string) => {
    setState((prevState => ({
      ...prevState,
      [name]: val
    })))
  }
  const { control, handleSubmit, formState: { errors }, setValue , getValues , setFocus } = useForm({
    resolver: yupResolver(RequestDeviceSchema),
    defaultValues: {
      name: '',
      info: '',
      url:''
    },
    mode:'all'
  });
  console.log(getValues(), "getValues", errors)
  const onSubmit = data => console.log(data);
  return <View style={styles.deviceContainer}>
    {/* <Controller
      name='name'
      control={control}
      rules={{
        required: true,
      }} render={({ field: { onChange, onBlur, value } }) => ( */}
        <TextField value={getValues().name}
          onChangeText={(v) => [onChange(v, 'name'), setValue('name', v)]}
          inputWrapperStyle={[styles.inputWrapper, { height: 54 }]}
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          LabelTextProps={{ style: styles.title }}
          keyboardType="default"
          labelTx="deviceScreen.nameofDevice"
          placeholder="for example: Whoop 2.0"
          onFocus={() => setFocus('name')}
          // helper={errors.name?.message}
          placeholderTextColor={colors.descText} />
      {/* )}> */}


      <TextField value={getValues().info}
        onChangeText={(v) => [onChange(v, 'info'), setValue('info', v)]}
        inputWrapperStyle={[styles.inputWrapper, { height: 110 }]}
        style={styles.textInput}
        autoCapitalize="none"
        multiline={true}
        maxLength={258}
        autoCorrect={false}
        LabelTextProps={{ style: styles.title }}
        keyboardType="default"
        onFocus={() => setFocus('info')}
        labelTx="common.moreInfo"
        // helper={errors.info?.message}
        placeholder="Enter all additional information about device here"
        placeholderTextColor={colors.descText} />
      <TextField value={getValues().url}
        onChangeText={(v) => [onChange(v, 'url'), setValue('url', v)]}
        inputWrapperStyle={[styles.inputWrapper, { height: 54 }]}
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        LabelTextProps={{ style: styles.title }}
        keyboardType="default"
        onFocus={() => setFocus('url')}
        // helper={errors.url?.message}
        labelTx="deviceScreen.linkToDevice"
        placeholder="https://exmaple.com"
        placeholderTextColor={colors.descText} />
    
      <WellxBtn title="common.submit" customStyle={styles.submit} onPress={handleSubmit(onSubmit)} btnType="primary"  disable={!disable} />
  </View>
}
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  return StyleSheet.create({
    deviceContainer: {
      marginTop: spacing.extraSmall
    },
    title: {
      fontSize: spacing.medium,
      lineHeight: 18,
      
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
      marginTop: spacing.large
    },
    inputWrapper: {
      backgroundColor: colors.background,
      borderRadius: 16,
      borderColor: colors.challangeBorder,
      position: "relative",
      paddingHorizontal: 0,
      paddingVertical: 8,
      marginTop: 8,
      borderWidth: 1
    },
    textInput: {
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      
      color: colors.blackText,
    },
    linkBtn: {
      marginTop: 8,
      height: 54,
      borderWidth: 2,
      borderColor: colors.activeTabs,
      borderRadius: spacing.medium,
      width: '100%',
    },
    linktext: {
      color: colors.activeTabs,
      lineHeight: spacing.medium,
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      fontWeight: '700'
    },
    content: {
      marginTop: spacing.large,
      fontFamily: typography.fonts.nexa.regular,
      
      color: colors.blackText,
      fontSize: 16,
      lineHeight: 22,
    },
    submit: {
      marginTop: 32,
      height: 54
    }
  })
}


export default RequestDevice