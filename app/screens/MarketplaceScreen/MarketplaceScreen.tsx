import React, { FC, ReactElement, useEffect, useRef, useState } from "react"
import { FlatList, Image, ImageStyle, SectionList, TextStyle, View, ViewStyle, TextInput, TouchableOpacity, Platform } from "react-native"
// import { useSharedValue } from "react-native-reanimated"
// import { SafeAreaView } from "react-native-safe-area-context"
import { isRTL } from "../../i18n"
import { Icon, Screen, Text, Toggle } from "../../components"
import { colors, spacing, typography } from "../../theme"
import BottomSheet from '../../components/BottomSheet/BottomSheet'

import { MainBottomTabScreenProps } from "../../navigators/MainBottomTabNavigator";
import WellxBtn from "../../components/Buttons/WellxBtn";
import { Style } from "victory-core"


export const MarketplaceScreen: FC<MainBottomTabScreenProps<"MarketplaceScreen">> =
  function MarketplaceScreen(_props) {
    const [search, setSearch] = useState("");
    const [buttonActive, setButtonActive] = useState(true);
    const [paymentOption, setPaymentOption] = useState(0);


    const refRBSheet = useRef(null)
    const openModal = () => {
      refRBSheet.current.open()
    }


    const BuyVoucherList = [
      {
        name: "Amazon -25% OFF",
        icon: "amazon",
        priceAED: "AED 122",
        price: "500",
        id:1
      },
      {
        name: "Shopify -12% OFF",
        icon: "shopify",
        priceAED: "AED 152",
        price: "200",
        id:2
      },
      {
        name: "Amazon -25% OFF",
        icon: "amazon",
        priceAED: "AED 125",
        price: "700",
        id:3
      },
      {
        name: "Shopify -12% OFF",
        icon: "shopify",
        priceAED: "AED 202",
        price: "1000",
        id:4
      },
    ]


    const BuyVoucher = [
      {
        type: 1,
        paymentType: "xCoins",
        paymentTypeIcon: "xCoins",
        balance: "2.500",
        needCoin: '-500'
      },
      {
        type: 2,
        paymentType: "ApplePay",
        paymentTypeIcon: "applePay",
        balance: "3.500",
        needCoin: '200'
      }
    ]


    const PaymentMode = (type) => {
      setPaymentOption(type);
      setButtonActive(false);
    }

    const searchItem = (val: string) => {
      setSearch(val);

    }
    const clearSearch = () => {
      setSearch("");
    }

    const SelectVoucherPlan = () => {
      return (
        <View style={$marketplaceContainer}>
          <View style={$VoucherAicon}>
            <Icon icon='amazon' size={37} />
          </View>
          <Text style={$vouchersTitleModal} text="Amazon -25% OFF" />


          <View style={$radioButtonTabMain}>
            {BuyVoucher.map((val, index) =>
              <TouchableOpacity key={val.type} style={[$radioButtonTab, paymentOption == val.type && $tabActive]} onPress={() => PaymentMode(val.type)} >
                <View style={$radioButtonTabItem}>
                  <Icon style={$radioIcon} icon={val.paymentTypeIcon} size={16} />
                  <Text style={$radioboxtitle} text={val.paymentType} />
                  <Toggle
                    variant="radio"
                    value={paymentOption == val.type ? true : false}
                    labelPosition="right"
                    labelTx={'marketplaceModal.LabelText'}
                    labelStyle={$labelStyle}
                    inputWrapperStyle={$inputContainer}
                    inputInnerStyle={$inputInner}
                    inputOuterStyle={$inputOuter}
                    inputDetailStyle={$inputActive}
                  // onPress={() => setPaymentOption(val.type)}
                  />
                </View>
                <Text style={$radioboxtitletop} tx="marketplaceModal.titleMiddle" />
                <Text style={$radioboxtitleBottom} text={val.balance} />
                <Text style={$radioboxtitletop} tx="marketplaceModal.titleBottom" />
                <Text style={$radioboxtitleLast} text={val.needCoin} />

              </TouchableOpacity>
            )}
          </View>
          <View style={$VoucherBtn}>
            <WellxBtn
              title="loginScreen.voucherBtn"
              customStyle={$buttonMain}
              disable={buttonActive}
              btnType="primary"
            />
          </View>
        </View>
      )
    }

    return <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="heading" tx="marketplaceScreen.title" style={$title} />
      <View style={$vouchersBox}>
        <View style={$vouchersBoxItemLeft}>
          <Text style={$vouchersTitle} tx="marketplaceScreen.vouchersBox.title" />
          <View style={$vouchersTitleBox} >
            <Icon icon='monyIcon' size={23} />
            <Text style={$vouchersTitleBottom} text="2.500" />
          </View>
        </View>
        <View style={$vouchersBoxItemRight}>
          <TouchableOpacity style={$buttonItem} onPress={() => _props.navigation.navigate('MyvouchersScreen')}>
            <Icon icon="voucherbtn" size={12} />
            <Text style={$buttonText} text="Go to my vouchers" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={$searchBar}>
        <Icon style={$searchIcon} icon="search" size={20} />
        <TouchableOpacity style={$closeIconMain} onPress={() => clearSearch()} >
          <Icon icon="closeCircle" size={20} color={colors.descText} style={$closeIconContainer} />
        </TouchableOpacity>
        <TextInput
          style={$searchInput}
          placeholder="Search"
          placeholderTextColor={colors.descText}
          onChangeText={(v) => searchItem(v)}
          value={search}
        />
      </View>


      <View style={$goalmarketplaceItem}>
        <Icon style={$starIcon} icon="starIcon" size={14} />
        <Icon style={$starIconRight} icon="starIcon" size={20} />
        <Icon style={$goalIcon} icon="goal" size={71} />
        <Text style={$goalitemSubTitle} text="Buy a voucher and close your daily goal!" />
        <Text style={$goalitemTitle} text="1 Voucher = 1 daily goal" />
      </View>


      {
        BuyVoucherList.map((val, index) =>
          <TouchableOpacity key={val.id} style={$marketplaceItem} onPress={() => openModal()}>
            <View style={$marketplaceItemLeft}>
              <Icon icon={val.icon} size={26} />
            </View>
            <View style={$marketplaceItemCenter}>
              <Text style={$itemTitle} text={val.name} />
              <Text style={$itemSubTitle} text={val.priceAED} />
            </View>
            <View style={$marketplaceItemRight}>
              <Icon icon='marketplaceIcon' size={16} />
              <Text style={$itemTitleRight} text={val.price} />
            </View>
          </TouchableOpacity>
        )
      }




      <BottomSheet
        RenderComponent={SelectVoucherPlan()}
        refRBSheet={refRBSheet}
        wrapper={$wrapper}
        containerStyle={$bottomSheetContainer}
        height={462}
      />

    </Screen>
  }


