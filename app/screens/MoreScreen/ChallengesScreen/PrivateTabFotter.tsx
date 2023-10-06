import React from 'react';
import useAppConfig from "../../../utils/useAppConfig"
import useWellxStyle from "../../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../../components"
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import WellxBtn from '../../../components/Buttons/WellxBtn'
type PrivateTabFotterProps = {
  quitAction: () => void;
  deleteAction: () => void
}

const PrivateTabFotter: React.FC<PrivateTabFotterProps> = ({quitAction, deleteAction}) => {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme);

  return <View style={styles.container}>
    <View style={{ width: '49%' }}>
      <WellxBtn title='common.quit' btnType="normal" onPress={quitAction} customStyleInner={styles.button} customStyleText={styles.text} />
    </View>
    <View style={{ width: '49%' }}>
      <WellxBtn title='followSheet.Delete' onPress={deleteAction} btnType="normal" customStyleInner={styles.button} customStyleText={styles.text} />
    </View>
  </View>
}


function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      bottom: 8,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      flexDirection: 'row',
    },
    button: {
      borderRadius: 16,
      // width: "100%",
      height: 56,
      backgroundColor: colors.connectDeviceButton,
      justifyContent: 'center'
    },
    text: {
      fontSize: 16,
      lineHeight: 18,
      
      fontFamily: typography.fonts.nexa.normal,
      color: colors.error,
    }
  })
}

export default PrivateTabFotter;