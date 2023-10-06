import React, { FC, useState, useCallback } from 'react'
import { FlatList, StyleSheet, View, ViewStyle } from 'react-native'
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import { Text, Icon, Screen } from '../../components'
import TopHeader from '../../components/Header/TopHeader'
import color from './ColorSchema'
import { LinearGradient } from 'expo-linear-gradient'
interface CommunitylevelsProps extends AppStackScreenProps<"Communitylevels"> { }
export const Communitylevels: FC<CommunitylevelsProps> = observer(function CommunitylevelsProps(_props) {
  const [data, setData] = useState([{ number: 1, setps: '1000', sleep: '8 hours' },
  { number: 2, setps: '10.000', sleep: '8 hours' },
  { number: 3, setps: '50.000', sleep: '20 hours' },
  { number: 4, setps: '100.000', sleep: '50 hours' },
  { number: 5, setps: '200.000', sleep: '125 hours' },
  { number: 6, setps: '500.000', sleep: '250 hours' },
  { number: 8, setps: '1.000.000', sleep: '500 hours' },
  { number: 9, setps: '2.000.000', sleep: '1.000 hours' },
  { number: 10, setps: '4.000.000', sleep: '2.000 hours' },
  { number: 999, setps: '4.000.000', sleep: '2.000 hours' }])
  // current user number 8 :- 
  const [currenPosition, setCurrenPosition] = useState(8);

  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  // console.log(color.length <  data.length, "dsdsdsdsdsd" ,color.length, data.length )

  const renderList = useCallback(({ item, index }) => {
    return (<>
      <View style={[styles.boxView, {borderColor:  color.length > item.number ? color[index] :'#242775' }, {opacity: item.number > currenPosition ? 0.7 : 1}]} key={item.number}>
        <View style={styles.setpBox}>
          <Text text={item.setps} style={styles.setpTitle} />
          <Text text='steps' style={styles.setpSubTitle} />
        </View>
        <View style={[styles.radiusBox, color.length > index ? { backgroundColor: color[index] } : { backgroundColor: '#242775', }]}>
          <Icon icon='ring' style={{ tintColor: '#FFFFFF', height: 48, width: 48, }} />
          <Text text={item.number} style={[styles.centerText, { color: index < 6 ? '#242627' : '#FFFFFF' }, item.number.length > 2 && { fontSize: 16, lineHeight: 18 }]} />
        </View>
        <View style={styles.setpBox}>
          <Text text={item.sleep} style={styles.setpTitle} />
          <Text text='steps' style={styles.setpSubTitle} />
        </View>
      </View>
      {data.length - 1 !== index &&
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <LinearGradient colors={color.length > index ? [color[index], color[index + 1]] : ['#242775', '#242775']}
            start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
            style={[styles.lineSeparator]}>
            <Icon icon='communityShape' style={{ position: 'absolute', top: 3, width: 3, height: 6 }} />
            <Icon icon='communityShape' style={{ position: 'absolute', top: 15, width: 3, height: 6 }} />
          </LinearGradient>
        </View>
      }
    </>)
  }, [data])

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText="Communitylevels.pageTitle"
        customStyle={{marginTop: 12}}
      />
      <FlatList data={data} renderItem={renderList}
        // ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => index.toString()} />
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      // paddingTop: spacing.large + spacing.extraLarge,
      paddingHorizontal: spacing.medium,
    },
    boxView: {
      height: 80,
      // width: '100%',
      borderWidth: 2,
      marginBottom: 5,
      borderRadius: 16,
      flexDirection: 'row',
      paddingHorizontal: 27,
      paddingVertical: 21,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    setpBox: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 101
      // width:'auto'
    },
    setpTitle: {
      fontSize: 16,
      lineHeight: 18,
      
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.regular,
    },
    setpSubTitle: {
      marginTop: spacing.micro,
      
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
    },
    lineSeparator: {
      height: 24,
      width: 3,
      borderRadius: 50,
      // marginVertical: 4,
      marginBottom: 4,
      marginTop: 2,
      position: 'relative'
    },
    radiusBox: {
      height: 48,
      width: 48,
      marginHorizontal: 8,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center'
    },
    centerText: {
      position: 'absolute',
      fontSize: 20,
      lineHeight: 22,
      
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.regular,
    }
  })
}