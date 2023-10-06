import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../theme'
import { Circle, Defs, Path, Svg } from 'react-native-svg'

export default function ProgressBar(props) {
    let { width, height, radius, fromColor, toColor, percent, borderWidth, component, customStyle } = props

    let ppercentage = percent;
    let percentage = 100 - ppercentage;
    var pct = 0;
    if (percentage == null) {
        percentage = 100;
    } else {
        let r = width / 2;
        let c = Math.PI * (r * 2);

        if (percentage < 0) { percentage = 0; }
        if (percentage > 100) { percentage = 100; }
        pct = ((100 - percentage) / 100) * c;
    }

    // console.log('---> ', pct);


    return (
        <View style={styles.progressbarMain}>

            <LinearGradient
                start={[1.0, 0.0]}
                end={[1.0, 1.0]}
                colors={[fromColor, toColor]}
                style={{
                    width: width,
                    height: height,
                    borderRadius: radius,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Svg width={width} height={width}>
                    <Circle
                        r={width / 2}
                        cx={width / 2}
                        cy={width / 2}
                        fill="none"
                        stroke='white'
                        strokeWidth={90}
                        strokeDasharray={Math.PI * width}
                        strokeDashoffset={-pct}
                        transform="rotate(180 45 45)"


                    />

                </Svg>


                <View style={[styles.innerContainer, {
                    padding: borderWidth,
                    borderRadius: radius - 3
                }]}>
                    {component}
                </View>



            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'red'
    },
    innerContainer: { backgroundColor: colors.background, zIndex: 99999999, position: 'absolute' },
    centerContainer: { backgroundColor: colors.background, },
    progressbarMain: {
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
     elevation: Platform.OS == 'android' && 3,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 4,
        shadowRadius: 7,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8
    }




})