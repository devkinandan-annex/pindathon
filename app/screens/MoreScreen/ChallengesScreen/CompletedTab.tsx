import React from "react"
import useAppConfig from "../../../utils/useAppConfig"
import useWellxStyle from "../../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../../components"
import { Platform, StyleSheet, View } from 'react-native';
import BadgePost from '../../../components/Common/BadgePost';
import { useNavigation } from "@react-navigation/native";

type CompletedTabProps = {
    // name: any,
    // nameAction: (arg: any) => void,
}

const CompletedTab: React.FC<CompletedTabProps> = ({ }) => {
    const navigation: any = useNavigation()
    const appConfig = useAppConfig()
    const wellxStyle = useWellxStyle()
    const { theme } = wellxStyle
    const { colors } = theme
    const styles = getLocalStyle(theme);
    const colorScheme = [colors.yellow, colors.connectDeviceButton, colors.mango, colors.challangeBorder]
    const BadgePostBoxList = [
        {
            bedge: 'badge1',
            header: 'Virtual New York City Marathon',
            subHeader: 'Oct 8 to Nov 7, 2022',
            btnTitle: '1 place',
            goal:'100km',
            buttonColor: colorScheme[Math.floor(Math.random() * colorScheme.length)],
            subTitle:'Complete the Virtual TCS New York City Marathon between October 23 and November, 2022. Complete 100km run.'
        },
        {
            bedge: 'badge2',
            header: 'Virtual New York City Marathon',
            subHeader: 'Oct 8 to Nov 7, 2022',
            btnTitle: '121 place',
            goal:'100km',
            buttonColor: colorScheme[Math.floor(Math.random() * colorScheme.length)],
            subTitle:'Complete the Virtual TCS New York City Marathon between October 23 and November, 2022. Complete 100km run.'
        }, {
            bedge: 'badge3',
            header: 'Virtual New York City Marathon',
            subHeader: 'Oct 8 to Nov 7, 2022',
            btnTitle: '2 place',
            goal:'100km',
            buttonColor: colorScheme[Math.floor(Math.random() * colorScheme.length)],
            subTitle:'Complete the Virtual TCS New York City Marathon between October 23 and November, 2022. Complete 100km run.'
        }, {
            bedge: 'badge4',
            header: 'Virtual New York City Marathon',
            subHeader: 'Oct 8 to Nov 7, 2022',
            btnTitle: '3 place',
            goal:'100km',
            buttonColor: colorScheme[Math.floor(Math.random() * colorScheme.length)],
            subTitle:'Complete the Virtual TCS New York City Marathon between October 23 and November, 2022. Complete 100km run.'
        }
    ]
    return <View style={styles.BadgePostBox}>
        {BadgePostBoxList.map((val, index) =>
            <BadgePost key={val.bedge}
                containerStyle={styles.propContainer}
                badge={val.bedge} header={val.header}
                subHeader={val.subHeader}
                btnTitle={val.btnTitle}
                buttonColor={val.buttonColor}
                types='completedTab'
                onPress={() => navigation.navigate("ChallengedetailsScreen", {singleValue:val, type:'completedTab'})}
            />
        )
        }
    </View>;;
}

function getLocalStyle(theme) {
    const { colors, typography, spacing } = theme;
    return StyleSheet.create({
        container: {
            paddingHorizontal: 16,
        },
        propContainer: {
            paddingHorizontal: 8,
            paddingVertical: 16,
            backgroundColor: colors.background,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.connectDeviceButton,
            shadowColor: Platform.OS == 'ios' && '#E0E9E0',
            elevation: Platform.OS == 'android' && 3,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 4,
            width: '47.6%',
            shadowRadius: 7,
            marginBottom: 12,
        },
        BadgePostBox: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            width: '100%',
            // paddingBottom: 125,
        }

    })
}
export default CompletedTab;