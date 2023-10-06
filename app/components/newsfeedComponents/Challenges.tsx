import { StyleSheet, View, TouchableOpacity, Platform } from "react-native"
import React, { FC, useRef, useState } from "react"
import { Icon } from "../Icon"
import { Text } from "../Text"
import { colors, spacing, typography } from "../../theme"
import BottomSheet from "../BottomSheet/BottomSheet"
import { AppStackScreenProps } from "../../navigators"
import { observer } from "mobx-react-lite"
import { useNavigation } from '@react-navigation/native';

interface ChallengesProps extends AppStackScreenProps<"ChallengesScreen"> {
  props?: any
}
export const Challenges: FC<ChallengesProps> = observer(function Challenges(props) {
  const navigation = useNavigation();
  const refRBSheet = useRef(null)
  const [unfollow, setUnfollow] = useState(false)
  const username = "Lana Rauf"
  const openModal = () => {
    refRBSheet.current.open()
  }

  const openUnfollow = () => {
    setUnfollow(true)
  }
  const CallforchallengeScreen =() => {
    // @ts-ignore
    navigation.navigate('CallforchallengeScreen')
    // props?.props?._props?.prop?.navigation?.navigate("CallforchallengeScreen")
    refRBSheet.current.close()
  }
function goToProfile(){
    // @ts-ignore
    navigation.navigate("myProfile", {isUserSelf: false, profileLevel: 6,showProfile: true }),
  refRBSheet.current.close()
}
  const followComp = () => {
    return (
      <View style={styles.followContainer}>
        <View style={styles.followBtn}>
          <TouchableOpacity
            style={styles.followBtn}
            onPress={() => CallforchallengeScreen()}
          >
            <Icon icon="challenge" style={styles.followIcon} color={colors.blackText} />
            <Text tx="followSheet.Call" style={styles.followText} />
          </TouchableOpacity>
        </View>
        <View style={styles.followBtn}>
          <TouchableOpacity style={[styles.followBtn, { marginTop: 30 }]} onPress={()=>goToProfile()}>
            <Icon icon="profile" style={styles.followIcon} />
            <Text tx="followSheet.profile" style={styles.followText} />
          </TouchableOpacity>
        </View>
        <View style={[styles.followBtn, styles.unFollow]}>
          <TouchableOpacity style={[styles.followBtn]} onPress={() => openUnfollow()}>
            <Icon icon="unFollow" style={styles.followIcon} />
            <Text tx="followSheet.unFollow" style={[styles.followText, { color: colors.error }]} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const UnfollowComp = () => {
    return (
      <View style={styles.followContainer}>
        <Text
          tx="followSheet.unFollowHeading"
          txOptions={{ username }}
          style={styles.unfollowTitle}
        />
        <Text tx="followSheet.unFollowDesc" txOptions={{ username }} style={styles.unfollowDesc} />

        <View style={styles.unfollowFooter}>
          <TouchableOpacity
            style={[styles.buttonMain, styles.buttonCancel]}
            onPress={() => setUnfollow(false)}
          >
            <Text tx="followSheet.Cancel" style={styles.buttontitle} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonMain, styles.buttonUnfollow]}>
            <Text
              tx="followSheet.unFollow"
              style={[styles.buttontitle, styles.buttonTitleUnfollow]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.challengesContainer}>
      <BottomSheet
        RenderComponent={unfollow ? UnfollowComp() : followComp()}
        refRBSheet={refRBSheet}
        height={222}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
      />
      <View style={styles.challengesHeader}>
        <View style={styles.challengesHeaderLeft}>
          <Icon icon="user" style={styles.userImage} />
          <View>
            <Text text="Lana Rauf" style={styles.userName} />
            <Text text="18 minutes ago" style={styles.time} />
          </View>
        </View>
        <TouchableOpacity style={styles.challengesHeaderRight} onPress={() => openModal()}>
          <Icon icon="more" size={24} color={colors.blackText} />
        </TouchableOpacity>
      </View>

      <View style={styles.challengesBody}>
        <Text
          text="Hi everyone, I won 1st place in the October Challenge!"
          style={styles.challengesDesc}
        />
        <View style={styles.challengesInner}>
          <View style={styles.challengesInnerIconSection}>
            <Icon icon="firstPrize" />
          </View>
          <View style={styles.challengesInnerContentSection}>
            <Text text="10000" style={styles.challengesSteps} />
            <Text tx="MyFollowingScreen.steps" style={styles.challengesStepsTitle} />
            <Text text="October challenge 2022" style={styles.challengesStepsDes} />
          </View>
        </View>
        <View style={styles.challengesBottom}>
          <Icon icon="like" style={styles.like} />
          <Text text="15" style={styles.likeCount} />
        </View>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  challengesContainer: {
    backgroundColor: colors.background,
    paddingTop: 18,
    paddingHorizontal: spacing.medium,
    marginTop: 8,
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 4,
    shadowRadius: 7,
  },
  challengesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  challengesHeaderLeft: {
    flexDirection: "row",
  },
  challengesHeaderRight: {
    paddingRight: 8,
  },
  userImage: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: colors.challangeBorder,
    marginRight: 10,
    height: 52,
    width: 52,
  },
  userName: {
    paddingTop: 5,
    fontSize: 16,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 18,
    
    color: colors.blackText,
  },
  time: {
    paddingTop: 6,
    fontSize: 14,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 18,
    
    color: colors.descText,
  },
  challengesBody: {
    flex: 1,
  },
  challengesDesc: {
    fontFamily: typography.fonts.nexa.regular,
    fontSize: 14,
    lineHeight: 18,
    
    color: colors.blackText,
    paddingTop: 15,
    marginBottom: 16,
  },
  challengesInner: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.challangeBorder,
    borderRadius: 24,
    height: 175,
    padding: 20,
  },
  challengesInnerIconSection: {
    flex: 0.6,
  },
  challengesInnerContentSection: {
    flex: 0.4,
  },
  challengesSteps: {
    fontFamily: typography.fonts.nexa.bold,
    fontSize: 24,
    lineHeight: 28,
    
    color: colors.activeTabs,
    marginTop: 7,
  },
  challengesStepsTitle: {
    fontFamily: typography.fonts.nexa.regular,
    fontSize: 12,
    lineHeight: 14,
    
    color: colors.blackText,
    marginBottom: 55,
    marginTop: 2,
  },
  challengesStepsDes: {
    fontFamily: typography.fonts.nexa.bold,
    fontSize: 12,
    lineHeight: 14,
    
    color: colors.blackText,
  },
  challengesBottom: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 15,
  },
  like: {
    marginRight: 8,
    height: 24,
    width: 21,
  },
  likeCount: {
    fontFamily: typography.fonts.nexa.bold,
    fontSize: 16,
    lineHeight: 18,
    
    color: colors.blackText,
    marginTop: 5,
  },
  bottomSheetContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
  },
  wrapper: {
    backgroundColor: "rgba(36, 38, 39, 0.4)",
  },
  followContainer: {
    paddingHorizontal: 16,
    width: "100%",
  },
  followBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  followIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
  followText: {
    fontSize: 16,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 18,
    color: colors.blackText,
  },
  unFollow: {
    marginTop: 54,
  },
  unfollowFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    width: "56%",
  },
  buttonMain: {
    paddingHorizontal: 57,
    paddingVertical: 10,
    marginRight: 11,
    borderRadius: 12,
  },
  buttonCancel: {
    backgroundColor: colors.connectDeviceButton,
  },
  buttonUnfollow: {
    backgroundColor: colors.error,
  },
  buttontitle: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 14,
    
    color: colors.activeTabs,
    paddingVertical: 7,
  },
  buttonTitleUnfollow: {
    color: colors.background,
  },
  unfollowTitle: {
    fontSize: 24,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 28,
    
    color: colors.blackText,
  },
  unfollowDesc: {
    fontSize: 16,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 18,
    
    color: colors.descText,
    paddingTop: 8,
  },
})
