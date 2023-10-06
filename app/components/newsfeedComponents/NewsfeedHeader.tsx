import { Image, StyleSheet, TouchableOpacity, View, ImageBackground, Platform } from 'react-native'
import React, { useState } from 'react';
import { Icon } from '../Icon';
import { colors, spacing, typography } from '../../theme';
import { Text } from '../Text';
import { UserProfileFrame } from '../Common/UserProfileFrame';



const NewsfeedHeader = (prop) => {
  console.log('_props',prop)
  // type userLvl = string;
  const [profileLevel, setUserProfileLeve] = useState(5);

  let userLvl = `lvl${profileLevel}`;

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
      <View style={styles.HeaderMain}>
        <View >
        <UserProfileFrame type={'small'} navigation={undefined} route={undefined} userImage="avtar1" userLevel= {1}/>
        </View>
        </View>
        <View style={styles.userNameContainer}>
          <View style={styles.hayContainer}>
            <Text tx='newsfeedScreen.hii' style={styles.hey} />
            <TouchableOpacity style={{ alignContent: 'flex-end' }} onPress={ () => prop.prop.navigation.navigate('NotificationsScreen')  }>
              <Icon icon='bell' style={styles.rightIcon} />
            </TouchableOpacity>
          </View>

          <Text text={'Mohamed Samy'} style={styles.userName} />
        </View>
      </View>
      {/* <View style={styles.rightIcon}>
        <TouchableOpacity>
        <Icon icon='bell' style={styles.rightIcon} />
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

export default NewsfeedHeader

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: spacing.small,
    backgroundColor: colors.background,
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
    elevation: Platform.OS == 'android' && 3,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 4,
    shadowRadius: 7,
    borderRadius: 16,
    marginHorizontal: spacing.small
  },
  Logo: {
    width: 65,
    height: 65,
    marginTop: 5,
  },
  lvlCont: {
    left: 0,
    zIndex:1,
    position:'absolute',
  },
  rightIcon: {
    padding: 5,
    height: 20,
    width: 20
    // marginHorizontal:11,


  },
  Header: {
    borderWidth: 1,
    borderColor: colors.challangeBorder,
    borderRadius: 50,
    overflow: 'hidden',
    maxHeight: 65,
    position:'relative',
    zIndex:-1,
    maxWidth: 65,
  },
  headerWrapper:{ flexDirection: 'row', justifyContent:'space-between'},
  HeaderMain: {
    borderRadius: 50,
    maxHeight: 70,
    maxWidth: 70,
    justifyContent:'center',
    alignItems: 'center'
  },
  userNameContainer: {
    marginLeft: 20,
    alignContent: 'center',
    alignSelf: 'center'
  },
  userName: {
    fontSize: 18,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 22,
    
    color: colors.blackText,
  },
  hayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  hey: {
    fontSize: 16,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 18,
    
    color: colors.blackText,
    width: '72%'
  }
})