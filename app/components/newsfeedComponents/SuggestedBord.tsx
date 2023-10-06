import { ImageBackground, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { colors, typography } from '../../theme'
import WellxBtn from '../Buttons/WellxBtn'

export default function SuggestedBord(props) {
  const {badge} = props;
  return (
            <View style={styles.suggestionInner}>
                    
                    <Icon icon={badge} size={104} containerStyle={styles.badgeStyle} />
                    <View style={styles.suggestionBottom}>
                        <Text text="Virtual New York City Marathon" style={styles.suggestionBottomHeading} />
                        <Text text="Oct 8 to Nov 7, 2022" style={styles.suggestionBottomDate} />
                    </View>
                    
                    <WellxBtn
                    title="MyFollowingScreen.join" 
                    // customStyle={styles.buttonStyle} 
                    btnType="blue"
                    customStyleInner={styles.suggestionButton}
                    
                  />
                </View>
  )
}

const styles = StyleSheet.create({
    suggestionInner: {
      shadowColor: Platform.OS == 'ios' && '#E0E9E0',
      elevation: Platform.OS == 'android' && 3,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 4,
        shadowRadius: 7,
        backgroundColor: colors.background,
        width: 160,
        paddingTop: 8,
        paddingHorizontal: 8,
        borderRadius: 16,
        marginRight: 8,
        paddingBottom: 16
        
      },
      suggestionTop: {
        height: 120,
        width: '100%',
      },
      suggestionTopHeading: {
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'left',
        fontFamily: typography.fonts.nexa.bold,
        
        color: colors.background,
        paddingLeft: 12          
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
        alignItems:'center'
      }
})