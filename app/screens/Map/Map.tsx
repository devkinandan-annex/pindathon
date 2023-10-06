import { StyleSheet, View, ViewStyle, Platform, PermissionsAndroid } from 'react-native';
import React, { FC, useRef, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators";
import useAppConfig from '../../utils/useAppConfig';
import useWellxStyle from '../../utils/useWellxStyle';
import { Text, Icon, Screen } from '../../components';
import TopHeader from '../../components/Header/TopHeader';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from "expo-location";
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import BuildRoute from './BuildRoute';
import RouteInfo from './RouteInfo';

interface MapScreenProps extends AppStackScreenProps<"MapScreen"> { }
export const MapScreen: FC<MapScreenProps> = observer(function MapScreen(_props) {

  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  const mapRef = useRef(null);
  const [position, setPosition] = useState({ latitude: 26.9077054, longitude: 75.740406, latitudeDelta: 0.070, longitudeDelta: 0.070 });
  const [distance, setDistance] = useState({distance:'', duration:''})
  const refBuild = useRef(null);
  const buildInfo = useRef(null);
  const [buildRoute, setBuildRoute] = useState<boolean>(false)

  useEffect(() => {
    async function setLocationWithPerms() {
      const permissions = await Location.requestForegroundPermissionsAsync();
      if (permissions.status === "granted") {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setPosition({ ...position, latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude });
      }
    }
    setLocationWithPerms();
    refBuild.current?.open()
  }, [position, refBuild]);

  const destination = { latitude: 26.9124, longitude: 75.7873, latitudeDelta: 0.070, longitudeDelta: 0.070 };
  const renderTitle= () =>{
    return (
      <View style={{marginLeft:16, flexDirection:'row'}}>
        <Text text={`${distance.duration} min.`} style={styles.locationTitle} />
        <Text style={[styles.locationTitle, {color:'#92989B', marginLeft:5}]} text={`(${distance.distance} km.)`} numberOfLines={2}/>
      </View>
    )
  }

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
      />
      <BottomSheet
        RenderComponent={<BuildRoute onBuild={() => [setBuildRoute(true), refBuild.current.close(),buildInfo.current.open() ]} />}
        refRBSheet={refBuild}
        height={202}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
        headerTitleTx={'moreScreen.hospitaldetailsScreen.Address'}
      />

      <BottomSheet
        RenderComponent={<RouteInfo  />}
        refRBSheet={buildInfo}
        height={222}
        type='cross'
        subTitle={renderTitle()}
        wrapper={styles.wrapper}
        containerStyle={styles.bottomSheetContainer}
        headerTitleTx={'moreScreen.hospitaldetailsScreen.route'}
      />

      <MapView
        style={{ flex: 1, position: 'relative', zIndex: 9 }}
        ref={mapRef}
        region={destination}
        initialRegion={destination}
        mapType="standard"
      >
        {buildRoute && <>
          <MapViewDirections
            origin={position}
            destination={destination}
            // mode='DRIVING'
            optimizeWaypoints={true}
            apikey={'AIzaSyAapGckjHHdMX50kkUNPNxZ6xbNuox8KFA'}
            strokeWidth={4}
            strokeColor="#5043ED"
            onError={error => console.log("Directions error: ", error)}
            onReady={result => {
              setDistance({ 'distance': result.distance.toFixed(1), 'duration': result.duration.toFixed(1) })
            }}
          />
          <Marker coordinate={position} title="Origin" identifier="origin" description='annex'>
            <Icon icon='cureentLoc' size={30} />
          </Marker>
        </>}
        <Marker coordinate={destination} title="Destination" identifier="destination" description='jaipur'>
          <Icon icon='locationIcon' size={30} />
        </Marker>

      </MapView>
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      // paddingTop: spacing.large + spacing.extraLarge,
      // paddingHorizontal: spacing.large,
      flex: 1
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    wrapper: {
      backgroundColor: "rgba(36, 38, 39, 0.4)",
    },
    locationTitle:{
      color:'#5043ED',
      fontSize:16,
      lineHeight:18, 
      fontWeight:'700',
      fontFamily: typography.fonts.nexa.bold,
    }
  })
}