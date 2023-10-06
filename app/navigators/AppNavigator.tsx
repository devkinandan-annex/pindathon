/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams, // @demo remove-current-line
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { useStores } from "../models" // @demo remove-current-line
import {
  LoginScreen, // @demo remove-current-line
  DeviceScreen,
  OtpScreen,
  UserNameScreen,
  NewGoal,
  ActivityScreen,
  LeaderboardScreen,
  WalletScreen,
  DeviceListScreen,
  Communitylevels,
  MapScreen
} from "../screens"
import GoalHistory from "../screens/GoalsScreen/GoalHistory"
import GoalHistoryMonth from "../screens/GoalsScreen/GoalHistoryMonth"
import { Devices } from "../screens/MoreScreen/Devices"
import { MyChallenges } from "../screens/MoreScreen/MyChallenges"
import { MyInsurance } from "../screens/MoreScreen/MyInsurance"
import { HospitalScreen } from "../screens/MoreScreen/HospitalScreen"
import { HospitaldetailsScreen } from "../screens/MoreScreen/HospitaldetailsScreen"
import { MyWallet } from "../screens/MoreScreen/MyWallet"
import { Profile } from "../screens/MoreScreen/Profile"
import { SettingsNotificationsScreen } from "../screens/MoreScreen/SettingsNotificationsScreen"
import { SettingsPrivacyScreen } from "../screens/MoreScreen/SettingsPrivacyScreen"
import { SettingsFAQScreen } from "../screens/MoreScreen/SettingsFAQScreen"
import { SettingsTermsScreen } from "../screens/MoreScreen/SettingsTermsScreen"
import { SettingsFeedbackAppScreen } from "../screens/MoreScreen/SettingsFeedbackAppScreen"

import { ProfilePolicy } from "../screens/MoreScreen/ProfilePolicy"
import { FollowersScreen } from "../screens/MoreScreen/ProfileScreens/FollowersScreen"
import { FollowingScreen } from "../screens/MoreScreen/ProfileScreens/FollowingScreen"

import { ChangeEmail } from "../screens/MoreScreen/ProfileSetting/ChangeEmail"
import { ChangeUsername } from "../screens/MoreScreen/ProfileSetting/ChangeUsername"
import { MyStatisticsScreen } from "../screens/MoreScreen/ProfileScreens/MyStatisticsScreen"
import { HeightWeightScreen } from "../screens/MoreScreen/ProfileSetting/HeightWeightScreen"
import { ProfileSettings } from "../screens/MoreScreen/ProfileSettings"
import { Settings } from "../screens/MoreScreen/Settings"
import { Support } from "../screens/MoreScreen/Support"
import { Notifications } from "../screens/NewsfeedScreen/Notifications"
import { MyvouchersScreen } from "../screens/MarketplaceScreen/MyvouchersScreen"





import WellxTheme from "../theme/theme"

import { MainBottomTabNavigator, MainBottomTabParamList } from "./MainBottomTabNavigator"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

import { MyOrganization } from "../screens/MoreScreen/MyOrganization"
import { UsersList } from "../screens/MoreScreen/ProfileScreens/UsersList"

import { CallforchallengeScreen } from "../screens/CallForChallengeScreen/CallforchallengeScreen"
import { ChallengedetailsScreen } from "../screens/CallForChallengeScreen/ChallengedetailsScreen"
import { Challenges } from "../components/newsfeedComponents/Challenges"

import { ChallengeNewTab } from "../screens/CallForChallengeScreen/ChallengeNewTab"
import { inviteFriends } from "../screens/CallForChallengeScreen/InviteFriends"

import Graph from "../components/Graph/Graph"
import {PostScreen} from "../screens/NewsfeedScreen/PostScreen"
import {OnboardingScreen} from "../screens/onboardingScreen/OnboardingScreen"
import { ProfileAvatarWeb } from "../screens/MoreScreen/ProfileAvatarWeb"
import { UserBadgesScreen } from "../screens/MoreScreen/ProfileScreens/UserBadgesScreen"








