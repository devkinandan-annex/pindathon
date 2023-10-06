import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: string

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color && { tintColor: color },
          size && { width: size, height: size },
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  )
}

export const iconRegistry = {
  
  // bell: require("../../assets/icons/bell.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  check: require("../../assets/icons/check.png"),
  clap: require("../../assets/icons/clap.png"),
  community: require("../../assets/icons/community.png"),
  components: require("../../assets/icons/components.png"),
  debug: require("../../assets/icons/debug.png"),
  github: require("../../assets/icons/github.png"),
  heart: require("../../assets/icons/heart.png"),
  hidden: require("../../assets/icons/hidden.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  // more: require("../../assets/icons/more.png"),
  pin: require("../../assets/icons/pin.png"),
  podcast: require("../../assets/icons/podcast.png"),
  settings: require("../../assets/icons/settings.png"),
  // marketplace: require("../../assets/icons/marketplace.png"),
  slack: require("../../assets/icons/slack.png"),
  view: require("../../assets/icons/view.png"),
  x: require("../../assets/icons/x.png"),
  coin: require('../../assets/icons/coin.png'),
  filterBlue: require('../../assets/icons/filterblue.png'),
  income: require('../../assets/icons/Income.png'),
  walletESM: require('../../assets/icons/Vector.png'),
  whoopIcon: require('../../assets/icons/whoop.png'),


  /* Update Icons */

  home_inactive: require("../../assets/icons/BottomTab/home_inactive.png"),
  goal_inactive: require("../../assets/icons/BottomTab/goal_inactive.png"),
  challenge_inactive: require("../../assets/icons/BottomTab/challenge_inactive.png"),
  marketplace_inactive: require("../../assets/icons/BottomTab/marketplace_inactive.png"),

  home_active: require("../../assets/icons/BottomTab/home_active.png"),
  goal_active: require("../../assets/icons/BottomTab/goal_active.png"),
  challenge_active: require("../../assets/icons/BottomTab/challenge_active.png"),
  marketplace_active: require("../../assets/icons/BottomTab/marketplace_active.png"),





  more: require("../../assets/icons/BottomTab/more.png"),

  Logo: require("../../assets/icons/Home_Icon/Logo.png"),
  plus: require("../../assets/icons/Home_Icon/plus.png"),
  bell: require("../../assets/icons/Home_Icon/bell.png"),
  rightArrow: require("../../assets/icons/Home_Icon/rightArrow.png"),
  foot: require("../../assets/icons/Home_Icon/foot.png"),
  device: require("../../assets/images/device.png"),
  user: require("../../assets/images/user.png"),
  firstPrize: require("../../assets/images/first_prize.png"),
  like:require('../../assets/icons/Home_Icon/like.png'),
  avatar:require('../../assets/images/avtar.png'),
  flame:require('../../assets/icons/Home_Icon/flame.png'),
  close: require('../../assets/icons/Home_Icon/close.png'),
  moon: require('../../assets/icons/common/moon.png'),
  // suggestionBg: require('../../assets/images/suggestionBg.png'),
  // drum: require('../../assets/icons/Home_Icon/drum.png'),


  // Goal_Screen_Icon

  history: require('../../assets/icons/Goal_Screen_Icon/history.png'),
  rocket: require('../../assets/icons/Goal_Screen_Icon/goal_NotSet.png'),
  leftArrowBig: require('../../assets/icons/Goal_Screen_Icon/leftArrow.png'),
  rightArrowBig: require('../../assets/icons/Goal_Screen_Icon/rightArrow.png'),
  graph: require('../../assets/icons/Goal_Screen_Icon/Graph.png'),
  mainComponent: require('../../assets/icons/Goal_Screen_Icon/mainComponent.png'),
  pen: require('../../assets/icons/Goal_Screen_Icon/pen.png'),
  cross: require('../../assets/icons/Goal_Screen_Icon/cross.png'),
  modalIcon: require('../../assets/icons/Goal_Screen_Icon/modalIcon.png'),
  goalComplete: require('../../assets/icons/Goal_Screen_Icon/goalComplete.png'),


  suggestionBg: require('../../assets/images/suggestionBg_1.png'),
  drum: require('../../assets/icons/Home_Icon/drum.png'),
  wellx_icon: require('../../assets/images/wellxai_icon.png'),
  wellxLogo: require('../../assets/images/wellx.png'),
  back: require("../../assets/icons/common/back.png"),

  apple: require("../../assets/icons/common/apple.png"),
  google: require("../../assets/icons/common/google.png"),
  fitbit: require("../../assets/icons/common/fitbit.png"),
  whoop: require("../../assets/icons/common/whoop.png"),
  fire: require("../../assets/icons/common/fire.png"),



  myProfile: require("../../assets/icons/common/profile.png"),
  myInsurance: require("../../assets/icons/common/InsuranceIcon.png"),
  myWallet: require("../../assets/icons/common/myWallet.png"),
  myChallenges: require("../../assets/icons/common/myChallenges.png"),
  devices: require("../../assets/icons/common/myDevice.png"),
  support: require("../../assets/icons/common/support.png"),
  setting: require("../../assets/icons/common/settings.png"),
  settingIcon: require("../../assets/icons/common/setting.png"),
  levelsIcon:require("../../assets/icons/common/levels.png"),
  googleLogo:require("../../assets/icons/common/googleLogo.png"),



/*************badges**********/
  badge1:require("../../assets/icons/common/badge1.png"),
  badge2:require("../../assets/icons/common/badge2.png"),
  badge3:require("../../assets/icons/common/badge3.png"),
  badge4:require("../../assets/icons/common/badge4.png"),

  badgeblack1:require("../../assets/icons/common/badges10k.png"),
  badgeblack2:require("../../assets/icons/common/badges70.png"),
  badgeblack3:require("../../assets/icons/common/goodjob-gym.png"),

  
  

    /*************WellxPlans**********/
  
  wellxPlan:require("../../assets/icons/common/wellxPlan.png"),
  wellxPlusPlan:require("../../assets/icons/common/wellxPlusPlan.png"),
  wellxProPlan:require("../../assets/icons/common/wellxPlanPro.png"),
 

    /*************Profile Settings**********/

    changeAvatar:require("../../assets/icons/common/changeAvatar.png"),
    changeUserName:require("../../assets/icons/common/changeUserName.png"),
    changeEmail:require("../../assets/icons/common/changeEmail.png"),
    heightWeight:require("../../assets/icons/common/heightWeight.png"),
    profilePolicy:require("../../assets/icons/common/profilePolicy.png"),


  
  delete: require("../../assets/icons/common/delete.png"),
  redDelete: require('../../assets/icons/red-delete.png'),
  refresh: require('../../assets/icons/common/refresh.png'),
  rename: require('../../assets/icons/common/rename.png'),
  successGreen : require('../../assets/icons/common/success_green.png'),
  watch: require('../../assets/icons/watch.png'),

  navigationProfile: require("../../assets/icons/common/n-profile.png"),


  challenge :require('../../assets/icons/Home_Icon/challange.png'),
  profile :require('../../assets/icons/Home_Icon/user.png'),
  unFollow :require('../../assets/icons/Home_Icon/unFollow.png'),
  filter :require('../../assets/icons/common/filter.png'),
  calendar: require('../../assets/icons/common/calendar.png'),
  downArrow: require('../../assets/icons/common/downArrow.png'),
  profileShape: require('../../assets/icons/common/profileShape.png'),

  


  avtar1:require('../../assets/images/avtar1.png'),
  avtar2:require('../../assets/images/avtar2.png'),
  taz: require('../../assets/images/taz.png'),
  lvlup: require('../../assets/images/lvlup.png'),
  lvldown: require('../../assets/images/lvldown.png'),

  emptyNotification: require('../../assets/icons/common/emptyNotification.png'),
  shopify: require('../../assets/icons/common/shopify.png'),
  marketplaceIcon: require('../../assets/icons/common/marketplace-icon.png'),
  voucherbtn: require('../../assets/icons/common/voucherbtn.png'),
  monyIcon: require('../../assets/icons/common/monyIcon.png'),
  search: require('../../assets/icons/common/search.png'),
  closeCircle: require('../../assets/icons/common/closeCircle.png'),
  starIcon: require('../../assets/icons/common/starIcon.png'),
  goal: require('../../assets/icons/common/goal.png'),
  amazon: require('../../assets/icons/common/amazon.png'),
  xCoins: require('../../assets/icons/common/xCoins.png'),
  applePay: require('../../assets/icons/common/applePay.png'),
  vouchersCopy: require('../../assets/icons/common/vouchersCopy.png'),
  voucherBorder: require('../../assets/icons/common/voucherBorder.png'),
  successfully: require('../../assets/icons/common/successfully.png'),
  documentsIcon: require('../../assets/icons/common/documentsIcon.png'),
  downloadIcon: require('../../assets/icons/common/downloadIcon.png'),
  hospitalIcon: require('../../assets/icons/common/hospitalIcon.png'),
  LocationIcon: require('../../assets/icons/common/LocationIcon.png'),
  alarmIcon: require('../../assets/icons/common/alarmIcon.png'),
  phoneIcon: require('../../assets/icons/common/phoneIcon.png'),
  ccnIcon: require('../../assets/icons/common/ccnIcon.png'),
  medIcon: require('../../assets/icons/common/medIcon.png'),
  familyIcon: require('../../assets/icons/common/familyIcon.png'),
  

  userProfile: require('../../assets/icons/common/users.png'),
  emptyFollowing: require('../../assets/icons/common/followingEmpty.png'),
  crown: require('../../assets/icons/common/crown.png'),
  privateProfileIcon: require('../../assets/icons/common/privateProfileIcon.png'),


  Faq: require('../../assets/icons/common/Faq.png'),
  Feedback: require('../../assets/icons/common/Feedback.png'),
  Notifications: require('../../assets/icons/common/Notifications.png'),

  challengegoal: require('../../assets/icons/common/challengegoal.png'),
  calendarIcon: require('../../assets/icons/common/calendarIcon.png'),

  
  
  
  
  
  emptyPost: require('../../assets/icons/common/emptyPost.png'),
  emptyChallenge: require('../../assets/icons/empty_chl.png'),






  /* Profile Level Icon */

  lvl1: require("../../assets/icons/common/lvl1.png"),
  lvl2: require("../../assets/icons/common/lvl2.png"),
  lvl3: require("../../assets/icons/common/lvl3.png"),
  lvl4: require("../../assets/icons/common/lvl4.png"),
  lvl5: require("../../assets/icons/common/lvl5.png"),
  lvl6: require("../../assets/icons/common/lvl6.png"),
  lvl7: require("../../assets/icons/common/lvl7.png"),
  lvl8: require("../../assets/icons/common/lvl8.png"),

   /*Skeleton Loader Icon */
heartSkeleton : require("../../assets/icons/common/heartgroup.png"),

leftVoucherCurve:require("../../assets/icons/vouchers-shape-left.png"),
rightVoucherCurve: require("../../assets/icons/vouchers-shape-right.png"),
crownSkeleton : require("../../assets/icons/common/crownskeleton.png"),
streakSkeleton: require("../../assets/icons/streak-skeleton.png"),

  /* Animation Gif  */
animation: require('../../assets/icons/animation.gif'),

/*Communitylevels  Icon */
ring: require('../../assets/images/ring.png'),
communityShape: require('../../assets/images/communityShape.png'),
/*Onboarding Images */
firstOnboarding: require('../../assets/images/first-onboarding.png'),
secondOnboarding: require('../../assets/images/second-onboarding.png'),
thirdOnboarding: require('../../assets/images/third-onboarding.png'),
// Notification Icon
deleteIcon :require("../../assets/icons/common/delete-icon.png"),
blackDeleteIcon: require("../../assets/icons/common/black-delete-icon.png"),
cureentLoc: require("../../assets/icons/cureentLoc.png"),
locationIcon: require("../../assets/icons/locationIcon.png"),
dot: require("../../assets/icons/dot.png")

}

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
}
