import { Platform, StyleSheet, View, ViewStyle } from 'react-native'
import React, { FC, useState } from 'react'
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import { Text, Icon, Screen } from '../../components'
import TopHeader from '../../components/Header/TopHeader'
import BadgePost from '../../components/Common/BadgePost'
import { TouchableOpacity } from 'react-native-gesture-handler'
import WellxBtn from '../../components/Buttons/WellxBtn'
interface ChallengePrivateTabProps extends AppStackScreenProps<"ChallengePrivateTab"> {

}
export const ChallengePrivateTab: FC<ChallengePrivateTabProps> = observer(function ChallengePrivateTab(_props) {
  const {navigation} : any = _props;
  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);

  const [activeIndex, setActiveIndex] = useState(1);
  const [buttonActive, setButtonActive] = useState(true);

  const BadgePostBoxList = [
   
    {
      bedge: 'badge3',
      header: 'Virtual New York City Marathon',
      subHeader: 'Oct 8 to Nov 7, 2022',
      btnTitle: 'CallForChallenge.badgeBtn',
    }, {
      bedge: 'badge2',
      header: 'Virtual New York City Marathon',
      subHeader: 'Oct 8 to Nov 7, 2022',
      btnTitle: 'CallForChallenge.badgeBtn',
    }
  ]

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>      

      <View style={styles.BadgePostBox}>
        {
          BadgePostBoxList.map((val, index) =>
            <BadgePost 
            containerStyle={styles.propContainer} 
            badge={val.bedge} header={val.header} 
            subHeader={val.subHeader} 
            btnTitle={val.btnTitle} 
            onPress={() => navigation.navigate("ChallengedetailsScreen",val)}
            />
          )
        }
      </View>


      <View style={styles.VoucherBtn}>
        <WellxBtn
          title="CallForChallenge.challengeBtn"
          customStyle={styles.buttonMain}
          btnType="primary"
        />
      </View>

    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      width:'100%',
    },
    propContainer: {
      paddingHorizontal: 8,
      paddingVertical: 16,
      backgroundColor: colors.background,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 4,
      width: '47.6%',
      shadowRadius: 7,
      marginBottom: 12,
    },
    BadgePostBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
      paddingBottom: 110,
    },
    
    VoucherBtn: {
      width: "100%",
      marginBottom: 16,
      paddingVertical: 8,
      bottom: 8,
      borderTopWidth: 1,
      position: 'absolute',
      backgroundColor: colors.background,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 4,
      shadowRadius: 7,
    },
    buttonMain: {
      width: '100%',
    }

  })
}