import { StyleSheet, View, ViewStyle } from "react-native"
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import EmptyScreen from "../../components/Common/EmptyScreen"
interface SupportProps extends AppStackScreenProps<"support"> {}
export const Support: FC<SupportProps> = observer(function Support(_props) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)

  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
      <TopHeader
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
        centerText={"moreScreen.Support.title"}
      />
      <EmptyScreen 
            Icon="rocket" 
            title="moreScreen.supportEmpty.title" 
            subTittle="moreScreen.supportEmpty.subTitle" 
          />
    </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      flex: 1
    },
  })
}
