import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import { Text, Icon, Screen } from '../../components'
import TopHeader from '../../components/Header/TopHeader'
import { colors, spacing, typography } from '../../theme'
import InviteFriendsTab from '../../components/Challenges/InviteFriendsTab'
import WellxBtn from '../../components/Buttons/WellxBtn'
interface inviteFriendsProps extends AppStackScreenProps<"inviteFriends"> { }
export const inviteFriends: FC<inviteFriendsProps> = observer(function inviteFriends(_props) {

    const appConfig = useAppConfig();
    const wellxStyle = useWellxStyle();
    const {theme} = wellxStyle;
    const {colors} =theme; 
    const [activeTab, setActiveTab] = useState(1);
    const [inviteUserList, setInviteUserList] = useState([])
    // const styles = getLocalStyle(theme);


    const followingUsers = [
        {
            userId: 1,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'navigationProfile'
        },
        {
            userId: 2,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'avtar1'
        },
        
    ]

    const allUsers = [
        {
            userId: 1,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'avtar1'
        },
        {
            userId: 2,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'navigationProfile'
        },
        {
            userId: 3,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'user'
        },
        {
            userId: 4,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'avtar2'
        },
        {
            userId: 5,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'avtar1'
        },
        {
            userId: 6,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'navigationProfile'
        },
        {
            userId: 7,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'user'
        },
        {
            userId: 8,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'avtar2'
        },
        {
            userId: 9,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'navigationProfile'
        },
        {
            userId: 10,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'user'
        },
        {
            userId: 11,
            name: 'Abdul Floyd',
            username: '@abdulfloyd',
            profile: 'avtar2'
        }
    ]


    const inviteUser = () => {
        console.log(inviteUserList)

        const data: any = {
            selectedList: inviteUserList,
            challangeScreen: true
          }
        _props.navigation.navigate('ChallengeNewTab', data);
    }

    const selectUser = (val) => {
        // console.log(inviteUserList.filter(item => item.userId !== val.userId));
        if(inviteUserList.includes(val)){
            setInviteUserList(inviteUserList.filter(item => item.userId !== val.userId))
          }else{
            setInviteUserList([...inviteUserList , val])
          }
    }

    const tabHeader = () => {
        return (
        <View style={styles.tabContainer}>
            <TouchableOpacity 
                style={[styles.tabInner, activeTab == 1 && styles.activeTabBackground]} 
                onPress={() => setActiveTab(1)}
            >
                <Text tx="challengesScreen.inviteFriends.tab.myfollowing" style={[styles.tabTitle, activeTab == 1 && styles.activeTabText]} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.tabInner, activeTab == 2 && styles.activeTabBackground]} 
                onPress={() => setActiveTab(2)}
            >
                <Text tx="challengesScreen.inviteFriends.tab.all" style={[styles.tabTitle, activeTab == 2 && styles.activeTabText]}/>
            </TouchableOpacity>
        </View>
        )
    }

    return (
            <View style={{flex: 1}}>
            <Screen preset="scroll" 
            contentContainerStyle={styles.container} 
            safeAreaEdges={["top"]}  
            ScrollViewProps={{ stickyHeaderIndices: [0] }}
        >
            <View style={{backgroundColor: colors.background}}>
                <TopHeader 
                    leftIcon="back" 
                    onPressLeft={() => _props.navigation.goBack()} 
                    centerText="challengesScreen.inviteFriends.headerTitle"
                />
                {tabHeader()}
            </View>
            
            <InviteFriendsTab 
                activeTab={activeTab} 
                inviteUserList={inviteUserList} 
                onPress={(val: any) => selectUser(val)} 
                followingUsers={followingUsers}
                allUsers={allUsers}
            />
            
            
        </Screen>
        <View style={styles.buttonContainer}>
                <WellxBtn 
                    title="challengesScreen.inviteFriends.button" 
                    onPress={inviteUser} 
                    // customStyle={styles.buttonStyle}
                    disable={inviteUserList.length > 0 ? false : true} 
                    btnType="primary"
                    
                />
            </View>
            </View>
        
    )
})


  
const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    //   flex: 1,
      width: '100%'
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent:'center',
        borderWidth: 1,
        borderColor: colors.challangeBorder,
        borderRadius: 14,
        paddingVertical: 5
    },
    tabInner: {
        width: '49%',
        alignContent:'center',
        alignItems:'center',
        borderRadius: 14,
        paddingVertical: 12
    }, 

    activeTabBackground: {
        backgroundColor: colors.blue,        
    },
    tabTitle: {
        fontSize:16,
        lineHeight: 18,
        fontFamily: typography.fonts.nexa.bold
    },
    activeTabText: {
        color: colors.background
    },
    buttonContainer: {
        backgroundColor: colors.background,
        paddingVertical: 30,
        paddingHorizontal: 16,
    }
  })
// function getLocalStyle(theme) { 
//     const {colors, typography, spacing} = theme;
//     // console.log("typography", theme)
//     return StyleSheet.create({
//       container: {
//         // paddingTop: spacing.large + spacing.extraLarge,
//         paddingHorizontal: spacing.large,
//       }
//     })
//   }