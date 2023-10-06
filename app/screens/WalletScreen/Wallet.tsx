import { StyleSheet, View, ViewStyle } from 'react-native'
import React, { FC, useState, useRef } from 'react'
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import { Text, Icon, Screen } from '../../components'
import TopHeader from '../../components/Header/TopHeader'
import { OuterBtn } from '../../components/Buttons/WellxBtn'
import BottomSheet from "../../components/BottomSheet/BottomSheet"
import MonthlyCalendar from "../GoalsScreen/MonthlyCalendar";
import VoucherDetails from './VoucherDetails'
import FilterBox from './FilterBox'
import DatePicker from './DatePicker'
// import GoalNotSetScreen from '../GoalsScreen/GoalNotSetScreen'
import EmptyScreen from '../../components/Common/EmptyScreen'
// import CustomSectionList from '../../components/common/CustomSectionList'
import CustomSectionList from '../../components/Common/CustomSectionList'

const data = [
  {
    title: "Yesterday",
    data: [{ name: 'Company Voucher', time: '12:23', amount: '123', coin: 'xCoins', icon: 'coin', id: 'ABC001', txnType: 'remove', date:'23 Nov 2022', link:'https://www.google.com/' },
    { name: 'Company Voucher', time: '12:23', amount: '123', coin: 'AED', icon: 'filterBlue', id: 'ABC002', txnType: 'remove', date:'23 Nov 2022', link:'https://www.google.com/'  }]
  },
  {
    title: "23 October",
    data: [{ name: 'Income', time: '14:56', amount: '325', coin: 'xCoins', icon: 'income', id: 'ABC003', txnType: 'add', date:'23 October 2022' , link:'https://www.google.com/' },
    { name: 'Company Voucher', time: '12:23', amount: '123', coin: 'xCoins', icon: 'filterBlue', id: 'ABC004', txnType: 'remove', date:'23 October 2022' , link:'https://www.google.com/' }]
  }
];

interface WalletScreenProps extends AppStackScreenProps<"Wallet"> { }
export const WalletScreen: FC<WalletScreenProps> = observer(function LeaderboardScreen(_props) {
  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  const [currentData, setCurrentData] = useState<any>({})
  const refRBSheet = useRef(null);
  const refRBSheet1 = useRef(null);
  const refRBSheet2 = useRef(null);
  const [dateType, setDateType] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const openModal = (val: any) => {
    setCurrentData(val)
    refRBSheet.current.open()
  }
  const onClose = () => {
    refRBSheet.current.close()
  }
  const modalHandle = (val: string) => {
    if (val === '') {
      refRBSheet1.current.close()
      refRBSheet2.current.close()
    } else if (val === 'start' || val === 'end') {
      // refRBSheet1.current.close();
      setDateType(val)
      refRBSheet2.current.open();
    } else {
      refRBSheet1.current.open();
      refRBSheet2.current.close();
    }

  }
  function reset(){
    setStartDate('');
    setEndDate('')
  }

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>

      <BottomSheet
        RenderComponent={<VoucherDetails close={onClose} data={currentData} />}
        refRBSheet={refRBSheet}
        height={currentData?.txnType == 'add' ? 300 : 346}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
      />
      <BottomSheet
        RenderComponent={<FilterBox onClick={modalHandle} startDate={startDate} endDate={endDate}/>}
        refRBSheet={refRBSheet1}
        headerTitleTx='walletScreen.filterText'
        height={262}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
        type='filter'
        optionClick ={reset}
      />
      <BottomSheet
        RenderComponent={<DatePicker title={dateType} onClose={modalHandle} setStartDate={setStartDate} setEndDate={setEndDate} startDate={startDate} endDate={endDate} />}
        refRBSheet={refRBSheet2}
        height={370}
        headerTitleTx={`walletScreen.${[dateType]}`}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
      />
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.navigate('MainTab')}



        centerText="walletScreen.pageTitle"
      />

      <View style={styles.balanceCard}>
        <View style={styles.balanceWrapper}>
          <Text text="My balance" style={styles.balanceTitle} />
          <Text text="0" style={styles.balanceAmount} />
          <Text text="xCoins" style={styles.coinName} />
        </View>
        <Icon icon="coin" style={styles.coinIcon} />
      </View>
      <OuterBtn title="walletScreen.buttonText" customStyle={styles.redeemBtn} textStyle={styles.redeemBtnText} />

      <View style={styles.transactionsWrapper}>
        <Text tx='walletScreen.transactions' style={styles.transactionsText} />
        <OuterBtn customStyle={styles.filterBtn} onPress={() => refRBSheet1.current.open()}>
          <Icon icon="filterBlue" style={styles.filterIcon} />
        </OuterBtn>
      </View>
      {data.length === 0 ? <>
      <View style={styles.ESMSpace} /> 
      <EmptyScreen Icon="walletESM" title="walletScreen.ESMTitle" subTittle="walletScreen.ESMSubTitle"/> 
      </> 
      :

        <View style={styles.mt16}>
          <CustomSectionList data={data} type='' openModal={openModal} />
        </View>
      }
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  return StyleSheet.create({
    container: {
      paddingHorizontal: spacing.medium,
      paddingTop: spacing.small
    },
    coinIcon: {
      width: 135,
      height: 135
    },
    balanceCard: {
      backgroundColor: colors.activeTabs,
      width: "100%",
      height: 154,
      borderRadius: spacing.large,
      flexDirection: 'row',
      paddingTop: 8,
      paddingLeft: spacing.large,
      paddingRight: 19,
      justifyContent: 'space-between'
    },
    balanceWrapper: {
      marginTop: spacing.medium
    },
    balanceTitle: {
      color: colors.background,
      lineHeight: spacing.medium,
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      fontWeight: '800'
    },
    balanceAmount: {
      color: colors.background,
      marginTop: spacing.large,
      lineHeight: spacing.huge,
      fontSize: 40,
      fontFamily: typography.fonts.nexa.bold,
      fontWeight: '800'
    },
    coinName: {
      color: colors.connectDeviceButton,
      lineHeight: spacing.medium,
      fontSize: 14,
      fontFamily: typography.fonts.nexa.regular,
      fontWeight: '400'
    },
    redeemBtn: {
      marginTop: spacing.medium,
      height: 54,
      borderWidth: 2,
      borderColor: colors.activeTabs,
      borderRadius: spacing.medium,
      width: '100%'
    },
    redeemBtnText: {
      color: colors.activeTabs,
      lineHeight: spacing.medium,
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      fontWeight: '700'
    },
    transactionsWrapper: {
      flexDirection: 'row',
      marginTop: spacing.extraLarge,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    transactionsText: {
      fontSize: spacing.large,
      lineHeight: 28,
      fontFamily: typography.fonts.nexa.bold,
      
      color: colors.blackText
    },
    filterBtn: {
      borderWidth: 1,
      borderColor: '#E7ECEE',
      borderRadius: spacing.medium,
      padding: 17
    },
    filterIcon: {
      width: 17,
      height: 17
    },
    mt16: {
      marginTop: spacing.medium
    },
    wrapper: {
      backgroundColor: "rgba(36, 38, 39, 0.4)",
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    ESMSpace:{
      marginTop:72
    }
  })
}