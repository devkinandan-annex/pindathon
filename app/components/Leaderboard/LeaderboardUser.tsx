import { ImageBackground, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAppConfig from '../../utils/useAppConfig';
import useWellxStyle from '../../utils/useWellxStyle';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { LinearGradient } from 'expo-linear-gradient';

export default function LeaderboardUser(props) {

    const { data } = props;

    const appConfig = useAppConfig();
    const wellxStyle = useWellxStyle();
    const { theme } = wellxStyle;
    const { colors } = theme;
    const styles = getLocalStyle(theme);
    const [level1, setLevel1] = useState([]);
    const [level2, setLevel2] = useState([]);
    const [level3, setLevel3] = useState([]);




    useEffect(() => {
        const Level1 = data.filter((item: any) => item.level == 1);
        const Level2 = data.filter((item: any) => item.level == 2);
        const Level3 = data.filter((item: any) => item.level == 3);
        // console.log(Level1)
        setLevel1(Level1);
        setLevel2(Level2);
        setLevel3(Level3);
    }, [])

    console.log('level2 ', level2)
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/bgleaderboard.png')}
                resizeMode="contain"
                imageStyle={{ borderRadius: 16 }}
                style={styles.leatherBoardBg}
            >

                <View style={styles.levelContainer}>




                    <React.Fragment>

                        <View style={styles.sideLevel}>
                            {level2.length != 0 &&
                                <View>
                                    <View style={styles.levelNumber}>
                                        <Text text="2" style={styles.levelText} />
                                    </View>
                                    <LinearGradient
                                        colors={level2[0]?.me ? ['#413CF1', '#F63C81'] : ['#F5F7F8', '#F5F7F8']}
                                        start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
                                        style={[level2[0]?.me && styles.levelBoxActive]}
                                    >
                                        <View style={[level2[0]?.me ? styles.levelBoxMe : styles.levelBox]}>
                                            <Icon icon={level2[0]?.userProfile} style={styles.anotherLvlUser} />
                                        </View>
                                    </LinearGradient>
                                    <View style={styles.userData}>
                                        <Text text={level2[0]?.name} style={styles.userName} />
                                        <Text text={level2[0]?.score} style={styles.userScore} />
                                    </View>
                                </View>
                            }
                        </View>


                        <View style={styles.centerPosition}>
                            {level1.length != 0 &&
                                <View>
                                    <View style={styles.levelTaz}>
                                        <Icon icon="taz" style={styles.firstLevelTaz} />
                                    </View>
                                    <View style={[styles.levelNumber, styles.levelNumber1]}>
                                        <Text text="1" style={styles.levelText} />
                                    </View>
                                    <LinearGradient
                                        colors={level1[0]?.me ? ['#413CF1', '#F63C81'] : ['#F5F7F8', '#F5F7F8']}
                                        start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
                                        style={[level1[0]?.me && styles.levelBoxActiveOne]}
                                    >
                                        {/* <View style={[styles.levelBox, styles.levelbox1]}> */}
                                        <View style={[level1[0]?.me ? styles.levelBoxMe : styles.levelBox, styles.levelbox1]}>
                                            <Icon icon={level1[0]?.userProfile} style={styles.firstLevel} />
                                        </View>
                                    </LinearGradient>

                                    <View style={styles.userData}>
                                        <Text text={level1[0]?.name} style={[styles.userName, styles.firstUserName]} />
                                        <Text text={level1[0]?.score} style={[styles.userScore, styles.firstUserScore]} />
                                    </View>
                                </View>
                            }
                        </View>

                        <View style={styles.sideLevel}>
                            {level3.length != 0 &&
                                <View>
                                    <View style={[styles.levelNumber, styles.levelNumber3]}>
                                        <Text text="3" style={styles.levelText} />
                                    </View>
                                    <LinearGradient
                                        colors={level3[0]?.me ? ['#413CF1', '#F63C81'] : ['#F5F7F8', '#F5F7F8']}
                                        start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
                                        style={[level3[0]?.me && styles.levelBoxActive]}
                                    >
                                        {/* <View style={[styles.levelBox, styles.levelbox3]}> */}
                                        <View style={[level3[0]?.me ? styles.levelBoxMe : styles.levelBox, styles.levelbox3]}>
                                            <Icon icon={level3[0]?.userProfile} style={styles.anotherLvlUser} />
                                        </View>
                                    </LinearGradient>

                                    <View style={styles.userData}>
                                        <Text text={level3[0]?.name} style={styles.userName} />
                                        <Text text={level3[0]?.score} style={styles.userScore} />
                                    </View>
                                </View>
                            }
                        </View>
                    </React.Fragment>




                </View>




            </ImageBackground>
        </View>
    )
}

