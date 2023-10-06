import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, spacing, typography } from '../../theme'
import { Icon } from '../Icon'
import { Text } from '../Text'

const ConnctDevice = (_props) => {
  return (
    <View style={styles.connctDeviceMain}>
          <View style={styles.connectDeviceContainerTop}>
            <View style={styles.connectDeviceLeft}>
              <Text tx="MyFollowingScreen.connectDeviceHeading" style={styles.connctDeviceHeading} />
              <Text tx="MyFollowingScreen.connectDeviceDescription" style={styles.connctDeviceDesc} />
            </View>
            <View style={styles.connectDeviceRight}>
              <Icon icon="device" style={styles.connectDevic} />
            </View>
          <TouchableOpacity style={styles.cancleBtn} onPress={()=>console.log('done',_props.onPress(false))}>
              <Icon icon="close" color={colors.descText} />
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.connectDeviceButton}>
            <Text tx="MyFollowingScreen.connectDeviceButtonTitle" style={styles.connectButtonText} />
          </TouchableOpacity>
        </View>
  )
}

export default ConnctDevice

const styles = StyleSheet.create({
    connctDeviceMain: {
        backgroundColor: colors.background,
        paddingHorizontal: spacing.small,
        shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 4,
        borderWidth : 1,
        borderStyle: 'solid',
        borderColor: colors.connectDeviceButton,
        shadowRadius: 7,
        borderRadius: 16,
        paddingVertical: 16,
        marginTop: 25,
        marginHorizontal: spacing.medium
      },
      connectDeviceContainerTop: {
        flexDirection: 'row',
        width: '100%'
      },
      connectDeviceLeft: {
        width: '50%'
      },
      connctDeviceHeading: {
        fontSize: 20,
        fontFamily: typography.fonts.nexa.bold,
        lineHeight: 22,
        color: colors.blackText
    
      },
      connctDeviceDesc: {
        fontSize: 14,
        fontFamily: typography.fonts.nexa.regular,
        lineHeight: 18,
        
        marginTop: 8,
        color: colors.descText
      },
      connectDeviceRight: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      connectDeviceButton: {
        backgroundColor: colors.connectDeviceButton,
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        marginTop: 18,
        borderRadius: 12,
        // marginBottom: 14
      },
      connectButtonText: {
        fontSize: 14,
        fontFamily: typography.fonts.nexa.regular,
        lineHeight: 18,
        
        color: colors.blue
      },
      cancleBtn: {
        right: 15
      },
      connectDevic: {
        maxWidth: 164,
        maxHeight: 126
      }
})