import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import useAppConfig from '../../utils/useAppConfig';
import useWellxStyle from '../../utils/useWellxStyle';
import { Text } from '../Text';
import { Icon } from '../Icon';
import BottomSheet from '../BottomSheet/BottomSheet';

export default function Filters() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [type, setType] = useState();
    const [filterType, setFilterType] = useState('');
    const [filterTypeIcon, setFilterTypeIcon] = useState('');
    const [filterTime, setFilterTime] = useState('');
    const [filterTimeIcon, setFilterTimeIcon] = useState('calendar');
    const appConfig = useAppConfig();
    const wellxStyle = useWellxStyle();
    const {theme} = wellxStyle;
    const {colors} =theme; 
    const styles = getLocalStyle(theme);
    const refRBSheet = useRef(null)

    const openModal = (type) => {
      setType(type);
      refRBSheet.current.open()
    }

    const FilterTypes = [
      {
        name: 'leaderboardScreen.filtertype1',
        icon: 'challenge'
      },
      {
        name: 'leaderboardScreen.filtertype2',
        icon: 'foot'
      },
      {        
        name: 'leaderboardScreen.filtertype3',
        icon: 'moon'
      },
    ];

    const FilterTimes = [
      {
        name: 'leaderboardScreen.filtertime1',
      },
      {
        name: 'leaderboardScreen.filtertime2',
      },
      {        
        name: 'leaderboardScreen.filtertime3',
      },
      {        
        name: 'leaderboardScreen.filtertime4',
      },
    ];

    useEffect(() => {
      setFilterType('leaderboardScreen.filtertype1');
      setFilterTypeIcon('challenge');

      setFilterTime('leaderboardScreen.filtertime1');
      setFilterTimeIcon('calendar');
    }, [])


    const selectFilterType = (type, icon) => {
      setFilterType(type);
      setFilterTypeIcon(icon);
    }

    const selectFilterTime = (type) => {
      setFilterTime(type);
    }

    const filterTypeModel = (type) => {
      return(
        <View style={styles.filterContainer}>
          {/* <Text tx="leaderboardScreen.filterHeading" style={styles.filterHeading} /> */}
          <View style={styles.filterBody}>

            { type == 1 && FilterTypes.map((val, index) => 
              <TouchableOpacity  key={val.name}
                style={[styles.filterSingle, (val.name == filterType) ? styles.active  : styles.inActive ]} 
                onPress={() => selectFilterType(val.name, val.icon)}
              >
                <Icon icon={val.icon} style={styles.filterIcon} color={(val.name == filterType) ? colors.blue  : colors.blackText} />
                <Text tx={val.name} style={[styles.filterTitle, (val.name == filterType) ? styles.active  : styles.inActive]} />
            </TouchableOpacity>
            )}  

            { type == 2 && FilterTimes.map((val, index) => 
              <TouchableOpacity 
                style={[styles.filterSingle, (val.name == filterTime) ? styles.active  : styles.inActive ]} 
                onPress={() => selectFilterTime(val.name)}
              >
                
                <Text tx={val.name} style={[styles.filterTitle, (val.name == filterTime) ? styles.active  : styles.inActive]} />
            </TouchableOpacity>
            )}    

              
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <BottomSheet
            RenderComponent={filterTypeModel(type)}
            refRBSheet={refRBSheet}
            height={340}
            wrapper={styles.wrapper}
            containerStyle={styles.bottomSheetContainer}
            headerTitleTx="leaderboardScreen.filterHeading"
            type='cross'
          />
        <TouchableOpacity style={styles.innerContainer} onPress={() => openModal(1)}>
          <View style={styles.innerContainerLeft}>
            <Icon icon={filterTypeIcon} style={styles.innerIconLeft} color={colors.blue} />
            <Text tx={filterType} style={styles.innerTitle} />
          </View>
          
          <Icon icon='downArrow' style={styles.innerIconRight} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={() => openModal(2)}>
          <View style={styles.innerContainerLeft}>
            <Icon icon={filterTimeIcon} style={styles.innerIconLeft} color={colors.blue} />
            <Text tx={filterTime} style={styles.innerTitle} />
          </View>
          <Icon icon='downArrow' style={styles.innerIconRight} />
        </TouchableOpacity>
      </View>
    )
}

function getLocalStyle(theme) { 

    console.log(theme)
    const {colors, typography, spacing} = theme;
    // console.log("typography", theme)
    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.background
      },
      innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        width: '47%',
        borderWidth: 1,
        borderColor: colors.challangeBorder,
        paddingVertical: 10,
        borderRadius: 14
      },
      innerContainerLeft: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10
      },
      innerTitle: {
        fontSize: 14,
        lineHeight: 14,
        fontFamily: typography.fonts.nexa.bold,
        color: colors.blackText
      },
      innerIconLeft: {
        marginRight: 5,
        // marginLeft: 20,
        bottom: 1,
        width: 25,
        height: 25
      },
      innerIconRight: {
        marginRight: 15
      },
      bottomSheetContainer:{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
      },
      wrapper:{
        backgroundColor: "rgba(36, 38, 39, 0.4)",
      },
      followContainer: {
        paddingHorizontal: 16,
        width: '100%'
      },
      filterContainer: {
        // paddingHorizontal: 16,
        width: '100%'
      },
      filterHeading: {
        fontSize: 24,
        lineHeight: 28,
        fontFamily: typography.fonts.nexa.bold,
        color: colors.blackText
      },
      filterBody: {
        marginTop: 32,
        width: '100%'
      },
      filterSingle: {
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: colors.challangeBorder,
        borderRadius: 14,
        marginBottom: 8,
        width: '100%'
      },
      filterIcon: {
        marginRight: 8,
        height: 25,
        width: 25
      },
      filterTitle: {
        fontSize: 14,
        lineHeight: 14,
        fontFamily: typography.fonts.nexa.bold,
        color: colors.blackText
      },
      active: {
        color: colors.blue,
        borderColor: colors.blue,
      },
      inActive: {
        color: colors.blackText,
        borderColor: colors.challangeBorder,
      },

    })
  }