const $container: ViewStyle = {
  marginTop: 12,
  marginHorizontal: 16,
  // flex: 1,
}


const $title: TextStyle = {
  marginBottom: spacing.extraLarge,
  fontSize: 36,
  lineHeight: 42,
  fontFamily: typography.fonts.nexa.bold,
  color: colors.blackText,
}


const $vouchersBox: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 14,
  paddingVertical: 16,
  backgroundColor: colors.activeTabs,
  borderRadius: 16,
  borderWidth: 1,
  height: 84,
  borderColor: colors.challangeBorder,
  shadowColor: Platform.OS == 'ios' && '#E0E9E0',
  elevation: Platform.OS == 'android' && 3,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.5,
  shadowRadius: 7,
  marginBottom: 12,
}
const $vouchersBoxItemLeft: ViewStyle = {
  marginRight: 15,

}
const $vouchersBoxItemRight: ViewStyle = {
  position: 'relative',
}

const $buttonItem: ViewStyle = {
  paddingHorizontal: 20,
  paddingVertical: 12,
  borderRadius: 16,
  backgroundColor: colors.connectDeviceButton,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: 'center',
}




const $vouchersTitleBox: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: 'center',
}

const $buttonText: TextStyle = {
  fontSize: 14,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.bold,
  color: colors.blackText,
  marginLeft: 7,
}



const $goalmarketplaceItem: ViewStyle = {
  paddingHorizontal: 14,
  paddingVertical: 16,
  backgroundColor: colors.background,
  borderRadius: 16,
  borderWidth: 1,
  height: 92,
  borderColor: colors.challangeBorder,
  shadowColor: Platform.OS == 'ios' && '#E0E9E0',
  elevation: Platform.OS == 'android' && 3,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.5,
  shadowRadius: 7,
  marginBottom: 24,
  position: 'relative',
  overflow: 'hidden',
}

const $starIcon: ImageStyle = {
  position: "absolute",
  top: 62,
  left: 20
}
const $starIconRight: ImageStyle = {
  position: "absolute",
  bottom: -5,
  right: 14
}
const $goalIcon: ImageStyle = {
  position: "absolute",
  top: 15,
  right: 14
}

const $goalitemTitle: TextStyle = {
  fontSize: 20,
  lineHeight: 22,
  fontFamily: typography.fonts.nexa.bold,
  color: colors.activeTabs,
  marginTop: 20,
}

const $goalitemSubTitle: TextStyle = {
  fontSize: 14,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.bold,
  color: colors.blackText,
  marginBottom: 4,
}


const $marketplaceItem: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  paddingHorizontal: 14,
  paddingVertical: 16,
  backgroundColor: colors.background,
  borderRadius: 16,
  borderWidth: 1,
  height: 84,
  borderColor: colors.challangeBorder,
  shadowColor: Platform.OS == 'ios' && '#E0E9E0',
  elevation: Platform.OS == 'android' && 3,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.5,
  shadowRadius: 7,
  marginBottom: 12,
}