/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Device: undefined
  MainTab: NavigatorScreenParams<MainBottomTabParamList>
  Login: undefined // @demo remove-current-line
  Otp: undefined
  Username: undefined
  NewGoal: undefined
  GoalHistory: undefined
  GoalHistoryMonth: undefined
  Activity: undefined
  myProfile: undefined
  myWallet: undefined
  myInsurance: undefined
  myChallenges: undefined
  devices: undefined
  support: undefined
  setting: undefined
  NotificationsScreen: undefined
  Leaderboard: undefined
  MyvouchersScreen: undefined
  HospitalScreen:undefined
  HospitaldetailsScreen:undefined
  Wallet: undefined,
  ProfileSettings: undefined
  ChangeUsername: undefined
  ChangeEmail: undefined
  deviceList: undefined
  HeightWeightScreen: undefined
  SettingsNotificationsScreen: undefined
  SettingsFAQScreen: undefined
  SettingsPrivacyScreen: undefined
  SettingsTermsScreen: undefined
  SettingsFeedbackAppScreen: undefined

  ProfilePolicy: undefined
  FollowersScreen: undefined
  FollowingScreen: undefined
  UserBadgesScreen:undefined
  MyOrganization: undefined
  UsersList: undefined

  CallforchallengeScreen:undefined
  ChallengedetailsScreen:undefined
  ChallengeAllTab:undefined
  ChallengeNewTab:undefined
  ChallengePrivateTab:undefined
  Communitylevels: undefined
  MyFollowingsScreen: undefined
  ChallengesScreen: undefined

  inviteFriends: undefined

  MyStatisticsScreen: undefined
  PostScreen :undefined
  OnboardingScreen: undefined
  MapScreen: undefined
  ProfileAvatarWeb: undefined

  // 🔥 Your screens go here
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // @demo remove-block-start
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  // @demo remove-block-end
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAuthenticated ? "MainTab" : "Login"} // @demo remove-current-line
    >
      {/* @demo remove-block-start */}
      {isAuthenticated ? (
        <>
          {/* @demo remove-block-end */}
          <Stack.Screen name="Username" component={UserNameScreen} />
          <Stack.Screen name="NewGoal" component={NewGoal} />
          <Stack.Screen name="Activity" component={ActivityScreen} />
          <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
          <Stack.Screen name="MainTab" component={MainBottomTabNavigator} />
          <Stack.Screen name="GoalHistory" component={GoalHistory} />
          <Stack.Screen name="GoalHistoryMonth" component={GoalHistoryMonth} />
          <Stack.Screen name="myProfile" component={Profile} />
          <Stack.Screen name="myWallet" component={MyWallet} />
          <Stack.Screen name="myInsurance" component={MyInsurance} />
          <Stack.Screen name="HospitalScreen" component={HospitalScreen} />
          <Stack.Screen name="HospitaldetailsScreen" component={HospitaldetailsScreen} />
          <Stack.Screen name="myChallenges" component={MyChallenges} />
          <Stack.Screen name="devices" component={Devices} />
          <Stack.Screen name="support" component={Support} />
          <Stack.Screen name="setting" component={Settings} />
          <Stack.Screen name="NotificationsScreen" component={Notifications} />
          <Stack.Screen name="MyvouchersScreen" component={MyvouchersScreen} />
          <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
          <Stack.Screen name="ChangeUsername" component={ChangeUsername} />
          <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
          <Stack.Screen name="SettingsNotificationsScreen" component={SettingsNotificationsScreen} />
          <Stack.Screen name="HeightWeightScreen" component={HeightWeightScreen} />
          <Stack.Screen name="deviceList" component={DeviceListScreen} />
          <Stack.Screen name="Wallet" component={WalletScreen} />
          <Stack.Screen name="Device" component={DeviceScreen} />

          <Stack.Screen name="SettingsFAQScreen" component={SettingsFAQScreen} />
          <Stack.Screen name="SettingsFeedbackAppScreen" component={SettingsFeedbackAppScreen} />
          <Stack.Screen name="CallforchallengeScreen" component={CallforchallengeScreen} />
          <Stack.Screen name="ChallengedetailsScreen" component={ChallengedetailsScreen} />
          <Stack.Screen name="Communitylevels" component={Communitylevels} />
          <Stack.Screen name="ChallengesScreen" component={Challenges} />
          <Stack.Screen name="ChallengeNewTab" component={ChallengeNewTab} />
          <Stack.Screen name="inviteFriends" component={inviteFriends} />
          

          <Stack.Screen name="MyStatisticsScreen" component={MyStatisticsScreen} />
          <Stack.Screen name="PostScreen" component={PostScreen} />
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="MapScreen" component={MapScreen} />



          <Stack.Screen name="ProfileAvatarWeb" component={ProfileAvatarWeb} />

          <Stack.Screen name="ProfilePolicy" component={ProfilePolicy} />
          <Stack.Screen name="FollowersScreen" component={FollowersScreen} />
          <Stack.Screen name="FollowingScreen" component={FollowingScreen} />
          <Stack.Screen name="MyOrganization" component={MyOrganization} />
          <Stack.Screen name="UsersList" component={UsersList} />
          <Stack.Screen name="SettingsTermsScreen" component={SettingsTermsScreen} />
          <Stack.Screen name="SettingsPrivacyScreen" component={SettingsPrivacyScreen} />
          <Stack.Screen name="UserBadgesScreen" component={UserBadgesScreen} />
          

          {/* @demo remove-block-start */}
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="SettingsTermsScreen" component={SettingsTermsScreen} />
          <Stack.Screen name="SettingsPrivacyScreen" component={SettingsPrivacyScreen} />
        </>
      )}
      {/* @demo remove-block-end */}
      {/** 🔥 Your screens go here */}
    </Stack.Navigator>
  )
})
// React query initializing
const queryClient = new QueryClient()

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : WellxTheme}
      {...props}
    >
      <QueryClientProvider client={queryClient}>
        <AppStack />
      </QueryClientProvider>
    </NavigationContainer>
  )
})
