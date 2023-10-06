import React, { 
  FC, useRef, useState 
} from "react"
import { 
  TouchableOpacity, 
  View, 
  ViewStyle, 
  StyleSheet, 
  TextInput,
  Platform
} from "react-native"

import { isRTL } from "../../i18n"
import { Icon, Screen, Text, Toggle } from "../../components"
import { colors, spacing, typography } from "../../theme"
import { MainBottomTabScreenProps } from "../../navigators/MainBottomTabNavigator"
import BadgePost from "../../components/Common/BadgePost"
import EmptyScreen from "../../components/Common/EmptyScreen"
import { observer } from "mobx-react-lite"
import BottomSheet from "../../components/BottomSheet/BottomSheet"
import WellxBtn from "../../components/Buttons/WellxBtn"


interface ChallengesScreenProps extends MainBottomTabScreenProps<"ChallengesScreen"> {
 data?: object
 challange?: any
}
export const ChallengesScreen: FC<ChallengesScreenProps> = observer(function ChallengesScreen(_props) {
    const [search, setSearch] = useState("");
    const [unitMode, setUnitMode] = useState(1)
    const [intervalMode, setIntervalMode] = useState([])
    const [sortByMode, setSortByMode] = useState(1)
    const refRBSheet = useRef(null)
    const [challange, setChallange] = useState<any>({
      NewChallenge: true
    });
    const openModal = () => {
      refRBSheet.current.open()
    }

    const closeModal = () => {
      refRBSheet.current.close()
    }

    const BadgePostBoxList = [
      {
        bedge: 'badge1',
        header: 'Virtual New York City Marathon',
        subHeader: 'Oct 8 to Nov 7, 2022',
        description: "Complete the Virtual TCS New York City Marathon between October 23 and November, 2022. Complete 100km run.",
        steps: "20000",
        userInfo: "",
        participantsNumber: "94"
      },
      {
        bedge: 'badge2',
        header: 'Virtual New York City Marathon',
        subHeader: 'Oct 8 to Nov 7, 2022',
        description: "Complete the Virtual TCS New York City Marathon between October 23 and November, 2022. Complete 100km run.",
        steps: "10000",
        userInfo: "",
        participantsNumber: "93"
      }, {
        bedge: 'badge3',
        header: 'Virtual New York City Marathon',
        subHeader: 'Oct 8 to Nov 7, 2022',
        description: "Complete the Virtual TCS New York City Marathon between October 23 and November, 2022. Complete 100km run.",
        steps: "15000",
        userInfo: "",
        participantsNumber: "50"
      }, {
        bedge: 'badge4',
        header: 'Virtual New York City Marathon',
        subHeader: 'Oct 8 to Nov 7, 2022',
        description: "Complete the Virtual TCS New York City Marathon between October 23 and November, 2022. Complete 100km run.",
        steps: "30000",
        userInfo: "",
        participantsNumber: "0"
      }
    ]

    const UnitFilter = [
      {
        name: "challengesScreen.filters.filterOneSteps",
        type: 1,
      },
      {
        name: "challengesScreen.filters.filterOneSleep",
        type: 2,
      },
    ]


    const IntervalFilter = [
      {
        name: "challengesScreen.filters.filterTwoDaily",
        type: 1,
      },
      {
        name: "challengesScreen.filters.filterTwoWeekly",
        type: 2,
      },
      {
        name: "challengesScreen.filters.filterTwoMonthly",
        type: 3,
      },
    ]

    const SortByFilter = [
      {
        name: "challengesScreen.filters.filterThreeNewToOld",
        type: 1,
      },
      {
        name: "challengesScreen.filters.filterThreeOldToNew",
        type: 2,
      },
      {
        name: "challengesScreen.filters.filterThreePopular",
        type: 3,
      },
    ]

    

    const searchItem = (val: string) => {
      setSearch(val);

    }
    const clearSearch = () => {
      setSearch("");
    }

    const checkInterval = (val: any) => {
      if(intervalMode.includes(val)){
        setIntervalMode(intervalMode.filter(item => item !== val))
      }else{
        setIntervalMode([...intervalMode , val])
      }
      
    }

    console.log(intervalMode);
    const filterModel = () => {
      return (
        <View style={styles.filterContainer}>
          <Text tx="challengesScreen.filters.filterOne" style={styles.filterLabel} />

          <View style={styles.filterUpperInner}>
            {UnitFilter.map((val, index) => (
              <Toggle  key={val.type}
                variant="radio"
                value={val.type == unitMode ? true : false}
                labelPosition="right"
                labelTx={val.name}
                labelStyle={styles.labelStyle}
                inputWrapperStyle={styles.inputContainer}
                inputInnerStyle={styles.inputInner}
                inputOuterStyle={styles.inputOuter}
                inputDetailStyle={styles.inputActive}
                onPress={() => setUnitMode(val.type)}
              />
            ))}
          </View>

          <Text tx="challengesScreen.filters.filterTwo" style={styles.filterLabel} />

          <View style={styles.filterUpperInner}>
            {IntervalFilter.map((val, index) => (
              <Toggle  
                key={val.type}
                variant="checkbox"
                value={intervalMode.includes(val.type) ? true : false}
                labelPosition="right"
                labelTx={val.name}
                labelStyle={styles.labelStyle}
                inputWrapperStyle={styles.inputContainer}
                // inputInnerStyle={styles.inputInner}
                inputOuterStyle={styles.inputOuter}
                inputDetailStyle={styles.inputActiveCheckBox}
                onPress={() => checkInterval(val.type)}
                
              />
            ))}
          </View>

          <Text tx="challengesScreen.filters.filterThree" style={styles.filterLabel} />

          <View style={styles.filterUpperInner}>
            {SortByFilter.map((val, index) => (
              <Toggle  key={val.type}
                variant="radio"
                value={val.type == sortByMode ? true : false}
                labelPosition="right"
                labelTx={val.name}
                labelStyle={styles.labelStyle}
                inputWrapperStyle={styles.inputContainer}
                inputInnerStyle={styles.inputInner}
                inputOuterStyle={styles.inputOuter}
                inputDetailStyle={styles.inputActive}
                onPress={() => setSortByMode(val.type)}
              />
            ))}
          </View>

          <View style={styles.buttonContainer}>
            <WellxBtn
              title="leaderboardScreen.filterCancel"
              onPress={closeModal}
              customStyle={styles.buttonStyle}
              btnType="normal"
              customStyleInner={styles.buttonStyleInner}
            />
            <WellxBtn
              title="leaderboardScreen.filterApply"
              onPress={() => console.log("Apply")}
              customStyle={styles.buttonStyle}
              btnType="blue"
              customStyleInner={styles.buttonStyleInner}
            />
          </View>
        </View>
      )
    }


    return <Screen preset="scroll" 
            contentContainerStyle={styles.container} 
            safeAreaEdges={["top"]}
            ScrollViewProps={{
              stickyHeaderIndices: [2],
              // invertStickyHeaders: true
            }}
          >
            
      <View>
        <Text preset="heading" tx="challengesScreen.title" style={styles.pageHeading} />
      </View>
      
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.subContainer} onPress={() => _props.navigation.navigate('Leaderboard')}>
          <View style={styles.upperInnerContainer}>
            <Icon icon="crown" style={styles.crownIcon} />
            <Icon icon="rightArrowBig" style={styles.rightArrow} />
          </View>
          <View style={styles.lowerInnerContainer}>
            <Text
              tx="challengesScreen.leaderboard"
              style={styles.leaderBoardTitle}
            />
            <Text
              tx="challengesScreen.leaderboardDetail"
              style={styles.leaderBoardSubTitle}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.subContainer} 
          onPress={() => _props.navigation.navigate('ChallengeNewTab', challange)}
        >
          <View style={styles.upperInnerContainer}>
            <Icon icon="myChallenges" style={styles.crownIcon} />
            <Icon icon="rightArrowBig" style={styles.rightArrow} />
          </View>
          <View style={styles.lowerInnerContainer}>
            <Text
              tx="challengesScreen.createChallenge"
              style={styles.leaderBoardTitle}
            />
            <Text
              tx="challengesScreen.createChallengeDetail"
              style={styles.leaderBoardSubTitle}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInnerLeft}>
          <Icon style={styles.searchIcon} icon="search" size={20} />
          {search != '' && 
          <TouchableOpacity style={styles.closeIconView} onPress={() => clearSearch()} >
           <Icon icon="closeCircle" size={20} color={colors.descText} style={styles.closeIcon} /> 
          </TouchableOpacity>
          }
          <TextInput
            style={styles.inputBox}
            placeholder="Search"
            placeholderTextColor={colors.descText}
            onChangeText={(v) => searchItem(v)}
            value={search}
          />
        </View>

        <View style={styles.searchInnerRight}>
          <TouchableOpacity style={styles.filterIconContainer} onPress={() => openModal()}>
            <Icon icon="filter" style={styles.filterIcon} color={colors.blue} />
          </TouchableOpacity>
        </View>


      </View>
      <View style={styles.BadgePostBox}>
        {BadgePostBoxList.length > 0 && search == '' ?
          BadgePostBoxList.map((val: any, index) => {
              const data: any = {
                singleValue: val,
                challangeScreen: true
              }

            return  <BadgePost  key={val.bedge}
              badge={val.bedge} header={val.header} 
              subHeader={val.subHeader} 
              btnTitle={'challengesScreen.buttonTitle'} 
              onPress={() => _props.navigation.navigate("ChallengedetailsScreen", data)}
              />
          }
            
          )

          :

          <EmptyScreen 
            customStyle={styles.emptySet}
            Icon="emptyChallenge" 
            title="challengesScreen.challengesEmptyHeading" 
            subTittle="challengesScreen.challengesEmptySubHeading" 
          />
        }
      </View>

      <BottomSheet
        type="filter"
        RenderComponent={filterModel()}
        refRBSheet={refRBSheet}
        height={712}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
        headerTitleTx="leaderboardScreen.filteHeading"
      />
    </Screen>
  })


