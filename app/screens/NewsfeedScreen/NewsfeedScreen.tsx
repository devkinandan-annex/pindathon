import React, { FC, ReactElement, useEffect, useRef, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageStyle,
  ScrollView,
  SectionList,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
// import { useSharedValue } from "react-native-reanimated"
// import { SafeAreaView } from "react-native-safe-area-context"
import { isRTL } from "../../i18n"
import { Header, ListItem, Screen, Text } from "../../components"
import { colors, spacing } from "../../theme"

import { MainBottomTabScreenProps } from "../../navigators/MainBottomTabNavigator"
import { useQuery } from "@tanstack/react-query"
import { axiosInstance, api } from "../../services/api"
import { useFetchData } from "../../services/api/apiHooks"
import NewsfeedHeader from "../../components/newsfeedComponents/NewsfeedHeader"
import DailyGoal from "../../components/newsfeedComponents/DailyGoal"
import FollowAndOrganization from "../../components/newsfeedComponents/FollowAndOrganization"
import ConnctDevice from "../../components/newsfeedComponents/ConnctDevice"

export const NewsfeedScreen: FC<MainBottomTabScreenProps<"NewsfeedScreen">> =
  function NewsfeedScreen(_props) {
    const [connectDeviceBanner, setConnectDeviceBanner] = useState(true)
    const { isLoading, data, error } = useFetchData({
      apiUrl: "/newsfeed",
      apiResourceName: "newsfeed",
    })

    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <ScrollView>
          <NewsfeedHeader prop={_props} />
          <DailyGoal />
          {connectDeviceBanner && <ConnctDevice prop={_props} onPress={setConnectDeviceBanner} />}
          <FollowAndOrganization prop={_props} />
        </ScrollView>
      </Screen>
    )
  }

const $container: ViewStyle = {
  // paddingTop: spacing.large + spacing.extraLarge,
  // paddingHorizontal: spacing.small,
  // marginHorizontal: 20,
  backgroundColor: colors.background,
  // flex:1.
}

const $title: TextStyle = {
  marginBottom: spacing.small,
}

const $tagline: TextStyle = {
  marginBottom: spacing.huge,
}

const $description: TextStyle = {
  marginBottom: spacing.large,
}

const $sectionTitle: TextStyle = {
  marginTop: spacing.huge,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.medium,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
}

const $logo: ImageStyle = {
  height: 38,
  width: 38,
}