function getLocalStyle(theme) {
    const { colors, typography, spacing } = theme;
    // console.log("typography", theme)
    return StyleSheet.create({
        container: {
            paddingTop: 2,
            paddingHorizontal:16,
        },

        leatherBoardBg: {
            height: 300,
        },

        firstLevel: {
            width: 120,
            height: 120,
        },
        sideLevel: {
            position: 'relative',
            top: 20,
            minWidth: '25%'
        },
        levelTaz: {
            left: 0,
            zIndex: 1,
            position: 'absolute',
            top: -16,
        },
        firstLevelTaz: {
            width: 30,
            height: 30
        },

        levelContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',

            alignSelf: 'center',
            top: 60
        },
        levelBox: {
            flexDirection: 'row',
            borderRadius: 80,
            maxHeight: 83,
            position: 'relative',
            maxWidth: 82,
            overflow: 'hidden',
            borderWidth: 3,
            borderColor: colors.challangeBorder,
            backgroundColor: 'white'

        },
        levelBoxActive: {
            flexDirection: 'row',
            borderRadius: 80,
            maxHeight: 83,
            // position: 'relative',
            maxWidth: 88,
            overflow: 'hidden',
            borderWidth: 3,
            borderColor: 'transparent',
            backgroundColor: 'white',


        },
        levelBoxActiveOne: {
            flexDirection: 'row',
            borderRadius: 80,
            maxWidth: 131,
            maxHeight: 120,
            overflow: 'hidden',
            borderWidth: 3,
            borderColor: 'transparent',
            backgroundColor: 'white',


        },
        levelBoxMe: {
            backgroundColor: 'white',
            borderRadius: 80,
            maxHeight: 83,
            maxWidth: 82,
            overflow: 'hidden',
        },
        levelbox3: {
            borderColor: colors.mango,
        },
        levelbox1: {
            borderColor: colors.yellow,
            maxWidth: 120,
            maxHeight: 120,
        },


        levelNumber: {
            width: 25,
            height: 25,
            borderRadius: 50,
            right: 0,
            zIndex: 1,
            position: 'absolute',
            top: 0,
            backgroundColor: colors.challangeBorder,

        },
        levelNumber3: {
            backgroundColor: colors.mango
        },
        levelNumber1: {
            backgroundColor: colors.yellow,
            top: 6,
            right: 6
        },
        levelText: {
            paddingTop: 5,
            textAlign: 'center',
            fontSize: 16,
            lineHeight: 18,
            fontFamily: typography.fonts.nexa.bold,
        },

        anotherLvlUser: {
            // width: 50,
            // marginTop: -55,
            right: 5,
            maxHeight: 82,
            maxWidth: 82
        },
        userData: {
            paddingTop: 12,
            alignItems: 'center'
        },
        userName: {
            fontSize: 14,
            lineHeight: 14,
            fontFamily: typography.fonts.nexa.bold,
            color: colors.blackText

        },
        userScore: {
            paddingTop: 6,
            fontSize: 14,
            lineHeight: 14,
            fontFamily: typography.fonts.nexa.regular,
            color: colors.descText
        },

        firstUserName: {
            fontSize: 16,
            lineHeight: 18
        },
        firstUserScore: {
            fontSize: 16,
            lineHeight: 18
        },
        centerPosition: {
            position: 'relative',
            marginHorizontal: 20
        }
    })
}