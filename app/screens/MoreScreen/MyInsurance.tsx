import { ImageBackground, StyleSheet, View, TouchableOpacity, Platform } from "react-native"
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import { TextInput } from "react-native-gesture-handler"
import CustomFlatList from "../../components/Common/CustomFlatList"
import { HospitalScreen } from "./HospitalScreen"
interface MyInsuranceProps extends AppStackScreenProps<"myInsurance"> {
  _props?: any
}

export const MyInsurance: FC<MyInsuranceProps> = observer(function MyInsurance(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)

  const [activeIndex, setActiveIndex] = useState(1)
  const [search, setSearch] = useState("")
  const searchItem = (val: string) => {
    setSearch(val)
  }

  const MyDocuments = () => {
    return (
      <View>
        <View style={styles.searchBar}>
          <Icon style={styles.searchIcon} icon="search" size={20} />
          <TouchableOpacity
            style={styles.closeIconMain}
            onPress={() => clearSearch()}
          ></TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onChangeText={(v) => searchItem(v)}
            value={search}
          />
        </View>

        <CustomFlatList data={dummyArray} type="btn" bigButton="true" onpress={alert} />
      </View>
    )
  }

  const TabScreens = () => {
    switch (activeIndex) {
      case 2:
        return <HospitalScreen props={_props} />
        break

      default:
        return MyDocuments()
        break
    }
  }

  const clearSearch = () => {
    setSearch("")
  }

  const activeTab = (val) => {
    setActiveIndex(val)
  }

  const dummyArray = [
    {
      leftIcon: "documentsIcon",
      tittle: "moreScreen.myInsurance.documentsTitle",
      subTitle:'12.12.2022',
      rightIcon: "downloadIcon",
      routeName: "HospitalScreen",
    },
    {
      leftIcon: "documentsIcon",
      tittle: "moreScreen.myInsurance.documentsTitle2",
      subTitle:'12.12.2022',
      rightIcon: "downloadIcon",
    },
    {
      leftIcon: "documentsIcon",
      tittle: "moreScreen.myInsurance.documentsTitle3",
      subTitle:'12.12.2022',
      rightIcon: "downloadIcon",
    },
    {
      leftIcon: "documentsIcon",
      tittle: "moreScreen.myInsurance.documentsTitle4",
      subTitle:'12.12.2022',
      rightIcon: "downloadIcon",
      routeName: "HospitalScreen",
    },
    {
      leftIcon: "documentsIcon",
      tittle: "moreScreen.myInsurance.documentsTitle",
      subTitle:'12.12.2022',
      rightIcon: "downloadIcon",
    },
    {
      leftIcon: "documentsIcon",
      tittle: "moreScreen.myInsurance.documentsTitle2",
      subTitle:'12.12.2022',
      rightIcon: "downloadIcon",
    },
    {
      leftIcon: "documentsIcon",
      tittle: "moreScreen.myInsurance.documentsTitle3",
      subTitle:'12.12.2022',
      rightIcon: "downloadIcon",
    },
    {
      leftIcon: "documentsIcon",
      tittle: "moreScreen.myInsurance.documentsTitle4",
      subTitle:'12.12.2022',
      rightIcon: "downloadIcon",
    },
  ]

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={styles.container}
      safeAreaEdges={["top"]}
      ScrollViewProps={{ stickyHeaderIndices: [2] }}
    >
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText={"moreScreen.myInsurance.title"}
        customStyle={{marginTop: 12}}
      />

      <ImageBackground
        source={require("../../../assets/icons/common/insuranceCard.png")}
        resizeMode="cover"
        imageStyle={{ borderRadius: 16 }}
        style={styles.leatherBoardBg}
      >
        <View style={styles.insuranceCard}>
          <Text style={styles.insuranceCardNumber} text="2022 - 5151 - 1185 -2200" />
          <Text style={styles.insuranceCardName} text="My insurance card" />
        </View>
      </ImageBackground>
      <View style={{backgroundColor:colors.background}}>
        <View style={styles.tabContainer}>
          <View style={styles.tabButtonBox}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeIndex == 1 && { backgroundColor: "#5043ED", borderRadius: 15 },
              ]}
              onPress={() => activeTab(1)}
            >
              <Text
                tx="moreScreen.myInsurance.tab1"
                style={activeIndex == 1 ? styles.tabActiveText : styles.tabInActiveText}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tabButtonBox}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeIndex == 2 && { backgroundColor: "#5043ED", borderRadius: 15 },
              ]}
              onPress={() => activeTab(2)}
            >
              <Text
                tx="moreScreen.myInsurance.tab2"
                style={activeIndex == 2 ? styles.tabActiveText : styles.tabInActiveText}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TabScreens />
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      width: "100%",
      display: "flex",
      paddingBottom: 8,
    },
    leatherBoardBg: {
      height: 132,
      marginTop: 0,
      padding: 10,
      // position: "relative",
      // zIndex: 1,
      marginBottom: 0,
    },
    insuranceCard: {
      padding: 16,
    },
    insuranceCardNumber: {
      color: colors.background,
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 20,
      lineHeight: 22,
      marginBottom: 4,
    },
    insuranceCardName: {
      color: colors.background,
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 16,
      lineHeight: 18,
    },
    tabContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 24,
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
      elevation: Platform.OS == 'android' && 3,
      borderRadius: 16,
    },
    tabButtonBox: {
      width: "50%",
    },
    tabButton: {
      paddingHorizontal: 35,
      paddingVertical: 10,
    },
    tabActiveText: {
      color: "white",
      textAlign: "center",
      fontFamily: typography.fonts.nexa.bold,
      fontSize: 16,
    },
    tabInActiveText: {
      textAlign: "center",
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.regular,
      fontSize: 16,
    },
    searchBar: {
      flex: 1,
      width: "100%",
      marginVertical: 24,
      position: "relative",
    },
    searchIcon: {
      position: "absolute",
      top: 18,
      left: 20,
    },
    closeIconMain: {
      width: 90,
      height: 45,
      position: "absolute",
      right: 10,
      top: 5,
      zIndex: 1,
      backgroundColor: colors.background,
    },
    searchInput: {
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
  })
}
