import React, { FC, useCallback } from 'react';
import { SectionList, View, StyleSheet, TouchableOpacity } from 'react-native';
import useWellxStyle from '../../utils/useWellxStyle';
import { Text, Icon, Screen } from '..'

// interface DataProps {
//   title: string,
//   data: any
// }
type CustomSectionListProps = {
  data: any[],
  type: string,
  openModal: (arg: any) => void,
}

const CustomSectionList: FC<CustomSectionListProps> = ({ data, openModal }) => {
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme
  const styles = getLocalStyle(theme);
  const Item = useCallback(({ value }) => {
    return (
      <TouchableOpacity style={styles.keyItem} key={value.id} onPress={() => openModal(value)} >
        <View style={styles.row}>
          <Icon icon={value.icon} style={styles.voucherIcon} />
          <View style={styles.voucherDetails}>
            <Text text={value.name} style={styles.voucherText} />
            <Text text={value.time} style={styles.voucherTime} />
          </View>
        </View>
        <View >
          <Text text={value.txnType === 'remove' ? `-${value.amount}` : `+${value.amount}`} style={[styles.voucherAmount, value.txnType === 'add' && { color: colors.success }]} />
          <Text text={value.coin} style={styles.voucherCoin} />
        </View>
      </TouchableOpacity>
    )
  }, [data]);

  return <SectionList
    sections={data}
    keyExtractor={(item, index) => item + index}
    renderItem={({ item }) => <Item value={item} />}
    renderSectionHeader={({ section }) => {
      const index = data.indexOf(section)
      return <Text style={[styles.header, index !== 0 && styles.mt16]}>{section.title}</Text>
    }}
  />
}
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      display: 'flex'
    },
    voucherDetails: {
      marginLeft: spacing.small
    },
    voucherText: {
      color: colors.blackText,
      fontSize: spacing.medium,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      
    },
    voucherAmount: {
      color: colors.blackText,
      fontSize: 18,
      lineHeight: 22,
      fontFamily: typography.fonts.nexa.bold,
      
    },
    voucherTime: {
      color: colors.normalTabs,
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      
      marginTop: spacing.tiny
    },
    voucherCoin: {
      color: colors.normalTabs,
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      
    },
    keyItem: {
      color: colors.blackText,
      backgroundColor: colors.background,
      marginBottom: spacing.extraSmall,
      paddingHorizontal: spacing.medium,
      paddingVertical: 20,
      height: 80,
      elevation: 0.5,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      borderRadius: spacing.medium,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    header: {
      color: colors.blackText,
      fontSize: 18,
      fontFamily: typography.fonts.nexa.bold,
      
      lineHeight: 22,
      marginBottom: spacing.medium
    },
    title: {
      fontSize: 24
    },
    mt16: {
      marginTop: spacing.medium
    },
    voucherIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'black'
    }
  });
}


export default CustomSectionList