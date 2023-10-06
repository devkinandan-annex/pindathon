
import { ImageBackground, StyleSheet, View, ViewStyle, NativeModules, Platform } from 'react-native'
import React, { FC, useEffect, useState, useRef } from 'react'
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import { Text, Icon, Screen } from '../../components'
import TopHeader from '../../components/Header/TopHeader'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import CustomFlatList from '../../components/Common/CustomFlatList'
import WellxBtn from '../../components/Buttons/WellxBtn'
import MapView from 'react-native-maps'
import { LinearGradient } from 'expo-linear-gradient';
import PrivateTabFotter from '../MoreScreen/ChallengesScreen/PrivateTabFotter';
import BottomSheet from '../../components/BottomSheet/BottomSheet'
import QuitModal from '../MoreScreen/ChallengesScreen/QuitModal'
import DeleteModal from '../MoreScreen/ChallengesScreen/DeleteModal'

interface ChallengedetailsScreenProps extends AppStackScreenProps<"ChallengedetailsScreen"> {
  val: object,
  data: object
}
export const ChallengedetailsScreen: FC<ChallengedetailsScreenProps> = observer(function ChallengedetailsScreen(
  _props: any,


) {
  const { route } = _props;
  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);

  const [detailData, setDetailData] = useState(Object)
  const { StatusBarManager } = NativeModules;
  const statusbarHeight = StatusBarManager.HEIGHT + 5;
  const [activeIndex, setActiveIndex] = useState(1);
  const [search, setSearch] = useState("");
  const quitRef = useRef(null);
  const deleteRef = useRef(null)
  const type  = route.params?.type


  console.log(route.params)
  useEffect(() => {
    setDetailData(route.params?.singleValue)
  }, [])

  function gradientColor(badge: any) {
    let finalColor = [];
    switch (badge) {
      case 'badge1':
        finalColor = colors.stepBadge
        break;

      case 'badge2':
        finalColor = colors.sleepBadge
        break;

      case 'badge3':
        finalColor = colors.gymBadge
        break;

      case 'badge4':
        finalColor = colors.activityBadge
        break;

      default:
        break;
    }

    return finalColor
  }

  const renderFotter = () => {
    switch (type) {
      case 'completedTab':
        return null;
      case 'privateTab':
        return <PrivateTabFotter quitAction={() => quitRef.current.open()} deleteAction={() => deleteRef.current.open()} />;
      case 'activeTab':
        return <WellxBtn title='common.quit' onPress={() => quitRef.current.open()} btnType="normal" customStyleInner={styles.button} customStyleText={styles.text} />
      default:
        return null
    }
  }
  const renderSubText = () => {
    switch (type) {
      case 'completedTab':
        return <WellxBtn simpleTitle={detailData.btnTitle} btnType="normal" customStyleInner={[styles.suggestionButton, { backgroundColor: detailData.buttonColor, height: 70 }]} customStyle={{ borderRadius: 16,}} />;
      case 'privateTab':
        return null;
      case 'activeTab':
        return null
      default:
        return null;
    }
  }

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={styles.container}
      // safeAreaEdges={["top"]} 
      statusBarStyle={'light'}
      StatusBarProps={{
        translucent: true,
        backgroundColor: 'transparent',

      }}
    >

      <LinearGradient
        start={[0.1, 0.1]}
        end={[0.1, 0.9]}
        colors={gradientColor(detailData?.bedge)}
        style={[styles.leatherBoardBg, { paddingTop: statusbarHeight }]}
      >
        <TopHeader customStyle={styles.hospitalLogo}
          leftIcon="back"
          onPressLeft={() => _props.navigation.goBack()}
          backIconColor={colors.background}
          backButtonCustomStyle={styles.backButton}
        // centerText={"moreScreen.myInsurance.title"}
        />
        <BottomSheet
          RenderComponent={<QuitModal />}
          refRBSheet={quitRef}
          height={176}
          wrapper={styles.wrapper}
          containerStyle={styles.bottomSheetContainer}
          headerTitleTx="moreScreen.myChallenges.quitChanges"
        />
        <BottomSheet
          RenderComponent={<DeleteModal delRef={()=>deleteRef.current.close()}/>}
          refRBSheet={deleteRef}
          height={158}
          wrapper={styles.wrapper}
          containerStyle={styles.bottomSheetContainer}
        />

        <View style={styles.insuranceCard}>
          <Icon icon={detailData.bedge} size={130} />
        </View>
      </LinearGradient>

      <View style={styles.hospitalDetailsBox}>

        <Text style={styles.hospitalDetailsTitle} text={detailData.header} />
        <Text style={styles.itemSubTitle} text={detailData.description} />



        <View style={styles.ChallengeIconBox}>
          <Icon icon="calendarIcon" size={20} />
          <Text style={styles.DetailsBoxTitle} text={detailData.subHeader} />
        </View>
        <View style={styles.ChallengeIconBox}>
          <Icon icon="challengegoal" size={20} />
          <Text style={styles.DetailsBoxTitle} text={detailData.goal} />

        </View>

        <View style={styles.ChallengeStepsBox}>
          <View style={styles.ChallengeStepsBoxLeft}>

            <Text style={styles.ChallengeStepsBoxTitle} text={detailData.participantsNumber} />

            <Text style={styles.ChallengeStepsBoxSubTitle} text="participants" />
          </View >
          <View style={styles.ChallengeStepsBoxRight}>
            <View style={styles.ProfilesBox}>
              <View style={styles.navigationItemLeft}>
                <Icon icon='navigationProfile' size={48} />
              </View>
              <View style={styles.navigationItemLeft}>
                <Icon icon='navigationProfile' size={48} />
              </View>
              <View style={styles.navigationItemLeft}>
                <Icon icon='navigationProfile' size={48} />
              </View>
              <View style={styles.navigationItemLeft}>
                <Icon icon='navigationProfile' size={48} />
              </View>
            </View>
            <Icon icon="rightArrow" size={14} />
          </View>
        </View >

        {
          detailData.userInfo != '' && <Text style={styles.ChallengeBasiceTitleBox} tx={'CallForChallenge.ChallengeBasiceText'} />
        }

        {renderSubText()}
      </View>



      {
        route.params?.challangeScreen ?
          <WellxBtn
            title="challengesScreen.buttonTitle"
            customStyle={styles.buttonMain}
            btnType="primary"
          />
          :
          <WellxBtn
            title="CallForChallenge.challengeBtn"
            customStyle={styles.buttonMain}
            btnType="primary"
          />
      }

      {renderFotter()}


    </Screen >
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      marginTop: 0,
      flex: 1,

    },
    hospitalLogo: {
      marginBottom: 0,
    },
    leatherBoardBg: {
      height: 320,
      paddingHorizontal: 16,
      // paddingTop: 55,
      position: 'relative',
      marginBottom: 0,
      backgroundColor: '#EC3684',
    },
    itemSubTitle: {
      fontSize: 16,
      lineHeight: 22,
      marginBottom: 24,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.descText,
    },
    ChallengeStepsBoxLeft: {
      width: '30%',
    },
    ChallengeStepsBoxRight: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: "space-between",
    },
    ProfilesBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 35,
    },

    insuranceCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },


    ChallengeIconBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
    },

    navigationItemLeft: {
      width: 44,
      height: 44,
      marginRight: -12,
      borderRadius: 100,
      borderWidth: 1,
      overflow: 'hidden',
      backgroundColor: colors.background,
      borderColor: colors.challangeBorder,
    },

    hospitalDetailsBox: {
      marginTop: -80,
      flex: 1,
      position: 'relative',
      paddingHorizontal: 16,
      paddingVertical: 24,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      backgroundColor: colors.background,
    },
    hospitalDetailsTitle: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 28,
      lineHeight: 32,
      marginBottom: 8,
    },
    DetailsBoxTitle: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 16,
      lineHeight: 18,
      marginLeft: 16,
    },
    ChallengeBasiceTitleBox: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 18,
      backgroundColor: colors.connectDeviceButton,
      padding: 16,
      borderRadius: 16,

    },
    ChallengeStepsBoxSubTitle: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 14,
      lineHeight: 18,
    },
    ChallengeStepsBoxTitle: {
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 28,
      lineHeight: 32,
    },
    ChallengeStepsBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 14,
      paddingVertical: 20,
      backgroundColor: colors.background,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 7,
      marginBottom: 24,
    },


    buttonMain: {
      width: '100%',
      paddingHorizontal: 16,
      bottom: 25,
    },

    backButton: {
      backgroundColor: '#FFFFFF30',
      // opacity: 0.4
    },

    suggestionButton: {
      marginTop: 16,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 9,
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    wrapper: {
      backgroundColor: "rgba(36, 38, 39, 0.4)",
    },
    button: {
      borderRadius: 16,
      // width: "100%",
      height: 56,
      backgroundColor: colors.connectDeviceButton,
      justifyContent: 'center',
      marginHorizontal: 16,
      bottom: 8
    },
    text: {
      fontSize: 16,
      lineHeight: 18,
      
      fontFamily: typography.fonts.nexa.normal,
      color: colors.error,
    }
  })
}