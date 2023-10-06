import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen, TextField, Button } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import { typography } from "../../theme"
import { keys } from "mobx"
import BottomSheet from "../../components/BottomSheet/BottomSheet"
import CustomFlatList from "../../components/Common/CustomFlatList"
interface PostScreenProps extends AppStackScreenProps<"PostScreen"> {}
export const PostScreen: FC<PostScreenProps> = observer(function PostScreen(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const [postContent, setPostContent] = useState(String)
  const [userLevel, setUserLevel] = useState(9)
  const [selectedAchievement, setSelectedAchievement] = useState(Object)
  const refRBSheet = useRef(null)
  function openModal() {
    refRBSheet.current.open()
  }
  const isSubmitDataValid = (postContent !== "" || Object.keys(selectedAchievement).length) !== 0
  const completePostData = { selectedAchievement, postContent }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.modalLiWrapper}
        onPress={() => {
          refRBSheet.current.close(), setSelectedAchievement(item)
        }}
        key={item.id}
      >
        <View style={styles.modalIconWrapper}>
          <Icon icon={item.icon} style={styles.achievementIcon} />
        </View>
        <Text text={item.title} style={styles.achievmentListTitle} />
      </TouchableOpacity>
    )
  }
  function AchievementListModal() {
    return (
      <View style={styles.flatListWrapper}>
        <FlatList
          data={achievementList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.allListContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <View style={styles.topWrapper}>
        <TopHeader
          leftIcon="back"
          onPressLeft={() => _props.navigation.goBack()}
          centerText="PostScreen.pageTitle"
          rightIcon="check"
          textStyleCenter={styles.postHeader}
          customRightStyle={isSubmitDataValid && styles.customRightStyle}
          customRightIconStyle={isSubmitDataValid && colors.palette.neutral100}
        />
        {userLevel >= 9 ? (
          <TextField
            multiline={true}
            numberOfLines={4}
            placeholder="Whats new?"
            onChangeText={(text) => setPostContent(text)}
            value={postContent}
            style={styles.highLevelTextField}
            placeholderTextColor={colors.descText}
            inputWrapperStyle={styles.highLevelWrapper}
          />
        ) : postContent ? (
          <View style={styles.lowlevelSelectedView}>
            <Text text={postContent} style={styles.lowLevelSelectedText} />
            <Pressable style={styles.unSelectButton} onPress={() => setPostContent("")}>
              <Icon icon="close" size={10} style={styles.cancelIcon} />
            </Pressable>
          </View>
        ) : (
          <View style={styles.suggestionListContainer}>
            {lowLevelPostSuggestion.map(({ title, id }) => (
              <TouchableOpacity
                onPress={() => setPostContent(title)}
                style={styles.suggestionTouchable}
              >
                <Text key={id} text={title} style={styles.suggestionText} />
              </TouchableOpacity>
            ))}
          </View>
        )}
        {selectedAchievement.icon && selectedAchievement.title && (
          <View style={{ position: "relative" }}>
            <View style={styles.selectedAchievementContainer}>
              <View style={styles.selectedAchievemenIconWrapper}>
                <Icon icon={selectedAchievement.icon} style={styles.selectedAchievementIcon} />
              </View>
              <Text text={selectedAchievement.title} style={styles.selectedAchievementTitle} />
            </View>
            <TouchableOpacity
              style={styles.removeAchievementButton}
              onPress={() => setSelectedAchievement({})}
            >
              <Icon icon="close" size={10} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.achievementContainer}>
        <View style={styles.TitleContainer}>
          <Text tx="PostScreen.achievementTitle" style={styles.achievementTitle} />
          <TouchableOpacity onPress={() => openModal()}>
            <Text tx="PostScreen.viewAll" style={styles.viewAllText} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} keyboardShouldPersistTaps={"always"}>
          {achievementList.map(({ id, title, icon }) => (
            <TouchableOpacity
              style={styles.achievementListWrapper}
              onPress={() => setSelectedAchievement({ id, title, icon })}
              key={id}
            >
              <Icon icon={icon} style={styles.achievementIcon} />
              <Text text={title} style={styles.achievmentListTitle} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <BottomSheet
        RenderComponent={AchievementListModal()}
        refRBSheet={refRBSheet}
        height={550}
        containerStyle={styles.bottomSheetContainer}
        headerTitleTx="PostScreen.achievementAllHeading"
      />
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  console.log("typography", colors)
  return StyleSheet.create({
    container: {
      // padddingHorizontal: 16,
      marginTop: 12,
      flex: 1,
      display: "flex",
      width: "100%",
    },
    topWrapper: {
      height: "100%",
      width: "100%",
      position: "relative",
      paddingHorizontal: 16,
      flex: 1,
    },
    postHeader: {
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 16,
      lineHeight: 18,
      color: colors.blackText,
    },
    customRightStyle: {
      backgroundColor: colors.activeTabs,
    },
    customRightIcon: {
      color: "#ffffff",
    },
    highLevelTextField: {
      textAlignVertical: "top",
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 18,
      lineHeight: 22,
      color: colors.blackText,
      marginVertical: 0,
      marginHorizontal: 0,
      borderWidth: 0,
      paddingTop: 4,
      backgroundColor: "#ffffff",
    },
    highLevelWrapper: {
      borderWidth: 0,
    },
    lowlevelSelectedView: {
      padding: 12,
      borderRadius: 16,
      justifyContent: "flex-start",
      alignSelf: "flex-start",
      backgroundColor: colors.activeTabs,
      flexDirection: "row",
      marginTop: 8,
    },
    lowLevelSelectedText: {
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 18,
      lineHeight: 22,
      color: colors.palette.neutral100,
    },
    unSelectButton: {
      height: 20,
      width: 20,
      backgroundColor: colors.palette.neutral100,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 14,
      marginLeft: 14,
    },
    cancelIcon: { backgroundColor: colors.palette.neutral100 },
    suggestionTouchable: {
      marginTop: 8,
      borderRadius: 16,
      backgroundColor: colors.palette.connectDeviceButton,
    },
    suggestionText: {
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 18,
      lineHeight: 22,
      color: colors.blackText,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    suggestionListContainer: { alignItems: "flex-start" },
    achievementContainer: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      left: 0,
      paddingHorizontal: 16,
      backgroundColor: colors.palette.neutral100,
    },

    TitleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "stretch",
      alignItems: "center",
      width: "100%",
    },
    achievementTitle: {
      fontSize: 16,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 18,
      color: colors.blackText,
    },
    viewAllText: {
      fontSize: 16,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 18,
      color: colors.activeTabs,
    },
    achievementIcon: {
      height: 52,
      width: 50,
    },
    achievmentListTitle: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 18,
      marginLeft: 16,
      color: colors.blackText,
      maxWidth: 180,
    },
    achievementListWrapper: {
      marginVertical: 21,
      flexDirection: "row",
      width: 250,
      alignItems: "center",
      marginRight: 8,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.connectDeviceButton,
      borderStyle: "solid",
      paddingLeft: 16,
      paddingRight: 12,
      paddingVertical: 16,
    },
    selectedAchievementContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 28,
      width: "100%",
      borderColor: colors.challangeBorder,
      borderRadius: 24,
      borderWidth: 1,
      borderStyle: "solid",
    },
    selectedAchievemenIconWrapper: {
      padding: 22,
    },
    selectedAchievementIcon: {
      height: 130,
      width: 130,
    },
    selectedAchievementTitle: {
      fontSize: 18,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 22,
      color: colors.blackText,
      marginLeft: 6,
      maxWidth: "50%",
      paddingRight: 22,
    },
    removeAchievementButton: {
      height: 28,
      width: 28,
      borderRadius: 60,
      backgroundColor: colors.challangeBorder,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: 20,
      right: -5,
      zIndex: 1,
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
      width: "100%",
    },
    modalLiWrapper: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: colors.connectDeviceButton,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 16,
      marginBottom: 16,
    },
    modalIconWrapper: {
      paddingHorizontal: 17,
      paddingVertical: 16,
    },
    allListContainer: {
      marginTop: 32,
    },
    flatListWrapper: { marginBottom: 100 },
  })
}
const lowLevelPostSuggestion = [
  {
    id: 1,
    title: "Hey, This is my new!",
  },
  {
    id: 2,
    title: "I'm tired.",
  },
  {
    id: 3,
    title: "I met my daily goal today",
  },
  {
    id: 4,
    title: "Call me to the challenge",
  },
]
const achievementList = [
  {
    id: 1,
    title: "First place at October steps challenge",
    icon: "firstPrize",
  },
  {
    id: 2,
    title: "Received a sleep score badge",
    icon: "badge2",
  },
  {
    id: 3,
    title: "First place at October steps challenge",
    icon: "firstPrize",
  },
  {
    id: 4,
    title: "Received a sleep score badge",
    icon: "badge2",
  },
  {
    id: 5,
    title: "First place at October steps challenge",
    icon: "firstPrize",
  },
  {
    id: 6,
    title: "Received a sleep score badge",
    icon: "badge2",
  },
]
