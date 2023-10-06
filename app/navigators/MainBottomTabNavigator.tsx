import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Text } from "../components"
import { translate } from "../i18n"

import { ChallengesScreen } from "../screens/ChallengesScreen/ChallengesScreen"
import { MarketplaceScreen } from "../screens/MarketplaceScreen/MarketplaceScreen"
import { GoalsScreen } from "../screens/GoalsScreen/GoalsScreen"
import { MoreScreen } from "../screens/MoreScreen/MoreScreen"
import { NewsfeedScreen } from "../screens/NewsfeedScreen/NewsfeedScreen"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type MainBottomTabParamList = {
  NewsfeedScreen: undefined
  GoalsScreen: undefined
  ChallengesScreen: undefined
  MarketplaceScreen: undefined
  MoreScreen: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type MainBottomTabScreenProps<T extends keyof MainBottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainBottomTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<MainBottomTabParamList>()

export function MainBottomTabNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.activeTabs,
        tabBarInactiveTintColor: colors.normalTabs,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="NewsfeedScreen"
        component={NewsfeedScreen}
        options={{
          tabBarLabel: translate("mainBottomTabNavigator.newsfeedTab"),
          tabBarIcon: ({ focused }) =>
            <View style={focused && $activeTab}>
              {
                focused ? 
                  <Icon 
                  containerStyle={focused && $activeTabIcon} 
                  size={20}
                  icon="home_active"  
                  />
                :
                  <Icon 
                  containerStyle={focused && $activeTabIcon}
                  size={20} 
                  icon="home_inactive"  
                  />
              }
              
            </View>,
        }}
      />

      <Tab.Screen
        name="GoalsScreen"
        component={GoalsScreen}
        options={{
          tabBarLabel: translate("mainBottomTabNavigator.goalsTab"),
          tabBarIcon: ({ focused }) =>
            <View style={focused && $activeTab}>
              {
                focused ?
                <Icon 
                containerStyle={focused && $activeTabIcon} 
                size={20}
                icon="goal_active"  
                />
                :
                <Icon 
                containerStyle={focused && $activeTabIcon}
                size={20} 
                icon="goal_inactive"  
                />

              }
              
            </View>,
        }}
      />

      <Tab.Screen
        name="ChallengesScreen"
        component={ChallengesScreen}
        options={{
          tabBarLabel: translate("mainBottomTabNavigator.challengesTab"),
          tabBarIcon: ({ focused }) =>
            <View style={focused && $activeTab}>
              {
                focused ? 
                <Icon 
                containerStyle={focused && $activeTabIcon} 
                size={20}
                icon="challenge_active"  
                />
                :
                <Icon 
                containerStyle={focused && $activeTabIcon} 
                size={20}
                icon="challenge_inactive"  
                />

              }
              
            </View>,
        }}
      />

      <Tab.Screen
        name="MarketplaceScreen"
        component={MarketplaceScreen}
        options={{
          tabBarLabel: translate("mainBottomTabNavigator.marketplaceTab"),
          tabBarIcon: ({ focused }) =>
            <View style={focused && $activeTab}>

              {
                focused ? 
                <Icon 
                containerStyle={focused && $activeTabIcon} 
                size={20}
                icon="marketplace_active"  
                />
                :
                <Icon 
                containerStyle={focused && $activeTabIcon} 
                size={20}
                icon="marketplace_inactive"  
                />

              }


              
            </View>,
        }}
      />

      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          tabBarLabel: translate("mainBottomTabNavigator.moreTab"),
          tabBarIcon: ({ focused }) =>
            <View style={focused && $activeTab}>
              <Icon containerStyle={focused && $activeTabIcon} size={20} icon="more" color={focused && colors.activeTabs} />
            </View>,
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 10,
  fontFamily: typography.primary.regular,
  lineHeight: 14,
  
  flex: 1,
}
const $activeTab: ViewStyle = {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  bottom: 12,
  borderColor: colors.activeTabs,
  borderTopWidth: 3,

}
const $activeTabIcon: ViewStyle = {
  marginTop: 21,
  // width: 20,
  // height: 20

}



