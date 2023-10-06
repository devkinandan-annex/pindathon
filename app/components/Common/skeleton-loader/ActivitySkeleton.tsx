import React from "react"
import SkeletonLoader from "expo-skeleton-loader"
import { View, Dimensions, StyleSheet } from "react-native"

export default function ActivitySkeleton() {
  const windowWidth = Dimensions.get("window").width - 32
  const leftLoaderWidth = (84 / 100) * windowWidth
  const rightLoaderWidth = (11 / 100) * windowWidth

  return (
    <View style={[styles.mainView, { width: windowWidth }]}>
      <SkeletonLoader boneColor="#F3F3F3" highlightColor="#E7ECEE">
        <SkeletonLoader.Item style={{ width: leftLoaderWidth, height: 152, borderRadius: 16 }} />
      </SkeletonLoader>

      <SkeletonLoader
        boneColor="#F3F3F3"
        highlightColor="#E7ECEE"
        style={loaderStyles.rightSkeleton}
      >
        <SkeletonLoader.Item style={{ width: rightLoaderWidth, height: 16, borderRadius: 16 }} />
        <SkeletonLoader.Item
          style={{ width: rightLoaderWidth, height: 16, borderRadius: 16, marginTop: 29 }}
        />
        <SkeletonLoader.Item
          style={{ width: rightLoaderWidth, height: 16, borderRadius: 16, marginTop: 29 }}
        />
        <SkeletonLoader.Item
          style={{ width: rightLoaderWidth, height: 16, borderRadius: 16, marginTop: 29 }}
        />
      </SkeletonLoader>
    </View>
  )
}
const styles = StyleSheet.create({
  mainView: {
    height: 152,
    justifyContent: "space-between",
    flexDirection: "row",

    marginTop: 12,
  },
})
const loaderStyles = {
  rightSkeleton: { height: 152 },
}
