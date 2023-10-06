import { StyleSheet, TouchableOpacity, View } from "react-native"
import React from "react"
import { Icon, Text } from ".."
import { LinearGradient } from "expo-linear-gradient"
import { colors, typography } from "../../theme"
import WellxBtn from "../Buttons/WellxBtn"
import { navigationRef } from "../../navigators"

const EmptyScreen = (prop) => {
  const { customStyle, subTitleParms, title, subTittle, Button, buttonType, buttonText, onPress } = prop;
  const goalSetScreen = () => {
    
  }

  return (
    <View style={[styles.container, customStyle]}>
      <View style={styles.iconContainer}>
        <Icon size={80}  icon={prop.Icon}/>
      </View>
      <Text tx={title} style={styles.heading} />

     {subTittle &&
           <Text tx={subTittle} style={styles.subHeading} txOptions={{subTitleParms}} />
     }
      
      {Button &&
         <WellxBtn title={buttonText} onPress={onPress} btnType={buttonType}   />
      }
     
    </View>
  )
}

export default EmptyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {       
     marginBottom:40,
  },
  heading: {
    marginBottom:16,
    fontSize: 20,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 22,
    // 
    color: colors.blackText,
  },
  subHeading: {
    marginBottom:40,
    fontSize: 16,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 18,
    // 
    color: colors.descText,
    textAlign:'center'
    
  },
  button: {
    width: "100%",
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 18,
    // 
    color: colors.background,
    paddingVertical: 20,
  },
})