const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    marginHorizontal: 16,
    display: "flex"
  },
  pageHeading: {
    marginBottom: spacing.small,
  },
  bottomSheetContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
  },
  wrapper: {
    backgroundColor: "rgba(36, 38, 39, 0.4)",
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    paddingBottom: 12
  },
  subContainer: {
    width: "48%",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 16,
    borderColor: colors.challangeBorder,
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
    shadowOffset: { width: 0, height: 0 },
    
    shadowOpacity: 4,
    shadowRadius: 5,
    backgroundColor: colors.background,
  },
  upperInnerContainer: {
    paddingLeft: 14,
    paddingRight: 21,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  lowerInnerContainer: {
    paddingHorizontal: 14,
  },
  leaderBoardTitle: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 16,
    color: colors.blackText,
    paddingBottom: 4,
  },
  leaderBoardSubTitle: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 18,
    color: colors.descText,
  },
  crownIcon: {
    width: 32,
    height: 32,
  },
  rightArrow: {
    width: 7,
    height: 14,
  },
  BadgePostBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    // paddingBottom: 125,
    marginTop: 24
  },
  emptySet: {
    // height: '100%'
  },
  searchContainer: {
    width: '100%',
    position:"relative",
    flexDirection: "row",
    backgroundColor: colors.background,
    display: "flex",
    flexWrap: "wrap"
  },
  searchInnerLeft: {
    // flex:0.8,
    width: "80%",
    marginVertical: 24,
    position: 'relative',
    marginRight: 8
    
  },
  searchInnerRight: {
    // flex:0.2,
    width: "15%",
    marginVertical: 24,
    position: "absolute",
    right: 0
  },
  inputBox: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    padding: 15,
    paddingLeft: 55,
    fontSize: 16,
    borderColor: colors.challangeBorder,
    fontFamily: typography.fonts.nexa.regular,
  },
  searchIcon: {
    position: "absolute",
    top: 18,
    left: 20
  },
  closeIconView: {
    width: 30,
    height: 45,
    position: "absolute",
    right: 10,
    top: 5,
    zIndex: 1,
    backgroundColor: colors.background,
  },
  closeIcon: {
    backgroundColor: colors.background,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 16,
    position: "absolute",
    top: 15,
    right: 10
  },
  filterIcon: {
    width: 20,
    height: 20
  },
  filterIconContainer: {
    borderWidth: 1,
    borderColor: colors.challangeBorder,
    borderRadius: 16,
    alignContent: "center",
    alignSelf:"center",
    padding: 17
  },
  filterContainer: {
    marginTop: 32,
    width: "100%",
  },
  filterUpperInner: {
    marginTop: 22,
    // flexWrap: 'wrap',
    // flex: 1,
    // flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 24,
  },
  filterLabel: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.bold,
    color: colors.blackText,
  },
  filterDownInner: {
    marginTop: 22,
  },
  labelStyle: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: typography.fonts.nexa.regular,
    color: colors.blackText,
    left: 0,
  },
  inputContainer: {
    marginVertical: 8,
  },
  inputInner: {
    // backgroundColor: colors.blue,
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
  inputActiveCheckBox: {
    backgroundColor: colors.blue,
  },
  buttonContainer: {
    marginTop: 43,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: "48%",
    borderRadius: 12,
    // backgroundColor: colors.connectDeviceButton,
    paddingVertical: 0,
  },
  buttonText: {
    textAlign: "center",
    color: colors.blue,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: typography.fonts.nexa.regular,
  },
  activeButton: {
    backgroundColor: colors.blue,
    color: colors.background,
  },
  buttonStyleInner: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: colors.connectDeviceButton,
  },
})
