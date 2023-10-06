import { ImageBackground, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { colors, typography } from '../../theme'
import WellxBtn from '../Buttons/WellxBtn'
import { useMemo } from 'react';

export default function BadgePost(props) {
  const { badge, header, subHeader, btnTitle, containerStyle, onPress, types, buttonColor } = props;
  const renderBtn = useMemo(() => {
    switch (types) {
      case 'activeTab':
        return null;
      case 'privateTab':
        return null;
      case 'completedTab':
        return <WellxBtn simpleTitle={btnTitle} onPress={onPress} btnType="normal" customStyleInner={[styles.suggestionButton, {backgroundColor: buttonColor, height:56}]} />;
      default:
        return <WellxBtn title={btnTitle} onPress={onPress} btnType="blue" customStyleInner={styles.suggestionButton} />;
    }
  }, [types])
  return (
    <TouchableOpacity disabled={types == 'privateTab' || types == 'activeTab' ? false: true} onPress={onPress} style={[styles.suggestionInner, containerStyle]}>

      <Icon icon={badge} size={104} containerStyle={styles.badgeStyle} />
      <View style={styles.suggestionBottom}>
        <Text text={header} style={styles.suggestionBottomHeading} />
        <Text text={subHeader} style={styles.suggestionBottomDate} />
      </View>
      {renderBtn}
      {/* <WellxBtn
        title={btnTitle}
        onPress={onPress}
        // customStyle={styles.buttonStyle} 
        btnType="blue"
        customStyleInner={styles.suggestionButton}

      /> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    suggestionInner: {
          paddingHorizontal: 8,
          paddingVertical: 16,
          backgroundColor: colors.background,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: colors.challangeBorder,
          shadowColor: Platform.OS == 'ios' && '#E0E9E0',
          elevation: Platform.OS == 'android' && 3,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 4,
          width: '47.6%',
          shadowRadius: 7,
          marginBottom:12,
        
      },
      suggestionTop: {
        height: 120,
        width: '100%',
      },
      suggestionTopHeading2: {
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'left',
        fontFamily: typography.fonts.nexa.bold,
        
        color: colors.background,
        paddingTop: 12,
        paddingLeft: 12  


  },
  suggestionTopHeading: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'left',
    fontFamily: typography.fonts.nexa.bold,
    
    color: colors.background,
    paddingLeft: 12
  },
 
  suggestionBottom: {
    paddingTop: 16
  },
  suggestionBottomHeading: {
    paddingTop: 5,
    fontSize: 14,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 16,
    color: colors.blackText,
    maxWidth: 140
  },
  suggestionBottomDate: {
    paddingTop: 5,
    fontSize: 14,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 18,
    
    color: colors.descText,
    maxWidth: 140

  },
  suggestionButton: {
    backgroundColor: colors.activeTabs,
    marginTop: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9,
  },
  joinBtn: {
    fontSize: 14,
    lineHeight: 16,
    
    color: colors.background,
    fontFamily: typography.fonts.nexa.bold,
  },
  suggestionWellxIcon: {
    width: '100%',
    left: 18,
    bottom: 10,
    borderBottomRightRadius: 30
  },
  badgeStyle: {
    alignContent: 'center',
    alignItems: 'center'
  }
})