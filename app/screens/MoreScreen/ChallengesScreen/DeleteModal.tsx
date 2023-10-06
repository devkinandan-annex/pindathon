import React from 'react';
import useAppConfig from "../../../utils/useAppConfig"
import useWellxStyle from "../../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../../components"
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import WellxBtn from '../../../components/Buttons/WellxBtn'

type DeleteModalProps = {
  delRef: any
}
const DeleteModal: React.FC<DeleteModalProps> = ({delRef }: DeleteModalProps) => {
  console.log("ref", delRef)
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme);

  return <View>
     <View style={{justifyContent:'space-between', flexDirection:"row"}}>
    <Text tx="moreScreen.myChallenges.deleteChanges" style={styles.deleteTitle} />
        <TouchableOpacity onPress={() => delRef()} style={{ justifyContent:'center'}}>
            <Icon icon={"cross"} size={13} style={{marginRight: 4}}/>
          </TouchableOpacity>
        </View>
    <Text text='Are you sure you want delete challenge?' style={styles.title} />
   
    <View style={styles.row}>
      <View style={{ width: '49%' }}>
        <WellxBtn title='common.cancel' btnType="normal" customStyleInner={styles.button} customStyleText={styles.text} onPress={() => delRef()}/>
      </View>
      <View style={{ width: '49%' }}>
        <WellxBtn title='followSheet.Delete' btnType="normal" customStyleInner={styles.quitbutton} customStyleText={styles.quittext} />
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
    deleteTitle:{  fontSize: 24,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 28,
      color: colors.blackText,},
    title: {
      fontSize: 16,
      lineHeight: 18,
      marginTop:8,
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
export default DeleteModal;