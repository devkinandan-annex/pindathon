import React from 'react';
import {View, StyleSheet} from 'react-native'
import useWellxStyle from '../../utils/useWellxStyle';
import { Text, Icon, Screen } from '../../components';
import WellxBtn from '../../components/Buttons/WellxBtn';


type BuildRouteProps = {
  onBuild?:() => void
}
const BuildRoute: React.FC<BuildRouteProps> = ({onBuild}) => {
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  return <View style={styles.container}>
    <View style={styles.wrapper}>
      <Text text='23 Avenue 23, 10316, New York, USA' numberOfLines={1} style={styles.text} />
    </View>
    <WellxBtn  title='moreScreen.hospitaldetailsScreen.buildRoute' btnType='primary' customStyleInner={styles.btn} onPress={onBuild}/>
  </View>
}

function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  return StyleSheet.create({
    container: {
      paddingTop:spacing.medium,
      paddingBottom:spacing.extraSmall
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    wrapper: {
      backgroundColor: colors.background,
      borderRadius:spacing.medium,
      borderWidth:1,
      borderColor: colors.connectDeviceButton,
      height:56,
      elevation:0.5,
      justifyContent:'center',
      paddingHorizontal:spacing.medium,
    },
    text:{
      color: colors.blackText,
      fontWeight:'700',
      fontSize:spacing.medium,
      lineHeight:18,
      fontFamily: typography.fonts.nexa.regular,
    },
    btn:{
      marginTop:spacing.medium,
      height:56,
      borderRadius:16,
      colors:'#FFFFFF',
      justifyContent:'center',
      alignItems:'center'
    }
  })
}
export default BuildRoute