import { View, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { colors, spacing, typography } from '../../theme'

import SimpleGradientProgressbarView from "react-native-simple-gradient-progressbar-view";
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProgressBar from '../ProgressBar'


export default function DailyGoal() {
    
    return (
        <View style={styles.container}>

            <ProgressBar 
                width={90} 
                radius={16}
                height={40}
                percent={55}
                borderWidth={7}
                fromColor={colors.activeTabs}
                toColor={colors.darkPink}
                customStyle={styles.goalContainer}
                component={
                    <View style={styles.stepsContainer}>
                        <Icon icon='foot' style={styles.Icon} />
                        <Text text={'5.254'} style={styles.scoreText} />
                    </View>
                }
            />
             
            
            
            <View style={styles.goalContainer}>
                <Icon icon='drum' style={styles.Icon} />
                <Text text={'1.000'} style={styles.scoreText} />
            </View>
            <View style={styles.goalContainer}>
                <Icon icon='flame' style={styles.Icon} />
                <Text text={'5 day'} style={styles.scoreText} />
            </View>
            
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginTop: 12,
        marginHorizontal: spacing.medium
    },
    goalContainer:{
        shadowColor: Platform.OS == 'ios' && '#E0E9E0',
        elevation: Platform.OS == 'android' && 3,
        shadowOffset: { width: 0, height: 0 },
        backgroundColor: colors.background,
        shadowOpacity: 0.5,
        shadowRadius: 7,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 11,
        marginRight: 8

    },
    Icon:{
        width: 20,
        height: 20,
    },
    scoreText: {
        fontSize: 14,
        
        lineHeight: 16,
        paddingLeft: 8,
        fontFamily: typography.primary.bold,
        paddingTop: 3
    },
    stepsContainer: {
        flexDirection: 'row', 
        justifyContent: 'center',
        
    }


})