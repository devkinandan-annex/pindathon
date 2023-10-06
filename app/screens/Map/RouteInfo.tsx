import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import useWellxStyle from '../../utils/useWellxStyle';
import { Icon, Screen } from '../../components';
import WellxBtn from '../../components/Buttons/WellxBtn';

type RouteInfoProps = {

}
const RouteInfo: React.FC<RouteInfoProps> = ({ }) => {
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  return <>
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Icon icon='cureentLoc' size={24} />
        <Icon icon='dot' style={{ marginLeft: 11, height: 58, tintColor: '#242627' }} />
        <Icon icon='locationIcon' size={24} />
      </View>
      <View style={styles.rightSection}>
        <View style={styles.wrapper}>
          <Text style={{ fontSize: 16, lineHeight: 18, fontWeight: '700', marginLeft: 16, }}>My current location</Text>
        </View>
        <View style={[styles.wrapper, {marginTop:16, height:74}]}>
          <Text style={{ fontSize: 16, lineHeight: 18, fontWeight: '700', marginLeft: 16, }}>23 Avenue 23, 10316, New York, USA</Text>
        </View>
      </View>
    </View>
  </>
}

function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  return StyleSheet.create({
    container: {
      paddingTop: spacing.medium,
      paddingBottom: spacing.extraSmall,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 128
    },
    leftSection: {
      width: 36,
      // flex: 2,
      paddingVertical: 16,
      position: 'relative'
    },
    rightSection: {
      width: '90%',
      // flex: 1
    },
    wrapper: {
      backgroundColor: colors.background,
      borderRadius:spacing.medium,
      borderWidth:1,
      borderColor: colors.connectDeviceButton,
      height:56,
      elevation:0.5,
      justifyContent:'center',
      // paddingHorizontal:spacing.medium,
    },


  })
}
export default RouteInfo