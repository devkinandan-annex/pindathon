import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import React, { FC, useState } from "react"
import { colors, spacing, typography } from "../../theme"
import { Button, Icon, Text } from "../../components"
import { subYears } from "date-fns"
import { Challenges } from "../../components/newsfeedComponents/Challenges"
import SuggestedChallenges from "../../components/newsfeedComponents/SuggestedChallenges"
import EmptyScreen from "../../components/Common/EmptyScreen"
import SkeletonLoader from "expo-skeleton-loader"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"

interface ChallengesProps extends AppStackScreenProps<"MyFollowingsScreen"> {}
export const MyFollowingsScreen: FC<ChallengesProps> = observer(function MyFollowingsScreen(
  _props,
) {
  const [emptyPost, setEmptyPost] = useState(false)
  const [suggestedChallenges, setSuggestedChallenges] = useState(true)
  const Loader = () => {
    return (
      <View>
        <View style={styles.loaderFirstContainer}>
          <SkeletonLoader boneColor="#F3F3F3" highlightColor="#E7ECEE">
            <SkeletonLoader.Item style={loaderStyles.icon} />
          </SkeletonLoader>
          <View style={styles.loaderFirstRightView}>
            <View style={styles.loaderFirstUpperLi}>
              <SkeletonLoader boneColor="#F3F3F3" highlightColor="#E7ECEE">
                <SkeletonLoader.Item style={loaderStyles.upperListItem} />
              </SkeletonLoader>
              <SkeletonLoader
                boneColor="#F3F3F3"
                highlightColor="#E7ECEE"
                //@ts-ignore
                style={loaderStyles.upperListLoader}
              >
                <SkeletonLoader.Item style={loaderStyles.tripledots} />
                <SkeletonLoader.Item style={loaderStyles.tripledots} />
                <SkeletonLoader.Item style={loaderStyles.tripledots} />
              </SkeletonLoader>
            </View>
            <SkeletonLoader
              boneColor="#F3F3F3"
              highlightColor="#E7ECEE"
              style={loaderStyles.lowerListLoader}
            >
              <SkeletonLoader.Item style={loaderStyles.lowerListItem} />
            </SkeletonLoader>
          </View>
        </View>

        <SkeletonLoader
          boneColor="#F3F3F3"
          highlightColor="#E7ECEE"
          style={loaderStyles.firstSimpleLoader}
        >
          <SkeletonLoader.Container style={loaderStyles.simpleListContainer}>
            {/* Ignore this */}
          </SkeletonLoader.Container>
        </SkeletonLoader>
        <SkeletonLoader
          boneColor="#F3F3F3"
          highlightColor="#E7ECEE"
          style={loaderStyles.secondSimpleLoader}
        >
          <SkeletonLoader.Container style={loaderStyles.simpleListContainer}>
            {/* Ignore this */}
          </SkeletonLoader.Container>
        </SkeletonLoader>
        <SkeletonLoader
          boneColor="#F3F3F3"
          highlightColor="#E7ECEE"
          style={loaderStyles.postLoader}
        >
          <SkeletonLoader.Container style={loaderStyles.postContainer}>
            {/* Ignore this */}
          </SkeletonLoader.Container>
        </SkeletonLoader>
        <View style={styles.heartgroup}>
          <Icon icon={"heartSkeleton"} size={50} style={styles.heartgroupicon} />
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        {/* Call here Skeleton Loader conditionally */}
        {emptyPost ? (
          <EmptyScreen Icon="emptyPost" title="MyFollowingScreen.emptyTextMyFollowing" />
        ) : (
          <View>
            <Challenges props={_props} navigation={undefined} route={undefined} />
            {suggestedChallenges && <SuggestedChallenges onPress={setSuggestedChallenges}/>}
            <Challenges props={_props} navigation={undefined} route={undefined} />
          </View>
        )}
      </ScrollView>
    </View>
  )
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: spacing.small,
  },
  addPostContainer: {
    flexDirection: "row",
    backgroundColor: colors.connectDeviceButton,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 24,
  },
  loaderFirstContainer: { marginTop: 24, borderRadius: 16, flexDirection: "row" },
  loaderFirstRightView: { marginLeft: 12 },
  loaderFirstUpperLi: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    // width: "72%",
  },
  heartgroup: { marginTop: 16, alignItems: "flex-end" },
  heartgroupicon: { height: 24, width: 50 },
})
const loaderStyles = {
  icon: { height: 52, width: 52, borderRadius: 60 },
  upperListItem: { height: 14, width: 82, borderRadius: 20, marginTop: 5 },
  upperListLoader: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  tripledots: { height: 4, width: 4, borderRadius: 20, marginLeft: 5 },
  lowerListLoader: {
    marginTop: 10,
  },
  lowerListItem: { height: 12, width: 247, borderRadius: 17 },
  firstSimpleLoader: { marginTop: 16 },
  simpleListContainer: {
    height: 12,
    borderRadius: 17,
  },
  secondSimpleLoader: { marginTop: 5 },
  postLoader: { marginTop: 22 },
  postContainer: {
    height: 175,
    borderRadius: 24,
  },
}