const $marketplaceItemLeft: ViewStyle = {
  width: 52,
  height: 52,
  marginRight: 12,
  borderRadius: 16,
  borderWidth: 1,
  padding: 12,
  overflow: 'hidden',
  borderColor: colors.challangeBorder,
}
const $marketplaceItemCenter: ViewStyle = {
  position: 'relative',
  marginRight: 12,
  width: '45%',
}

const $marketplaceItemRight: ViewStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: "32%",
  justifyContent: 'flex-end'
}

const $searchBar: ViewStyle = {
  flex: 1,
  width: "100%",
  marginVertical: 24,
  position: 'relative',
}

const $searchInput: TextStyle = {
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
}




const $closeIconMain: ViewStyle = {
  width: 90,
  height: 45,
  position: "absolute",
  right: 10,
  top: 5,
  zIndex: 1,
  backgroundColor: colors.background,
}

const $closeIconContainer: ImageStyle = {
  backgroundColor: colors.background,
  width: 16,
  height: 16,
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  borderRadius: 16,
  position: "absolute",
  top: 15,
  right: 10
}

const $searchIcon: ImageStyle = {
  position: "absolute",
  top: 18,
  left: 20
}



const $itemTitleRight: TextStyle = {
  fontSize: 24,
  lineHeight: 30,
  fontFamily: typography.fonts.nexa.bold,
  color: colors.blackText,
  marginLeft: 7,
}

const $itemTitle: TextStyle = {
  fontSize: 16,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.bold,
  color: colors.blackText,
  marginBottom: 4,
}

const $vouchersTitle: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
  marginBottom: 6,
  fontFamily: typography.fonts.nexa.regular,
  color: colors.background,
}

const $vouchersTitleBottom: TextStyle = {
  fontSize: 18,
  lineHeight: 22,
  fontFamily: typography.fonts.nexa.bold,
  color: colors.background,
}


const $itemSubTitle: TextStyle = {
  fontSize: 14,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.regular,
  color: colors.descText,
}

const $bottomSheetContainer: ViewStyle = {
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  alignItems: "center",
}

const $marketplaceContainer: ViewStyle = {
  width: '100%',
  position: 'relative',
  height: "100%",
}

const $wrapper: ViewStyle = {
  backgroundColor: "rgba(36, 38, 39, 0.4)",
}

const $VoucherBtn: ViewStyle = {
  width: "100%",
}

const $buttonMain: ViewStyle = {
  width: '100%',
}

const $vouchersTitleModal: TextStyle = {
  fontSize: 24,
  lineHeight: 28,
  fontFamily: typography.fonts.nexa.bold,
  color: colors.blackText,
  alignSelf: 'center',
}

const $VoucherAicon: ViewStyle = {
  width: 60,
  height: 60,
  borderRadius: 50,
  borderWidth: 1,
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  alignSelf: 'center',
  justifyContent: 'center',
  borderColor: colors.challangeBorder,
  marginBottom: 24,
}

const $radioButtonTabMain: ViewStyle = {
  backgroundColor: colors.background,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: 'center',
  marginVertical: 32,
}
const $radioButtonTab: ViewStyle = {
  width: "48%",
  backgroundColor: colors.background,
  borderRadius: 16,
  borderWidth: 1,
  paddingHorizontal: 14,
  paddingVertical: 16,
  minHeight: 200,
  borderColor: colors.challangeBorder,
}

const $tabActive: ViewStyle = {
  borderColor: colors.activeTabs,
}

const $radioButtonTabItem: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "space-between",
  marginBottom: 32,
}
const $radioboxtitle: TextStyle = {
  fontSize: 16,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.regular,
  color: colors.blackText,
  marginRight: 15,
}

const $radioIcon: ImageStyle = {
}

const $radioboxtitletop: TextStyle = {
  fontSize: 14,
  lineHeight: 18,
  fontFamily: typography.fonts.nexa.regular,
  color: colors.blackText,
}
const $radioboxtitleBottom: TextStyle = {
  fontSize: 24,
  lineHeight: 28,
  fontFamily: typography.fonts.nexa.bold,
  color: colors.blackText,
  marginBottom: 16,
}
const $radioboxtitleLast: TextStyle = {
  fontSize: 24,
  lineHeight: 28,
  fontFamily: typography.fonts.nexa.bold,
  color: colors.error,
}




const $labelStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 0,
  fontFamily: typography.fonts.nexa.regular,
  color: colors.blackText,
}
const $inputContainer: TextStyle = {
  marginVertical: 0,
}
const $inputInner: TextStyle = {
  borderWidth: 6,
  borderRadius: 25,
  borderColor: colors.blue

}
const $inputOuter: TextStyle = {
  borderColor: colors.challangeBorder,
  backgroundColor: colors.background,
}
const $inputActive: ImageStyle = {
  backgroundColor: colors.background,
}






