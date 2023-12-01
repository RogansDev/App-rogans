import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BottonOpenTwo from "../../components/BottonOpenTwo";
import { MyColors } from "../../theme/AppTheme";
import BottonAcceder from "../../components/BottonAcceder";

const ThirdScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/Open2.png")}
        style={styles.background}
      />
      <View style={styles.form}>
        <Text style={styles.titleform}>¡Comencemos!</Text>
        <Text style={styles.parraForm}>
             <Text style={styles.parraText}>Completa tu perfil </Text>
             para estar al tanto de tus <Text style={styles.parraText}>citas y tratamientos.</Text> 
        </Text>
        <View style={{ marginTop: 20 }}>
          <BottonAcceder text="¡Comencemos!" />
        </View>
        <View style={styles.contentItems}>
          <View style={styles.selectSecond}></View>
          <View style={styles.selectThird}></View>
          <View style={styles.selectFirst}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    background: {
      width: "100%",
      height: "100%",
      opacity: 0.7,
    },
    form: {
      width: "100%",
      height: "30%",
      position: "absolute",
      bottom: 60,
      padding: 20,
    },
    titleform: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
      color: "white",
    },
    parraForm: {
      fontSize: 15,
      textAlign: "center",
      marginTop: 20,
      color: "white",
      width: "95%",
      position: "relative",
      left: 8,
      lineHeight: 25,
    },
    parraText: {
        color: MyColors.primary
    },
    contentItems: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      gap: 10,
      marginTop: 28,
    },
    selectFirst: {
      width: 50,
      height: 10,
      backgroundColor: MyColors.base,
      borderRadius: 10,
    },
    selectSecond: {
      width: 10,
      height: 10,
      backgroundColor: MyColors.gray,
      borderRadius: 10,
    },
    selectThird: {
      width: 10,
      height: 10,
      backgroundColor: MyColors.gray,
      borderRadius: 10,
    }
  });
  

export default ThirdScreen;
