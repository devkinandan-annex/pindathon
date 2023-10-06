import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import React, { useRef } from "react"
import RBSheet from "react-native-raw-bottom-sheet"
import MonthlyCalendar from "../../screens/GoalsScreen/MonthlyCalendar"
import { Text, Icon } from "../../components"
import useWellxStyle from "../../utils/useWellxStyle"
type BottomSheetProps = {
  RenderComponent: React.ReactNode
  refRBSheet: any
  height?: number
  containerStyle?: StyleProp<ViewStyle>
  wrapper?: StyleProp<ViewStyle>
  type?: string
  optionClick?: () => void
  headerTitle?: string
  headerTitleTx?: string,
  subTitle?: React.ReactNode
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  refRBSheet,
  RenderComponent,
  height = 300,
  containerStyle,
  wrapper,
  headerTitle,
  headerTitleTx,
  type,
  optionClick,
  subTitle
}) => {
  const closeModal = () => {
    refRBSheet.current.close()
    if (optionClick) {
      optionClick()
    }
  }

  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const styles = getLocalStyle(theme)

  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        height={height}
        closeDuration={500}
        openDuration={500}
        customStyles={{
          wrapper: wrapper,
          container: containerStyle,
          draggableIcon: {
            backgroundColor: "#fff",
          },
        }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              {headerTitle || headerTitleTx ? <>
                <Text text={headerTitle} tx={headerTitleTx} style={styles.headerTitle} />
                {subTitle}
              </> : (
                null
              )}
            </View>
            {type && (
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                {type == "filter" ? (
                  <Text tx="common.clear" style={styles.clear} />
                ) : (
                  <Icon icon={"cross"} size={17} />
                )}
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.renderContent}>{RenderComponent}</View>
        </View>
      </RBSheet>
    </View>
  )
}

export default BottomSheet

function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      width: "100%",
      // position: "relative"
    },
    closeButton: {
      alignSelf: "flex-end",
      padding: 5,
    },
    clear: {
      fontSize: spacing.medium,
      lineHeight: 18,
      color: colors.activeTabs,
      fontFamily: typography.fonts.nexa.bold,
    },
    header: {
      marginTop: 24,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    headerTitle: {
      fontSize: 24,
      fontFamily: typography.fonts.nexa.bold,
      color: colors.blackText,
    },
    renderContent: {
      width: "100%",
      // position: "absolute",
      // paddingTop: 20
    },
  })
}
