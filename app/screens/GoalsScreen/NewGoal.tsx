import { Platform, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing, typography } from "../../theme"
import TopHeader from "../../components/Header/TopHeader"
import { Icon, Screen, Text } from "../../components"
import WellxBtn from "../../components/Buttons/WellxBtn"
interface NewGoalProps extends AppStackScreenProps<"NewGoal"> {}
export const NewGoal: FC<NewGoalProps> = observer(function NewGoal(_props) {
  const [activeTab, setActiveTab] = useState(1)
  const [level, setLevel] = useState(1)
  const [levelSteps, setLevelSteps] = useState("0")
  const [levelSleep, setLevelSleep] = useState("0")
  const [levelCoin, setLevelCoin] = useState("0")

  const levelData = [
    {
      lvl1: {
        steps: "5.000",
        xcoin: "5000",
        sleep: "70%",
      },
      lvl2: {
        steps: "10.000",
        xcoin: "10000",
        sleep: "80%",
      },
      lvl3: {
        steps: "15.000",
        xcoin: "15000",
        sleep: "90%",
      },
    },
  ]

  useEffect(() => {
    console.log(activeTab)
    console.log(level)

    if (activeTab == 1) {
      if (level == 1) {
        setLevelSteps(levelData[0].lvl1.steps)
        setLevelCoin(levelData[0].lvl1.xcoin)
      }
      if (level == 2) {
        setLevelSteps(levelData[0].lvl2.steps)
        setLevelCoin(levelData[0].lvl2.xcoin)
      }
      if (level == 3) {
        setLevelSteps(levelData[0].lvl3.steps)
        setLevelCoin(levelData[0].lvl3.xcoin)
      }
    } else {
      if (level == 1) {
        setLevelSleep(levelData[0].lvl1.sleep)
        setLevelCoin(levelData[0].lvl1.xcoin)
      }
      if (level == 2) {
        setLevelSleep(levelData[0].lvl2.sleep)
        setLevelCoin(levelData[0].lvl2.xcoin)
      }
      if (level == 3) {
        setLevelSleep(levelData[0].lvl3.sleep)
        setLevelCoin(levelData[0].lvl3.xcoin)
      }
    }
  }, [activeTab, level])

  function setGoal() {
    alert("Goal set Done")
  }

  const SelectGoal = () => {
    return (
      <View style={styles.selectGoalContainer}>
        <Text tx="goalScreen.Goallevel.selectLevel" style={styles.selectLevelTitle} />

        <View style={styles.levelBoxContainer}>
          <View style={styles.levelHeadingContainer}>
            <Text tx="goalScreen.Goallevel.level1" style={styles.levelHeading} />
            <Text tx="goalScreen.Goallevel.level2" style={styles.levelHeading} />
            <Text tx="goalScreen.Goallevel.level3" style={styles.levelHeading} />
          </View>
          <View style={styles.levelBarContainer}>
            <View style={styles.levelBar}>
              <TouchableOpacity onPress={() => setLevel(1)} style={[styles.levelPointerOne]}>
                <View style={level == 1 && styles.activeLevelPointer} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setLevel(2)} style={[styles.levelPointerTwo]}>
                <View style={level == 2 && styles.activeLevelPointer} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setLevel(3)} style={[styles.levelPointerThree]}>
                <View style={level == 3 && styles.activeLevelPointer} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.levelDataContainer}>
            {activeTab == 1 ? (
              <>
                <Text text={levelSteps} style={styles.stepsAndSleep} />
                <Text tx="goalScreen.stepsOneDay" style={styles.stepsAndSleepTitle} />
              </>
            ) : (
              <>
                <Text text={levelSleep} style={styles.stepsAndSleep} />
                <Text tx="goalScreen.sleepOneDay" style={styles.stepsAndSleepTitle} />
              </>
            )}

            <View style={styles.stepsAndSleepCoins}>
              <Text text={levelCoin} style={styles.xcoinValue} />
              <Text tx="goalScreen.coin" style={styles.xcoinTitle} />
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top", "bottom"]}
    >
      <TopHeader
        centerText="goalScreen.newGoal"
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
      />
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabInner, activeTab == 1 && styles.activeTab]}
          onPress={() => setActiveTab(1)}
        >
          <Icon
            icon="foot"
            style={styles.tabIcon}
            color={activeTab == 1 ? colors.background : colors.blackText}
          />
          <Text
            tx="goalScreen.newGoalSteps"
            style={[styles.tabText, activeTab == 1 && styles.activeTextIcon]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabInner, activeTab == 2 && styles.activeTab]}
          onPress={() => setActiveTab(2)}
        >
          <Icon
            icon="moon"
            style={styles.tabIcon}
            color={activeTab == 2 ? colors.background : colors.blackText}
          />
          <Text
            tx="goalScreen.newGoalSleep"
            style={[styles.tabText, activeTab == 2 && styles.activeTextIcon]}
          />
        </TouchableOpacity>
      </View>
      <SelectGoal />
      <WellxBtn
        title="goalScreen.newGoalSave"
        onPress={setGoal}
        btnType="primary"
        customStyle={{ position: "absolute", bottom: 16 }}
      />
    </Screen>
  )
})
const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.medium,
    flex: 1,
  },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabInner: {
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
elevation: Platform.OS == 'android' && 3,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: colors.background,
    shadowOpacity: 4,
    shadowRadius: 7,
    width: "48%",
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle:'solid',
    borderColor: colors.connectDeviceButton
  },
  tabIcon: {},
  tabText: {
    paddingTop: 60,
    fontSize: 24,
    fontFamily: typography.fonts.nexa.bold,
  },
  activeTab: {
    backgroundColor: colors.activeTabs,
  },
  activeTextIcon: {
    color: colors.background,
  },
  selectGoalContainer: {
    marginTop: 32,
  },
  selectLevelTitle: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: typography.fonts.nexa.bold,
    
    color: colors.blackText,
  },
  levelBoxContainer: {
    marginTop: 20,
  },
  levelHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  levelHeading: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.bold,
    
    color: colors.blackText,
  },
  levelBarContainer: {
    marginTop: 24,
  },
  levelBar: {
    backgroundColor: colors.challangeBorder,
    height: 4,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    display: "flex",
  },
  levelPointerOne: {
    top: -2,
    backgroundColor: colors.challangeBorder,
    height: 8,
    width: 8,
    borderRadius: 12,
    position: "absolute",
  },
  levelPointerTwo: {
    top: -2,
    backgroundColor: colors.challangeBorder,
    height: 8,
    width: 8,
    borderRadius: 12,
    left: "50%",
    position: "absolute",
  },
  levelPointerThree: {
    top: -2,
    backgroundColor: colors.challangeBorder,
    height: 8,
    width: 8,
    borderRadius: 12,
    right: 0,
    position: "absolute",
  },
  activeLevelPointer: {
    padding: 6,
    borderWidth: 8,
    borderColor: colors.activeTabs,
    backgroundColor: colors.background,
    borderRadius: 18,
    top: -10,
    right: 10,
  },
  levelDataContainer: {
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
    elevation: Platform.OS == 'android' && 3,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: colors.background,
    shadowOpacity: 4,
    shadowRadius: 7,
    marginTop: 35,
    paddingTop: 17,
    borderRadius: 16,
    borderColor: colors.connectDeviceButton,
    borderWidth: 1
  },
  stepsAndSleep: {
    fontSize: 40,
    lineHeight: 48,
    fontFamily: typography.fonts.nexa.bold,
    
    color: colors.blackText,
    textAlign: "center",
  },
  stepsAndSleepTitle: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: typography.fonts.nexa.bold,
    
    color: colors.blackText,
    paddingBottom: 17,
    textAlign: "center",
  },
  stepsAndSleepCoins: {
    backgroundColor: colors.lightBlue,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  xcoinValue: {
    fontSize: 20,
    lineHeight: 22,
    fontFamily: typography.fonts.nexa.bold,
    
    color: colors.blue,
    paddingVertical: 17,
    paddingRight: 6,
  },
  xcoinTitle: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: typography.fonts.nexa.bold,
    
    color: colors.blue,
  },
})
