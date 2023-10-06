import { Alert, Modal, Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { Icon, Text } from "../../components"
import { colors, typography } from "../../theme"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from '@react-navigation/native';

export default function NextMonthGoal(prop) {
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation();

const moveToNextMonthGoal = () => {
  setModalVisible(!modalVisible)
  prop.prop.navigation.navigate('NewGoal')
 
}

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text tx="goalScreen.nextMonthTittle" style={styles.title} />
        <Text tx="goalScreen.nextMonthSubTittle" style={styles.subTitle} />
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.")
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{ alignSelf: "flex-end" }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Icon icon="cross" style={styles.crossIcon} />
              </TouchableOpacity>
              <Icon icon="modalIcon" style={styles.modalIcon} />
              <Text tx="goalScreen.nextMonthTittle" style={styles.modalTitleText} />
              <Text tx="goalScreen.nextMonthSubTittle" style={styles.modalSubTitleText} />
              <View style={styles.modalButtonContainer}>
                <Pressable
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text tx="goalScreen.modalcloseButton" style={styles.closetext} />
                </Pressable>
                <Pressable style={styles.buttonChangeGoal}>
                  <Text tx="goalScreen.nextMonthButtonText" style={styles.changeGoaltext} onPress={()=> moveToNextMonthGoal()}/>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <LinearGradient
          start={[0, 0.0]}
          end={[1.0, 1.0]}
          colors={["#4639EA", "#ED3683"]}
          style={styles.changeGoalButton}
        >
          <Icon icon="pen" style={styles.buttonIcon} />
          <Text tx="goalScreen.nextMonthButtonText" style={styles.buttonText} />
        </LinearGradient>
      </TouchableOpacity>
      {/* <nextMonthModal/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 14,
     borderTopWidth: 0,
    borderWidth: 1,
    borderColor: colors.connectDeviceButton,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  subContainer: {
    width: "80%",
  },
  title: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.bold,
    lineHeight: 16,
    // 
    color: colors.activeTabs,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 18,
    
    color: colors.descText,
  },
  changeGoalButton: {
    marginTop: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontFamily: typography.fonts.nexa.regular,
    lineHeight: 14,
    
    color: colors.background,
    paddingVertical: 13,
  },
  buttonIcon: {
    marginRight: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(36, 38, 39, 0.4)",
  },
  modalView: {
    margin: 16,
    backgroundColor: colors.background,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: Platform.OS == 'ios' && '#E0E9E0',
    elevation: Platform.OS == 'android' && 3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  crossIcon: {
    // backgroundColor:'red'
  },
  modalIcon: {
    marginBottom: 40,
  },
  modalButtonContainer: {
    flexDirection: "row",
  },

  buttonClose: {
    backgroundColor: colors.connectDeviceButton,
    borderRadius: 12,
    width: "45%",
  },
  buttonChangeGoal: {
    backgroundColor: colors.activeTabs,
    borderRadius: 12,
    width: "45%",
    marginLeft: 20,
  },
  changeGoaltext: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: typography.fonts.nexa.bold,
    color: colors.background,
    textAlign: "center",
    paddingTop: 18,
    paddingBottom: 12,
  },
  closetext: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: typography.fonts.nexa.bold,
    color: colors.activeTabs,
    textAlign: "center",
    paddingTop: 18,
    paddingBottom: 12,
  },
  modalTitleText: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: typography.fonts.nexa.bold,
    color: colors.blackText,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  modalSubTitleText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: typography.fonts.nexa.regular,
    color: colors.blackText,
    textAlign: "center",
    marginBottom: 40,
  },
})
