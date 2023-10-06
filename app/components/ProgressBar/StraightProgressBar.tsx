import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import React, { useRef } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "../../theme"

type StraightProgressBarProps = {
  containerStyle?:StyleProp<ViewStyle>
  filling?:StyleProp<ViewStyle>
  progress:string
}
const StraightProgressBar: React.FC<StraightProgressBarProps> = ({containerStyle , filling ,progress}) => {
  return <View>
        <View style={containerStyle}>
          <LinearGradient
            start={[0, 0.0]}
            end={[1.0, 1.0]}
            colors={["#4639EA", "#ED3683"]}
            style={[
              filling,
            {         
                width: progress //dynmic value of progress bar %
            }, 
            ]}
          ></LinearGradient>
        </View>
  </View>
}

export default StraightProgressBar
const styles = StyleSheet.create({

})
