import { ImageBackground, StyleSheet, View, Platform, ViewStyle } from 'react-native'
import React, { FC, useState } from 'react'
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import { Text, Icon, Screen } from '../../components'
import TopHeader from '../../components/Header/TopHeader'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import CustomFlatList from '../../components/Common/CustomFlatList'
import WellxBtn from '../../components/Buttons/WellxBtn'
import MapView from 'react-native-maps'
interface HospitaldetailsScreenProps extends AppStackScreenProps<"HospitaldetailsScreen"> { 
  
}
export const HospitaldetailsScreen: FC<HospitaldetailsScreenProps> = observer(function HospitaldetailsScreen(_props) {
  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  const [activeIndex, setActiveIndex] = useState(1);
  const [search, setSearch] = useState("");

  const clearSearch = () => {
    setSearch("");
  }

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>


      <ImageBackground
        source={require('../../../assets/icons/common/hospitalBg.png')}
        resizeMode="contain"
        imageStyle={{ borderRadius: 1 }}
        style={styles.leatherBoardBg}
      >
        <TopHeader customStyle={styles.hospitalLogo}
          leftIcon="back"
          onPressLeft={() => _props.navigation.goBack()}
        // centerText={"moreScreen.myInsurance.title"}
        />

        <View style={styles.insuranceCard}>
          <Icon icon="hospitalIcon" size={72} />
          <Text style={styles.insuranceCardNumber} tx={'moreScreen.hospitaldetailsScreen.insuranceCardNumber'} />
        </View>
      </ImageBackground>

      <View style={styles.hospitalDetailsBox}>
        <Text style={styles.hospitalDetailsTitle} tx={'moreScreen.hospitaldetailsScreen.Address'} />

        <TouchableOpacity style={styles.DetailsBox} onPress={() => _props.navigation.navigate('MapScreen')}>
          <Icon icon="LocationIcon" size={80}  onPress={() => _props.navigation.navigate('MapScreen')}/>
          <Text style={styles.DetailsBoxTitle} text="23 Avenue 23, 10316, New York, USA" />
        </TouchableOpacity>

        <Text style={styles.hospitalDetailsTitle} tx={'moreScreen.hospitaldetailsScreen.phoneNumber'} />

        <View style={styles.DetailsBox}>
          <Icon icon="phoneIcon" size={20} />
          <Text style={styles.DetailsBoxTitle} text="+7 913 657 4556" />
        </View>

        <Text style={styles.hospitalDetailsTitle} tx={'moreScreen.hospitaldetailsScreen.openingHours'} />
        <View style={styles.DetailsBox}>
          <Icon icon="alarmIcon" size={20} />
          <Text style={styles.DetailsBoxTitle} text="08:00 - 21:00" />
        </View>




      </View>

      <WellxBtn
        title="moreScreen.hospitaldetailsScreen.callBtn"
        customStyle={styles.buttonMain}
        btnType="primary"
      />


    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      marginTop: 0,
      flex: 1

    },
    hospitalLogo: {
      marginBottom: 0,
    },
    leatherBoardBg: {
      height: 296,
      paddingHorizontal: 16,
      paddingTop: 23,
      position: 'relative',
      marginBottom: 0,
    },
    insuranceCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    insuranceCardNumber: {
      color: colors.background,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 24,
      lineHeight: 24,
      marginTop: 20,
    },
    hospitalDetailsBox: {
      marginTop: -80,
      flex: 1,
      position: 'relative',
      paddingHorizontal: 16,
      paddingVertical: 24,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      backgroundColor: colors.background,
    },
    hospitalDetailsTitle: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 18,
      lineHeight: 22,
      marginBottom: 16,
    },
    DetailsBoxTitle: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 16,
      lineHeight: 18,
      marginLeft: 16,
      width: '60%'
    },
    DetailsBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 14,
      paddingVertical: 20,
      backgroundColor: colors.background,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.connectDeviceButton,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
      elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 7,
      marginBottom: 24,
      zIndex:1
    },

    buttonMain: {
      width: '100%',
      paddingHorizontal: 16,
      bottom: 10,
    },





  })
}