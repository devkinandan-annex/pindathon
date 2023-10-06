import { StyleSheet, View, } from 'react-native'
import React, { FC, useState, useRef } from 'react'
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from '../../utils/useAppConfig'
import useWellxStyle from '../../utils/useWellxStyle'
import { Text, Icon, Screen } from '../../components'
import TopHeader from '../../components/Header/TopHeader'
import WellxBtn, { OuterBtn } from '../../components/Buttons/WellxBtn'
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import DeviceLinkModal from './DeviceLinkModal';
import DeleteDevice from './DeleteDevice';
import CustomFlatList from '../../components/Common/CustomFlatList';
import EmptyScreen from '../../components/Common/EmptyScreen'
import DeviceList from './DeviceList';
import RequestDevice from './RequestDevice'

interface DeviceListScreenProps extends AppStackScreenProps<"deviceList"> { }
export const DeviceListScreen: FC<DeviceListScreenProps> = observer(function DeviceListScreen(_props) {
  const appConfig = useAppConfig();
  const wellxStyle = useWellxStyle();
  const { theme } = wellxStyle;
  const { colors } = theme;
  const styles = getLocalStyle(theme);
  const refRBSheet = useRef(null);
  const [deviceName, setDeviceName] = useState("");
  const refRBSheetDelete = useRef(null);
  const refRBSheetNew = useRef(null);
  const refRequestDevice= useRef(null)
  const [data, setData] = useState([{ id: 1, name: 'My whoop' }]);
  const [activeId, setActiveId] = useState(null);
  const [title, setTitle] = useState('');
  const [requestType, setRequestType] = useState('')

  const removeName = (name: any, id: number) => {
    setDeviceName(name);
    setActiveId(id)
    refRBSheet.current.open();
  }
  const refreshDevice = () => {
    setTitle('Device refreshed!');
    setTimeout(() => {
      setTitle('')
    }, 2000)
  }
  const nameAction = (val: any) => {
    if (activeId !== null) {
      const newState = data.map(obj => {
        if (obj.id === activeId) {
          return { ...obj, name: val };
        }
        return obj;
      });
      setData(newState);
    } else {
      const newElement = { name: val, id: data.length + 1 }
      console.log(newElement, "newElement")
      setData(oldData => [...oldData, newElement]);
    }
    refRBSheet.current.close();
  }
  const removeDevice = (id: number) => {
    refRBSheetDelete.current.open();
    setActiveId(id)

  }
  const removeAction = () => {
    setData(data.filter(item => item.id !== activeId));
    setActiveId(null)
    refRBSheetDelete.current.close();
    setTitle('Device deleted!');
    setTimeout(() => {
      setTitle('')
    }, 2000)

  }

  return <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
    {title.length !== 0 ? <View style={styles.row}>
      <Icon icon='successGreen' style={{ width: 24, height: 24 }} />
      <Text text={title} style={styles.sucessText} />
    </View> :
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText="deviceListScreen.pageTitle"
      />}
    <BottomSheet
      RenderComponent={<DeviceLinkModal name={deviceName} nameAction={nameAction} />}
      refRBSheet={refRBSheet}
      height={275}
      headerTitleTx={'deviceScreen.renameDevice'}
      wrapper={styles.wrapper}
      containerStyle={styles.bottomSheetContainer}
    />
     <BottomSheet
      RenderComponent={<DeviceList requestAction={() => [refRequestDevice.current.open(),refRBSheetNew.current.close() ]} />}
      refRBSheet={refRBSheetNew}
      height={442} 
      headerTitleTx={'deviceScreen.addNewDevice'}
      wrapper={styles.wrapper}
      containerStyle={styles.bottomSheetContainer}
    />
    <BottomSheet
      RenderComponent={<RequestDevice  onClose={() => refRequestDevice.current.close()} />}
      refRBSheet={refRequestDevice}
      height={545} 
      headerTitleTx={'deviceScreen.requestTitle'}
      wrapper={styles.wrapper}
      containerStyle={styles.bottomSheetContainer}
    />
    <BottomSheet
      RenderComponent={<DeleteDevice close={() => refRBSheetDelete.current.close()} remove={removeAction} />}
      refRBSheet={refRBSheetDelete}
      height={222}
      headerTitleTx={'deviceScreen.deleteDevice'}
      wrapper={styles.wrapper}
      containerStyle={styles.bottomSheetContainer}
    />
    <View style={styles.main}>
      {data.length === 0 ? <View style={styles.ESMView}>
        <EmptyScreen Icon="watch" title="deviceScreen.ESMTitle" subTittle="deviceScreen.ESMSubTitle" />
      </View> :
        <CustomFlatList data={data} type="device"
          deleteAction={removeDevice}
          rename={(name: any, id: number) => removeName(name, id)}
          refreshAction={refreshDevice} height={"100%"}
        />
      }

    </View>
    {data.length === 0 ?  
    <WellxBtn title="deviceScreen.addNewDevice" customStyle={styles.ESMButton} onPress={() => [refRBSheetNew.current.open()]} btnType="primary"  />
    :
      <OuterBtn title="deviceScreen.addNewDevice" customStyle={styles.redeemBtn} textStyle={styles.redeemBtnText}
        onPress={() => [refRBSheetNew.current.open()]} />
    }
  </Screen>
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme;
  return StyleSheet.create({
    container: {
      paddingHorizontal: spacing.medium,
      paddingTop: spacing.small,
      height: '100%',
      flex: 1
    },
    main: {
      // marginTop: 24,
      height: '100%',
      flex: 1,
    },
    boxFooter: {
      marginTop: 20,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row'
    },
    refreshBtn: {
      backgroundColor: '#F5F7F8',
      borderRadius: 12,
      height: 42,
      width: '49%',
      marginRight: 4,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    renameBtn: {
      backgroundColor: colors.connectDeviceButton,
      borderRadius: 12,
      height: 42,
      width: '49%',
      marginLeft: 4,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    btnText: {
      marginLeft: 8,
      fontSize: 14,
      lineHeight: 18,
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.regular,
      fontWeight: '400'
    },
    redeemBtn: {
      marginTop: spacing.medium,
      height: 54,
      borderWidth: 2,
      borderColor: colors.activeTabs,
      borderRadius: spacing.medium,
      width: '100%',
      position: 'absolute',
      bottom: 8
    },
    redeemBtnText: {
      color: colors.activeTabs,
      lineHeight: spacing.medium,
      fontSize: 14,
      fontFamily: typography.fonts.nexa.bold,
      fontWeight: '700'
    },
    bottomSheetContainer: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      alignItems: "center",
    },
    wrapper: {
      backgroundColor: "rgba(36, 38, 39, 0.4)",
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 17,
      borderColor: colors.challangeBorder,
      borderRadius: 16,
      height: 56,
      elevation: 1,
      backgroundColor: colors.background,
      borderWidth: 1
    },
    sucessText: {
      marginLeft: 10,
      fontSize: 18,
      lineHeight: 22,
      color: colors.blackText,
      fontFamily: typography.fonts.nexa.regular,
      
    },
    ESMView: {
      height: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    ESMButton:{
      height:56,
      marginBottom:8
    }
  })
}