import { StyleSheet, View, ViewStyle } from "react-native"
import React, { FC, useRef } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "../../navigators"
import useAppConfig from "../../utils/useAppConfig"
import useWellxStyle from "../../utils/useWellxStyle"
import { Text, Icon, Screen } from "../../components"
import TopHeader from "../../components/Header/TopHeader"
import { WebView } from "react-native-webview"

interface ProfileAvatarWebProps extends AppStackScreenProps<"ProfileAvatarWeb"> {}
export const ProfileAvatarWeb: FC<ProfileAvatarWebProps> = observer(function ProfileAvatarWeb(
  _props,
) {
  const appConfig = useAppConfig()
  const wellxStyle = useWellxStyle()
  const { theme } = wellxStyle
  const { colors } = theme
  const styles = getLocalStyle(theme)
  const subdomain = "demo"

  let isSubscribed = false
  let count = 0
  const correlationId = "a0bf9c2a-44d7-4882-8e72-4bc7ab73849f"

  function onAvatarExported(message) {
    alert(`Avatar Url = ${message.data?.url}`)
  }
  const webview = useRef()

  const subscribe = () => {
    if (isSubscribed) {
      return
    }

    isSubscribed = true
    webview.current.postMessage(
      JSON.stringify({
        target: "readyplayerme",
        type: "subscribe",
        eventName: "v1.avatar.exported",
      }),
    )
  }

  const process = (data) => {
    const json = JSON.parse(data)

    // Filter for only Ready Player Me Events
    if (json.source !== "readyplayerme") {
      return
    }

    if (json.eventName === "v1.avatar.exported") {
      // Event called after avatar has been created and the URL generated
      onAvatarExported(json)

    }

    if (json.eventName !== "v1.subscription.deleted") {
      count++

      if (count > 4) {
        webview.current.postMessage(
          JSON.stringify({
            target: "readyplayerme",
            type: "unsubscribe",
            correlationId,
          }),
        )
      }
    }
  }
const goback = () =>{
  _props.navigation.goBack()
}
  return (
    <Screen preset="scroll" contentContainerStyle={styles.container} safeAreaEdges={["top"]}>
       <TopHeader
       customStyle={{position: "absolute",zIndex:1, left:12,top:5}}
        leftIcon="back"
        onPressLeft={() => _props.navigation.goBack()}
      />
      <WebView
        ref={webview}
        source={{
          uri: `https://wellx.readyplayer.me/avatar`,
        }}
        // style={{ marginTop: 20 }}
        onLoad={subscribe}
        onMessage={(message) => process(message.nativeEvent.data)}
        goBack={goback}
      />
   </Screen>
  )
})
function getLocalStyle(theme) {
  const { colors, typography, spacing } = theme
  // console.log("typography", theme)
  return StyleSheet.create({
    container: {
      // paddingHorizontal: 16,
      flex: 1
    },
  })
}
