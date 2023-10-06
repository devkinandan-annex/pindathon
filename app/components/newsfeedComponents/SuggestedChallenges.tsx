import { ImageBackground, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, spacing, typography } from '../../theme'
import { Icon } from '../Icon'
import { Text } from '../Text'
import SuggestedBord from './SuggestedBord'



export default function SuggestedChallenges(props) {
    return (
        <View style={styles.container}>
            <View style={styles.suggestionHeader}>
                <View style={styles.suggestionHeaderLeft}>
                    <View>
                        <Text text="Suggested challenges" style={styles.suggestionHeaderText} />
                    </View>

                </View>
                <TouchableOpacity style={styles.suggestionHeaderRight} onPress={() => props.onPress(false)}>
                    <Icon icon='close' color={colors.blackText} />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={styles.suggestionBody} nestedScrollEnabled>
                
                <SuggestedBord badge={'badge1'} />
                <SuggestedBord badge={'badge2'} />
                <SuggestedBord badge={'badge1'} />

                
                

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        paddingVertical: 18,
        paddingHorizontal: spacing.small,
        marginTop: 8,
        shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 4,
        shadowRadius: 7,
    },

    suggestionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
    
      },
      suggestionHeaderLeft: {
        flexDirection: 'row'
      },
      suggestionHeaderRight: {
        paddingRight: 8
      },
      suggestionHeaderText: {
        paddingTop: 5,
        fontSize: 24,
        fontFamily: typography.fonts.nexa.bold,
        lineHeight: 28,
        
        color: colors.blackText
      },
      suggestionBody: {
      },
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
      }
      
})