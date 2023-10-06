import { StyleSheet, View, ViewStyle, TouchableOpacity } from "react-native"
import React, { FC, useState, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import SkeletonLoader from "expo-skeleton-loader"
import ActiveTab from './ChallengesScreen/ActiveTab';
import PrivateTab from './ChallengesScreen/PrivateTab';
import CompletedTab from './ChallengesScreen/CompletedTab';
interface MyChallengesProps extends AppStackScreenProps<"myProfile"> { }
export const MyChallenges: FC<MyChallengesProps> = observer(function MyChallenges(_props) {
  const [activeTab, setActiveTab] = useState(0)
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const Loader = () => {
    return (
      <View style={styles.loaderWrapper}>
        <View style={styles.loaderBoxWrapper}>
          <SkeletonLoader
            boneColor="#F3F3F3"
            highlightColor="#E7ECEE"
            style={loaderStyles.skeletonLoader}
          >
            <SkeletonLoader.Container style={loaderStyles.skeletonContainer}>
              {/* Ignore this */}
            </SkeletonLoader.Container>
            <SkeletonLoader.Item style={loaderStyles.firstList} />
            <SkeletonLoader.Item style={loaderStyles.secondList} />
            <SkeletonLoader.Item style={loaderStyles.thirdList} />
            <SkeletonLoader.Item style={loaderStyles.fourthList} />
          </SkeletonLoader>
        </View>
        <View style={styles.loaderBoxWrapper}>
          <SkeletonLoader
            boneColor="#F3F3F3"
            highlightColor="#E7ECEE"
            style={loaderStyles.skeletonLoader}
          >
            <SkeletonLoader.Container style={loaderStyles.skeletonContainer}>
              {/* Ignore this */}
            </SkeletonLoader.Container>
            <SkeletonLoader.Item style={loaderStyles.firstList} />
            <SkeletonLoader.Item style={loaderStyles.secondList} />
            <SkeletonLoader.Item style={loaderStyles.thirdList} />
            <SkeletonLoader.Item style={loaderStyles.fourthList} />
          </SkeletonLoader>
        </View>
      </View>
    )
  }
  const tabing = [
    {
      title: "moreScreen.myChallenges.active",
      id: 1,
    },
    {
      title: "moreScreen.myChallenges.private",
      id: 2,
    },
    {
      title: "moreScreen.myChallenges.completed",
      id: 3,
    },
  ]

  const renderTab = useMemo(() => {
    return (
      <View style={styles.tabContainer}>
        {tabing.map((val, index) => (
          <TouchableOpacity
            key={val.id}
            style={[styles.tabBtn, activeTab == index && styles.tabBtnActive]}
            onPress={() => setActiveTab(index)}
          >
            <Text
              tx={val.title}
              style={[styles.tabBtnText, activeTab == index && styles.tabBtnActiveText]}
            />
          </TouchableOpacity>
        ))}

      </View>
    )
  }, [activeTab])

  const renderTabComponent = useMemo(() => {
    switch (activeTab) {
      case 0:
        return <ActiveTab />;
      case 1:
        return <PrivateTab />;
      case 2:
        return <CompletedTab />;
      default:
        return null;
    }
  }, [activeTab])
  return (
    <Screen preset="fixed" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText={"moreScreen.myChallenges.title"}
        customStyle={{marginTop: 12}}
      />
      {/* Call here Skeleton Loader conditionally */}
      {/* {Array.from(Array(3).keys()).map((item, index) => {
          return <Loader />
        })} */}
      {renderTab}
      <View style={{marginTop: 14,}}>
      {renderTabComponent}
      </View>
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    loaderWrapper: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
    loaderBoxWrapper: {
      width: "48%",
      height: 236,
      borderRadius: 16,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: colors.palette.challangeBorder,
    },
    tabContainer: {
      // marginTop: 28,
      flexDirection: "row",
      justifyContent: "space-between",
      borderColor: colors.challangeBorder,
      borderWidth: 1,
      borderRadius: 14,
      padding: 4
    },
    tabBtn: {
      // paddingHorizontal: 32,
      paddingVertical: 14,
      // margin: 4,
      borderRadius: 14,
      width: '33%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tabBtnActive: {
      backgroundColor: colors.activeTabs,
    },
    tabBtnText: {
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 16,
      lineHeight: 18,
      color: colors.blackText,
    },
    tabBtnActiveText: {
      color: colors.background,
    },
  })
}
const loaderStyles = {
  skeletonLoader: { paddingHorizontal: 8, paddingTop: 8 },
  skeletonContainer: { height: 120, borderRadius: 12 },
  firstList: { width: 132, height: 12, borderRadius: 17, marginTop: 16 },
  secondList: { width: 132, height: 12, borderRadius: 17, marginTop: 5 },
  thirdList: { width: 132, height: 12, borderRadius: 17, marginTop: 10 },
  fourthList: { width: 132, height: 12, borderRadius: 17, marginTop: 6 },
}
