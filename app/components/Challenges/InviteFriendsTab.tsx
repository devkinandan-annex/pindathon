import { StyleSheet, View, TouchableOpacity, TextInput, Share, Platform } from "react-native"
import React, { useEffect, useRef, useState } from "react"
import { Icon } from "../Icon"
import { colors, typography } from "../../theme"
import { Text } from "../Text"
import { Toggle } from "../Toggle"
import EmptyScreen from "../Common/EmptyScreen"
import BottomSheet from "../BottomSheet/BottomSheet"
export default function InviteFriendsTab(props: any) {
  const { activeTab, inviteUserList, onPress, followingUsers, allUsers } = props
  const [userList, setUserList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (activeTab == 1) {
      setUserList(followingUsers)
    } else {
      setUserList(allUsers)
    }
  }, [activeTab])

  const searchItem = (val: string) => {
    setSearch(val)
  }
  const clearSearch = () => {
    setSearch("")
  }


  const content = {
    url: "https://awesome.contents.com/",
    title: "Awesome Contents",
    message: "Please check this out.",
  }

  const onShare = async () => {
    try {
      const result = await Share.share(content)
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <View style={styles.tabMain}>
      {activeTab == 2 && (
        <View style={styles.searchInnerLeft}>
          <Icon style={styles.searchIcon} icon="search" size={20} />
          {search != "" && (
            <TouchableOpacity style={styles.closeIconView} onPress={() => clearSearch()}>
              <Icon icon="closeCircle" size={20} color={colors.descText} style={styles.closeIcon}/>
            </TouchableOpacity>
          )}
          <TextInput
            style={styles.inputBox}
            placeholder="Search"
            placeholderTextColor={colors.descText}
            onChangeText={(v) => searchItem(v)}
            value={search}
          />
        </View>
      )}
      {userList.length > 0 && search == "" ? (
        <View>
          {userList.map((item, index) => (
            <View style={styles.userList}>
              <View style={styles.userListInner}>
                <View style={styles.userListLeft}>
                  <Icon icon={item.profile} size={52} />
                </View>
                <View style={styles.userListRight}>
                  <Text style={styles.itemTitle} text={item.name} />
                  <Text style={styles.itemSubTitle} text={item.username} />
                </View>
              </View>
              <View>
                <Toggle
                  key={index}
                  variant="checkbox"
                  value={inviteUserList.includes(item) ? true : false}
                  labelPosition="right"
                  inputWrapperStyle={styles.inputContainer}
                  // inputInnerStyle={styles.inputInner}
                  inputOuterStyle={styles.inputOuter}
                  inputDetailStyle={styles.inputActiveCheckBox}
                  onPress={() => onPress(item)}
                />
              </View>
            </View>
          ))}
        </View>
      ) : (
        <EmptyScreen
          Icon="emptyChallenge"
          title="challengesScreen.challengesEmptyHeading"
          subTittle="challengesScreen.inviteFriends.search"
          subTitleParms={search}
          customStyle={styles.emptyScreen}
          Button={true}
          buttonText="challengesScreen.inviteFriends.searchButton"
          buttonType="line"
          onPress={() => onShare()}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  tabMain: {
    paddingTop: 24,
  },
  emptyScreen: {
    flex: 1,
    marginTop: 70,
  },
  userList: {
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  userListLeft: {
    width: 52,
    height: 52,
    // marginRight: 12,
    borderRadius: 100,
    borderWidth: 1,
    overflow: "hidden",
    borderColor: colors.challangeBorder,
  },
  userListRight: {
    paddingLeft: 14,
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
  userListInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    marginVertical: 8,
  },
  inputOuter: {
    borderColor: colors.challangeBorder,
    backgroundColor: colors.background,
  },
  inputActiveCheckBox: {
    backgroundColor: colors.blue,
  },
  searchInnerLeft: {
    // flex:0.8,
    width: "100%",
    // marginVertical: 24,
    marginBottom: 24,
    position: "relative",
    marginRight: 8,
  },
  searchInnerRight: {
    // flex:0.2,
    width: "15%",
    marginVertical: 24,
    position: "absolute",
    right: 0,
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
    left: 20,
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
    right: 10,
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
    paddingTop: 12,
    width: "100%",
  },
  inviteDesc: {
    fontSize: 16,
    lineHeight: 18,
    color: colors.blackText,
  },
  copyLinkContainer: {},
  copyLinkContainerLeft: {
    backgroundColor: colors.connectDeviceButton,
  },
  copyLinkContainerRight: {},
})
