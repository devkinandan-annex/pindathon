import React, { FC, useCallback } from 'react';
import { View, StyleSheet, Linking, Dimensions } from 'react-native';
import useWellxStyle from '../../utils/useWellxStyle';
import { Text, Icon } from '../../components'
import WellxBtn from "../../components/Buttons/WellxBtn"

type VoucherDetailsProps = {
  close: () => void,
  data: any
}

const VoucherDetails: FC<VoucherDetailsProps> = ({ data }) => {
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme
  const styles = getLocalStyle(theme);
  const date =  data.date + ', ' + data.time 
  return <View style={styles.container}>
      <Icon icon={data.icon} style={styles.icon} />
      <Text text={data.name}  style={styles.voucherText}/>
      <Text text={date}  style={styles.date}/>
      <View style={styles.AmountArea}>
      <Text text={data.txnType === 'remove' ? `-${data.amount}` : `+${data.amount}`}  style={[styles.amount, data.txnType === 'add' && { color: colors.success }]}/>
      <Text text={data.coin}  style={styles.coin}/>
      </View>
      {data.txnType === 'remove'  && 
      <WellxBtn 
      title="walletScreen.voucherOpen" 
      onPress={ ()=>{ Linking.openURL(data.link)}} 
      customStyle={styles.mt16} 
      disable={false} 
      btnType="primary"
      
    />

      }

  </View>
}


export default VoucherDetails;

function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  const windowWidth = Dimensions.get('window').width;
  return StyleSheet.create({
    container: {
      // width: windowWidth,
      alignItems: 'center',
      justifyContent: 'center',
    },
    voucherText: {
      marginTop:spacing.large,
      color: colors.blackText,
      fontSize: spacing.large,
      lineHeight: 28,
      fontFamily: typography.fonts.nexa.bold,
      
    },
    icon:{
      height:56, 
      width:56,
    },
    date: {
      color:colors.normalTabs,
      fontSize:14,
      lineHeight:18,
      marginTop:spacing.extraSmall
    },
    AmountArea: {
      marginTop:spacing.large,
      flexDirection:'row',
      alignItems:'center'
    }, 
    amount:{
      color: colors.blackText,
      fontSize:40, 
      lineHeight:48,
      fontFamily: typography.fonts.nexa.bold,
      
    }, 
    coin:{
      marginLeft:spacing.extraSmall,
      color: colors.normalTabs,
      fontSize:16, 
      lineHeight:18,
      fontFamily: typography.fonts.nexa.regular,
      
    },
    mt16:{
      marginTop: spacing.large
    }
  })
}