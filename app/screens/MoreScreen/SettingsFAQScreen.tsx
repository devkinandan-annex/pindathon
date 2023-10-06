import { StyleSheet, View, ViewStyle, TouchableOpacity, ScrollView, Platform ,Switch } from "react-native"
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import Collapsible from "react-native-collapsible"
import { transform } from "@babel/core"

interface SettingsFAQScreenProps extends AppStackScreenProps<"support"> { }

export const SettingsFAQScreen: FC<SettingsFAQScreenProps> = observer(function SettingsFAQScreen(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const SELECTORS = [
    { title: 'T&C', value: 0 },
    { title: 'Privacy Policy', value: 1 },
    { title: 'Return Policy', value: 2 },
    { title: 'Reset all' },
  ];
  const CONTENT = [
    {
      title: 'How i can get xCoins?',
      Icon: 'rightArrowBig',

      content:
        'Lorem ipsum dolor sit amet consectetur. Scelerisque nulla suscipit in amet nulla. Semper amet sed in posuere viverra. Lectus sed in cursus pulvinar. Arcu est ultrices odio mauris commodo.',
    },
    {
      title: 'How i can get xCoins?',
      Icon: 'rightArrowBig',

      content:
        'Lorem ipsum dolor sit amet consectetur. Scelerisque nulla suscipit in amet nulla. Semper amet sed in posuere viverra. Lectus sed in cursus pulvinar. Arcu est ultrices odio mauris commodo.',
    },
    {
      title: 'How i can get xCoins?',
      Icon: 'rightArrowBig',

      content:
        'Lorem ipsum dolor sit amet consectetur. Scelerisque nulla suscipit in amet nulla. Semper amet sed in posuere viverra. Lectus sed in cursus pulvinar. Arcu est ultrices odio mauris commodo.',
    },
    {
      title: 'How i can get xCoins?',
      Icon: 'rightArrowBig',

      content:
        'Lorem ipsum dolor sit amet consectetur. Scelerisque nulla suscipit in amet nulla. Semper amet sed in posuere viverra. Lectus sed in cursus pulvinar. Arcu est ultrices odio mauris commodo.',
    },
    {
      title: 'How i can get xCoins?',
      Icon: 'rightArrowBig',

      content:
        'Lorem ipsum dolor sit amet consectetur. Scelerisque nulla suscipit in amet nulla. Semper amet sed in posuere viverra. Lectus sed in cursus pulvinar. Arcu est ultrices odio mauris commodo.',
    },
   
  ];
  const [activeSections, setActiveSections] = useState([]);
  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    // Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const setSections = (sections) => {
    // Setting up a active section state
    setActiveSections(
      sections.includes(undefined) ? [] : sections
    );
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[
          styles.header,
          isActive ? styles.activeBtn : styles.inactive
        ]}
        transition="backgroundColor">
        <Text text={section.title} style={styles.headerText} />
        <Icon icon={section.Icon} size={14} style={[styles.headerRightIcon, isActive ? styles.activeIcon : styles.inactive]} />
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[
          styles.content,
          isActive ? styles.activecontent : styles.inactive
        ]}>
        <Text text={section.content} style={styles.textContent} />

      </Animatable.View>
    );
  };

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText={"moreScreen.Settings.SettingsFAQScreen.title"}
      />
      <View style={styles.containerAccordion}>
        <ScrollView>

          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={800}
            onChange={setSections}
          />
        </ScrollView>
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
      marginTop: 23,
    },
    containerAccordion:{
      position:'relative',
    },
    activeIcon:{
      transform: [{ rotate: '90deg'}]
    },
    
    header: {
      backgroundColor: colors.background,
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 14,
      paddingVertical: 20,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
      elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 4,
      shadowRadius: 7,
      marginBottom: 12,
    },
    headerText: {
      fontSize: 16,
      lineHeight: 18,
      backgroundColor: colors.background,
      fontFamily: typography.fonts.nexa.bold,
      color: colors.blackText,
    },
    headerRightIcon:{
      fontSize: 16,
      lineHeight: 18,
      color: colors.blackText,
    },
    content: {
      backgroundColor: colors.background,
      paddingHorizontal: 14,
      paddingVertical: 20,
      fontFamily: typography.fonts.nexa.bold,
      borderBottomLeftRadius:16,
      borderBottomRightRadius:16,
      borderWidth: 1,
      borderColor: colors.challangeBorder,
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
elevation: Platform.OS == 'android' && 3,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 4,
      shadowRadius: 7,
      borderTopColor:colors.background,         
      marginBottom:12, 
    },
    activecontent:{
      position:'relative',
      zIndex:1,
      paddingTop:0,
      borderTopColor:colors.background,         

    },
    textContent:{
      fontSize: 14,
      lineHeight: 18,
      fontFamily: typography.fonts.nexa.regular,
      color: colors.blackText,
    },
    activeBtn:{
      borderBottomLeftRadius:0,
      borderBottomRightRadius:0,
      borderBottomColor:colors.background,
      marginBottom:0,
    },
    active: {
      backgroundColor:colors.background,
    },
   
    inactive: {
      backgroundColor:colors.background,
    },
    selectors: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    selector: {
      backgroundColor: colors.background,
      padding: 10,
    },
    activeSelector: {
      
    },
    selectTitle: {
      fontSize: 14,
      
      padding: 10,
      textAlign: 'center',
    },
    multipleToggle: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 30,
      alignItems: 'center',
    },
    multipleToggle__title: {
      fontSize: 16,
      marginRight:8,
    },


  })
}
