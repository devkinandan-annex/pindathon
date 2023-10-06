import React from 'react';
import useAppConfig from "../../../utils/useAppConfig"
import useWellxStyle from "../../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../../components"
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import WellxBtn from '../../../components/Buttons/WellxBtn'

type QuitModalProps = {

}
const QuitModal: React.FC<QuitModalProps> = ({ }) => {
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme);

  return <View>
    <Text text='Are you sure you want quit from
the challenge?' style={styles.title} />
    <View style={styles.row}>
      <View style={{ width: '49%' }}>
        <WellxBtn title='common.cancel' btnType="normal" customStyleInner={styles.button} customStyleText={styles.text} />
      </View>
      <View style={{ width: '49%' }}>
        <WellxBtn title='common.quit' btnType="normal" customStyleInner={styles.quitbutton} customStyleText={styles.quittext} />
      </View>
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
      paddingHorizontal: 16,
      top: 8
    },
    title: {
      fontSize: 16,
      lineHeight: 18,
      
      fontFamily: typography.fonts.nexa.normal,
      color: colors.descText,
    },
    row: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 32
    },
    button: {
      borderRadius: 16,
      // width: "100%",
      height: 40,
      backgroundColor: colors.connectDeviceButton,
      justifyContent: 'center'
    },
    text: {
      fontSize: 14,
      lineHeight: 14,
      
      fontFamily: typography.fonts.nexa.normal,
      color: colors.activeTabs,
    },
    quitbutton: {
      borderRadius: 16,
      // width: "100%",
      height: 40,
      backgroundColor: colors.error,
      justifyContent: 'center'
    },
    quittext: {
      fontSize: 14,
      lineHeight: 14,
      
      fontFamily: typography.fonts.nexa.normal,
      color: colors.background,
    }
  })
}
export default QuitModal