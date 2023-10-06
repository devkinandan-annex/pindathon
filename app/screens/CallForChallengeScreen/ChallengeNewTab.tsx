import { StyleSheet, View, ViewStyle, Modal, Alert, TouchableOpacity, Switch , Platform } from "react-native"
import React, { FC, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen, TextField, Toggle } from "../../components"
import WellxBtn from "../../components/Buttons/WellxBtn"
import TopHeader from "../../components/Header/TopHeader"
import BottomSheet from "../../components/BottomSheet/BottomSheet"
import WeekPicker from "../../components/Common/WeekPicker"
import MonthPicker from "../../components/Common/MonthPicker"
import TimePicker from "../../components/Common/TimePicker"
import DatePickerComp from "../../components/Common/DatePicker"
import moment from "moment"

interface ChallengeNewTabProps extends AppStackScreenProps<"ChallengeNewTab"> {
  newChallenge?: boolean
}
export const ChallengeNewTab: FC<ChallengeNewTabProps> = observer(function ChallengeNewTab(_props) {
  const { navigation, route }: any = _props

  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const [newChallenge, setNewChallenge] = useState(route.params.NewChallenge)
  const [selectedList, setSelectedList] = useState([])
  const [activeTab, setActiveTab] = useState(newChallenge ? 0 : 1)
  const [challengeName, setchallengeName] = useState("")
  const [challengeDesc, setchallengeDesc] = useState("")
  const [buttonActive, setButtonActive] = useState(true)
  const [paymentOption, setPaymentOption] = useState(0)
  const refRBSheet = useRef(null)
  const [goaltype, setGoalType] = useState("")
  const [date, setDate] = useState("")
  const [filterType, setFilterType] = useState("")
  const [filterTitle, setFilterTitle] = useState("")
  const [dayDate, setDayDate] = useState(new Date())
  const [dayTimeFrom, setDayTimeFrom] = useState(new Date())
  const [dayTimeTo, setDayTimeTo] = useState(new Date())
  const [viewTimeFrom, setViewTimeFrom] = useState("")
  const [viewTimeTo, setViewTimeTo] = useState("")
  const [fullDay, setFullDayValue] = useState(false)

  const callChallenge = [
    {
      type: 1,
      paymentType: "Daily",
    },
    {
      type: 2,
      paymentType: "Weekly",
    },
    {
      type: 3,
      paymentType: "Monthly",
    },
  ]

  const GoalType = [
    {
      name: "20.000 steps",
    },
    {
      name: "30.000 steps",
    },
    {
      name: "40.000 steps",
    },
    {
      name: "50.000 steps",
    },
  ]

  useEffect(() => {
    // console.log(route.params.selectedList.length);
    if (route?.params?.selectedList?.length > 0) {
      setSelectedList(route.params.selectedList)
    }
    console.log("dfdf")
  }, [route.params.selectedList])

  const openModal = (val: string, title: string) => {
    setFilterType(val)
    setFilterTitle(title)
    refRBSheet.current.open()
  }
  const closeModal = () => {
    refRBSheet.current.close()
  }

  const paymentMode = (type) => {
    setDate("")
    setViewTimeFrom("")
    setViewTimeTo("")
    setPaymentOption(type)
    setButtonActive(false)
  }

  const selectGoal = (type: string) => {
    setGoalType(type)
  }

  const selectDayDate = (val: any) => {
    let date = moment(val).format("D MMMM, YYYY")
    setDate(date)
    refRBSheet.current.close()
  }

  const selectDayTimeFrom = (val: any) => {
    let timeFrom = moment(val).format("LT")
    setViewTimeFrom(timeFrom)
    refRBSheet.current.close()
  }

  const selectDayTimeTo = (val: any) => {
    let timeTo = moment(val).format("LT")
    setViewTimeTo(timeTo)
    refRBSheet.current.close()
  }

  const onChange = (data: any) => {
    setDate(data)
  }

  const setFullDay = (val: any) => {
    setViewTimeFrom("")
    setViewTimeTo("")
    setFullDayValue(val)
  }

  const removeSelectUser = (data) => {
    setSelectedList((current) => current.filter((item) => item.userId !== data.userId))
  }

  const Filters = (filterType: string) => {
    return (
      <View style={styles.filterContainer}>
        {filterType == "gl" && (
          <View>
            {GoalType.map((val, index) => (
              <TouchableOpacity
                key={val.name}
                style={[
                  styles.filterSingle,
                  val.name == goaltype ? styles.active : styles.inActive,
                ]}
                onPress={() => selectGoal(val.name)}
                key={index}
              >
                <Text
                  text={val.name}
                  style={[
                    styles.filterTitle,
                    val.name == goaltype ? styles.active : styles.inActive,
                  ]}
                />
              </TouchableOpacity>
            ))}

            <WellxBtn
              title="challengesScreen.createNewChallalnge.setGoalButton"
              customStyle={styles.buttonMainSetGoal}
              disable={goaltype == "" ? true : false}
              btnType="primary"
              onPress={() => closeModal()}
            />
          </View>
        )}

        {filterType == "dd" && (
          <View>
            <View style={styles.pickerContainer}>
              <DatePickerComp date={dayDate} onDateChange={setDayDate} />
            </View>

            <View style={styles.timePickerButton}>
              <WellxBtn
                title="challengesScreen.timePeriod.datePickerBtnBack"
                customStyle={styles.timePickerBtnCustom}
                btnType="normal"
                onPress={() => closeModal()}
                customStyleInner={styles.buttonStyleInner}
              />
              <WellxBtn
                title="challengesScreen.timePeriod.datePickerBtnConfirm"
                customStyle={styles.timePickerBtnCustom}
                disable={false}
                btnType="blue"
                onPress={() => selectDayDate(dayDate)}
                customStyleInner={styles.buttonStyleInner}
              />
            </View>
          </View>
        )}
        {filterType == "dtf" && (
          <View>
            <View style={styles.pickerContainer}>
              <TimePicker date={dayTimeFrom} onDateChange={setDayTimeFrom} />
            </View>

            <View style={styles.timePickerButton}>
              <WellxBtn
                title="challengesScreen.timePeriod.datePickerBtnBack"
                customStyle={styles.timePickerBtnCustom}
                btnType="normal"
                onPress={() => closeModal()}
                customStyleInner={styles.buttonStyleInner}
              />
              <WellxBtn
                title="challengesScreen.timePeriod.datePickerBtnConfirm"
                customStyle={styles.timePickerBtnCustom}
                btnType="blue"
                onPress={() => selectDayTimeFrom(dayTimeFrom)}
                customStyleInner={styles.buttonStyleInner}
              />
            </View>
          </View>
        )}
        {filterType == "dtt" && (
          <View>
            <View style={styles.pickerContainer}>
              <TimePicker date={dayTimeTo} onDateChange={setDayTimeTo} />
            </View>

            <View style={styles.timePickerButton}>
              <WellxBtn
                title="challengesScreen.timePeriod.datePickerBtnBack"
                customStyle={styles.timePickerBtnCustom}
                btnType="normal"
                onPress={() => closeModal()}
                customStyleInner={styles.buttonStyleInner}
              />
              <WellxBtn
                title="challengesScreen.timePeriod.datePickerBtnConfirm"
                customStyle={styles.timePickerBtnCustom}
                btnType="blue"
                onPress={() => selectDayTimeTo(dayTimeTo)}
                customStyleInner={styles.buttonStyleInner}
              />
            </View>
          </View>
        )}
        {filterType == "wd" && (
          <View>
            <View style={styles.pickerContainer}>
              <WeekPicker onChange={onChange} />
            </View>

            <View style={styles.timePickerButton}>
              <WellxBtn
                title="challengesScreen.timePeriod.datePickerBtnBack"
                customStyle={styles.timePickerBtnCustom}
                btnType="normal"
                onPress={() => closeModal()}
                customStyleInner={styles.buttonStyleInner}
              />
              <WellxBtn
                title="challengesScreen.timePeriod.datePickerBtnConfirm"
                customStyle={styles.timePickerBtnCustom}
                btnType="blue"
                onPress={() => closeModal()}
                customStyleInner={styles.buttonStyleInner}
              />
            </View>
          </View>
        )}
        {filterType == "md" && (
          <View>
            <View style={styles.pickerContainer}>
              <MonthPicker onChange={onChange} />
            </View>

            <View style={styles.timePickerButton}>
              <WellxBtn
                title="challengesScreen.timePeriod.datePickerBtnBack"
                customStyle={styles.timePickerBtnCustom}
                btnType="normal"
                onPress={() => closeModal()}
                customStyleInner={styles.buttonStyleInner}
              />
              <WellxBtn
                title="challengesScreen.timePeriod.datePickerBtnConfirm"
                customStyle={styles.timePickerBtnCustom}
                btnType="blue"
                onPress={() => closeModal()}
                customStyleInner={styles.buttonStyleInner}
              />
            </View>
          </View>
        )}
      </View>
    )
  }

  const selectedTime = () => {
    return (
      <View>
        {paymentOption == 1 && (
          <View>
            <View style={styles.challengeForm}>
              <Text tx="challengesScreen.timePeriod.date" style={styles.LabelText} />
              <TouchableOpacity
                style={styles.ChallengeStepsBox}
                onPress={() => openModal("dd", "challengesScreen.timePeriod.dateHeading")}
              >
                <Text
                  text={date}
                  style={[styles.tabTextLeft, activeTab == 2 && styles.activeTextIcon]}
                />
                <Icon icon="rightArrow" size={14} style={styles.dropdowanIcon} />
              </TouchableOpacity>
            </View>
            {fullDay != true && (
              <View style={styles.dayTimeContainer}>
                <View style={[styles.challengeForm, styles.timeField]}>
                  <Text tx="challengesScreen.timePeriod.timeFrom" style={styles.LabelText} />
                  <TouchableOpacity
                    style={styles.ChallengeStepsBox}
                    onPress={() => openModal("dtf", "challengesScreen.timePeriod.timeFromHeading")}
                  >
                    <Text
                      text={viewTimeFrom}
                      style={[styles.tabTextLeft, activeTab == 2 && styles.activeTextIcon]}
                    />
                    <Icon icon="rightArrow" size={14} style={styles.dropdowanIcon} />
                  </TouchableOpacity>
                </View>
                <View style={[styles.challengeForm, styles.timeField]}>
                  <Text tx="challengesScreen.timePeriod.timeTo" style={styles.LabelText} />
                  <TouchableOpacity
                    style={styles.ChallengeStepsBox}
                    onPress={() => openModal("dtt", "challengesScreen.timePeriod.timeToHeading")}
                  >
                    <Text
                      text={viewTimeTo}
                      style={[styles.tabTextLeft, activeTab == 2 && styles.activeTextIcon]}
                    />
                    <Icon icon="rightArrow" size={14} style={styles.dropdowanIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View style={styles.dayToggleContainer}>
              <Text tx="challengesScreen.timePeriod.fullDay" style={styles.LabelText} />
              <Switch
                trackColor={{ false: colors.challangeBorder, true: colors.blue }}
                onValueChange={(e) => setFullDay(e)}
                value={fullDay}
              />
            </View>
          </View>
        )}

        {paymentOption == 2 && (
          <View>
            <View style={styles.challengeForm}>
              <Text tx="challengesScreen.timePeriod.date" style={styles.LabelText} />
              <TouchableOpacity
                style={styles.ChallengeStepsBox}
                onPress={() => openModal("wd", "challengesScreen.timePeriod.dateHeading")}
              >
                <Text
                  text={date}
                  style={[styles.tabTextLeft, activeTab == 2 && styles.activeTextIcon]}
                />
                <Icon icon="rightArrow" size={14} style={styles.dropdowanIcon} />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {paymentOption == 3 && (
          <View>
            <View style={styles.challengeForm}>
              <Text tx="challengesScreen.timePeriod.date" style={styles.LabelText} />
              <TouchableOpacity
                style={styles.ChallengeStepsBox}
                onPress={() => openModal("md", "challengesScreen.timePeriod.dateHeading")}
              >
                <Text
                  text={date}
                  style={[styles.tabTextLeft, activeTab == 2 && styles.activeTextIcon]}
                />
                <Icon icon="rightArrow" size={14} style={styles.dropdowanIcon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    )
  }

  // console.log(route.params.selectedList);
  return (
    <Screen
      preset="scroll"
      contentContainerStyle={newChallenge ? styles.containerNewChallenge : styles.container}
      safeAreaEdges={["top"]}
      ScrollViewProps={{
        stickyHeaderIndices: [0],
        // invertStickyHeaders: true
      }}
    >
      {newChallenge && (
        <TopHeader
          leftIcon="back"
          customStyle={{backgroundColor:colors.background}}
          onPressLeft={() => _props.navigation.goBack()}
          centerText={"challengesScreen.createNewChallalnge.headerTitle"}
        />
      )}
      <View style={styles.tabContainer}>
        <View style={styles.tabInner}>
          <TouchableOpacity
            style={[styles.tabInners, activeTab == 1 && styles.activeTab]}
            onPress={() => setActiveTab(1)}
          >
            <Icon
              icon="foot"
              size={24}
              style={styles.tabIcon}
              color={activeTab == 1 ? colors.background : colors.blackText}
            />
            <Text
              tx="goalScreen.newGoalSteps"
              style={[styles.tabText, activeTab == 1 && styles.activeTextIcon]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabInner}>
          <TouchableOpacity
            style={[styles.tabInners, activeTab == 2 && styles.activeTab]}
            onPress={() => setActiveTab(2)}
          >
            <Icon
              icon="moon"
              size={24}
              style={styles.tabIcon}
              color={activeTab == 2 ? colors.background : colors.blackText}
            />
            <Text
              tx="goalScreen.newGoalSleep"
              style={[styles.tabText, activeTab == 2 && styles.activeTextIcon]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.challengeForm}>
        <Text tx="challengesScreen.createNewChallalnge.setGoalTitle" style={styles.LabelText} />
        <TouchableOpacity
          style={styles.ChallengeStepsBox}
          onPress={() => openModal("gl", "challengesScreen.createNewChallalnge.setGoalTitle")}
        >
          <Text
            text={goaltype}
            style={[styles.tabTextLeft, activeTab == 2 && styles.activeTextIcon]}
          />
          <Icon icon="rightArrow" size={14} style={styles.dropdowanIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.challengeForm}>
        <Text
          tx="challengesScreen.createNewChallalnge.nameChallengeTitle"
          style={styles.LabelText}
        />
        <TextField
          maxLength={30}
          inputWrapperStyle={styles.ChallengeStepsBox}
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="text"
          placeholderTextColor={colors.descText}
          value={challengeName}
          onChangeText={setchallengeName}
        />
      </View>

      <View style={styles.challengeForm}>
        <View style={styles.LabelTextBox}>
          <Text tx="challengesScreen.createNewChallalnge.description" style={styles.LabelText} />
          <Text text="(Optional)" style={styles.LabelTextoptional} />
        </View>
        <TextField
          inputWrapperStyle={[styles.ChallengeStepsBox, styles.ChallengeTextarea]}
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Description text"
          placeholderTextColor={colors.descText}
          value={challengeDesc}
          onChangeText={setchallengeDesc}
        />
      </View>
      <View style={styles.radioBtnBox}>
        <Text
          tx="challengesScreen.createNewChallalnge.timePeriodTitle"
          style={styles.radioBtnTitle}
        />
        <View style={styles.radioButtonTabItem}>
          {callChallenge.map((val, index) => (
            <View style={styles.radioButtonTabItemInner} key={val.type}>
              <Toggle
                variant="radio"
                onPress={() => paymentMode(val.type)}
                value={paymentOption === val.type}
                labelPosition="right"
                labelTx={"marketplaceModal.LabelText"}
                labelStyle={styles.labelStyle}
                inputWrapperStyle={styles.inputContainer}
                inputInnerStyle={styles.inputInner}
                inputOuterStyle={styles.inputOuter}
                inputDetailStyle={styles.inputActive}
              />
              <Text style={styles.radioboxtitle} text={val.paymentType} />
            </View>
          ))}
        </View>
        {selectedTime()}
      </View>

      <Text
        tx="challengesScreen.createNewChallalnge.inviteParticipant"
        style={styles.radioBtnTitle}
      />
      <View>
        {selectedList.map((item, index) => (
          <View style={styles.navigationItem} key={index}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.navigationItemLeft}>
                <Icon icon={item.profile} size={52} />
              </View>
              <View style={styles.navigationItemRight}>
                <Text style={styles.itemTitle} text={item.name} />
                <Text style={styles.itemSubTitle} text={item.username} />
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={() => removeSelectUser(item)}>
                <Icon icon="close" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {newChallenge ? (
        <TouchableOpacity
          style={styles.addPostContainer}
          onPress={() => _props.navigation.navigate("inviteFriends")}
        >
          <Icon icon="plus" color={colors.blackText} style={styles.addIcon} />
          <Text
            tx="challengesScreen.createNewChallalnge.inviteFromApp"
            style={styles.addPostText}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.addPostContainer}>
          <Icon icon="plus" color={colors.blackText} style={styles.addIcon} />
          <Text tx="MyFollowingScreen.addPost" style={styles.addPostText} />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.appBtnContainer}>
        <Text tx="CallForChallenge.appBtnTitle" style={styles.appBtnText} />
      </TouchableOpacity>

      <View style={styles.VoucherBtn}>
        {newChallenge ? (
          <WellxBtn
            title="challengesScreen.createNewChallalnge.buttonText"
            customStyle={styles.buttonMain}
            disable={buttonActive}
            btnType="primary"
            onPress={() => alert("create Challenege")}
          />
        ) : (
          <WellxBtn
            title="CallForChallenge.challengeBtn"
            customStyle={styles.buttonMain}
            disable={buttonActive}
            btnType="primary"
          />
        )}
      </View>

      <BottomSheet
        RenderComponent={Filters(filterType)}
        refRBSheet={refRBSheet}
        height={420}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
        headerTitleTx={filterTitle}
      />
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      width: "100%",
      flex: 1,
      height: "100%",
    },
    containerNewChallenge: {
      paddingTop: 12,
      marginHorizontal: 16,
      display: "flex",
    },

    navigationItem: {
      display: "flex",
      flexDirection: "row",
      paddingHorizontal: 14,
      paddingVertical: 16,
      backgroundColor: colors.background,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 4,
      shadowRadius: 7,
      marginBottom: 10,
      // alignContent: 'center',
      alignItems: "center",
      justifyContent: "space-between",
    },

    navigationItemLeft: {
      width: 52,
      height: 52,
      marginRight: 12,
      borderRadius: 100,
      borderWidth: 1,
      overflow: "hidden",
      borderColor: colors.challangeBorder,
    },
    navigationItemRight: {
      position: "relative",
    },
    itemTitle: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.bold,
      color: colors.blackText,
      marginBottom: 4,
    },
    itemSubTitle: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.descText,
    },

    radioBtnBox: {
      width: "100%",
    },
    radioBtnTitle: {
      fontSize: 18,
      lineHeight: 22,
      fontFamily: typography.fonts.nexa.bold,
      color: colors.blackText,
      marginTop: 32,
      marginBottom: 16,
    },
    radioboxtitle: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
    },
    labelStyle: {
      fontSize: 14,
      lineHeight: 0,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
    },
    inputContainer: {
      marginVertical: 0,
    },
    inputInner: {
      borderWidth: 6,
      borderRadius: 25,
      borderColor: colors.blue,
    },
    inputOuter: {
      borderColor: colors.challangeBorder,
      backgroundColor: colors.background,
    },
    inputActive: {
      backgroundColor: colors.background,
    },
    textInput: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,

      color: colors.blackText,
    },
    radioButtonTabItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 26,
    },
    radioButtonTabItemInner: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginRight: 36,
    },
    LabelTextoptional: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,

      color: colors.normalTabs,
      marginLeft: 6,
    },
    tabContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      // marginTop:24,
    },

    LabelText: {
      paddingBottom: 8,
      fontSize: 16,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.bold,
    },
    challengeForm: {
      marginTop: 24,
    },
    ChallengeStepsBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center",
      height: 54,
      justifyContent: "space-between",
      paddingHorizontal: 14,
      paddingVertical: 5,
      backgroundColor: colors.background,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 7,
    },
    ChallengeTextarea: {
      height: 110,
    },
    dropdowanIcon: {
      transform: [{ rotate: "90deg" }],
    },
    LabelTextBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },

    tabInner: {
      width: "48%",
    },
    tabInners: {
      width: "100%",
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      backgroundColor: colors.background,
      shadowOpacity: 4,
      shadowRadius: 7,
      borderWidth: 1,
      alignItems: "center",
      borderColor: colors.challangeBorder,
      paddingHorizontal: 14,
      paddingVertical: 16,
      borderRadius: 16,
    },
    tabIcon: {
      width: 24,
    },
    tabText: {
      paddingTop: 12,
      fontSize: 18,
      lineHeight: 22,
      fontFamily: typography.fonts.nexa.bold,
    },
    tabTextLeft: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.bold,
    },
    activeTab: {
      backgroundColor: colors.activeTabs,
    },
    activeTextIcon: {
      color: colors.background,
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
    appBtnContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 12,
      marginTop: 10,
      marginBottom: 24,
      backgroundColor: colors.background,
    },
    appBtnText: {
      fontSize: 15,
      fontFamily: typography.fonts.nexa.bold,
      lineHeight: 18,
      color: colors.activeTabs,
      paddingVertical: 10,
    },
    addPostText: {
      fontSize: 14,
      fontFamily: typography.fonts.nexa.regular,
      lineHeight: 18,
      
      color: colors.blackText,
      paddingVertical: 12,
    },
    addIcon: {
      maxHeight: 16,
      maxWidth: 16,
      marginRight: 5,
    },

    VoucherBtn: {
      width: "100%",
      marginBottom: 16,
      paddingVertical: 8,
      borderTopWidth: 1,
      backgroundColor: colors.background,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 4,
      shadowRadius: 7,
    },
    buttonMain: {
      width: "100%",
      paddingBottom: 25,
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    wrapper: {
      backgroundColor: "rgba(36, 38, 39, 0.4)",
    },
    filterContainer: {
      paddingTop: 20,
      width: "100%",
    },
    filterSingle: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      borderRadius: 14,
      marginBottom: 8,
      width: "100%",
    },
    filterTitle: {
      fontSize: 14,
      lineHeight: 14,
      fontFamily: typography.fonts.nexa.bold,
      color: colors.blackText,
    },
    active: {
      color: colors.blue,
      borderColor: colors.blue,
    },
    inActive: {
      color: colors.blackText,
      borderColor: colors.challangeBorder,
    },
    buttonMainSetGoal: {
      paddingTop: 20,
    },
    dayTimeContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    timeField: {
      width: "49%",
    },
    timePickerButton: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    timePickerBtnCustom: {
      width: "49%",
    },
    buttonStyleInner: {
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderRadius: 16,
      backgroundColor: colors.connectDeviceButton,
    },
    pickerContainer: {
      alignSelf: "center",
      paddingVertical: 12,
    },
    dayToggleContainer: {
      paddingTop: 22,
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
    },
  })
}
