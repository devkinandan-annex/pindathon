import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import { Text, Icon, Screen } from '../../components'
import { OuterBtn } from '../../components/Buttons/WellxBtn'

type DeviceListProps = {
  requestAction?: () => void
}

const devices = [
  {
    icon: 'apple',
    title: 'deviceScreen.apple'
  },
  {
    icon: 'google',
    title: 'deviceScreen.googleFit'
  },
  {
    icon: 'fitbit',
    title: 'deviceScreen.fitbit'
  },
  {
    icon: 'whoop',
    title: 'deviceScreen.whoop'
  },
]
const DeviceList: React.FC<DeviceListProps> = ({ requestAction }) => {
  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  return <View style={styles.deviceContainer}>
    {devices.map((item, index) =>
      <TouchableOpacity style={styles.deviceBtn}>
        <Icon icon={item.icon} style={styles.deviceBtnIcon} />
        <Text tx={item.title} style={styles.deviceBtnText} />
      </TouchableOpacity>
    )}
    <OuterBtn title="deviceScreen.addNewDevice" customStyle={styles.requestBtn} textStyle={styles.requestText}
      onPress={() => requestAction()} />
  </View>
}

function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  return StyleSheet.create({
    deviceContainer: {
      marginTop: spacing.extraLarge
    },
    deviceBtn: {
      backgroundColor: colors.connectDeviceButton,
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 16,
      marginBottom: 16,
      height: 54,
      paddingHorizontal: 24,
      paddingVertical: 16
    },
    deviceBtnIcon: {
      marginRight: 12,
      height: 24,
      width: 24,
    },
    deviceBtnText: {
      fontSize: 16,
      lineHeight: 18,
      
      fontFamily: typography.fonts.nexa.bold
    },
    requestBtn: {
      marginTop: 16,
      height: 54,
      borderWidth: 2,
      borderColor: colors.activeTabs,
      borderRadius: spacing.medium,
      width: '100%',
    },
    requestText: {
      color: colors.activeTabs,
      lineHeight: spacing.medium,
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      fontWeight: '700'
    },
  })
}

export default DeviceList