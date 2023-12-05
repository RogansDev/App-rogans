import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BottonOpenTwo from "../../components/BottonOpenTwo";
import { MyColors, MyFont } from "../../theme/AppTheme";

const SecondScreen = () => {
  

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/Open3.png")}
        style={styles.background}
      />
      <View style={styles.form}>
        <Text style={styles.titleform}>Salud a tu alcance</Text>
        <Text style={styles.parraForm}>
           <Text style={styles.textColor}>Programa citas médicas en línea,</Text> realiza 
           <Text style={styles.textColor}> consultas </Text>virtuales
           <Text style={styles.textColor}> con especialistas,</Text> compra 
           <Text style={styles.textColor}> productos para tus tratamientos.</Text>
        </Text>
        <View style={{ marginTop: 20 }}>
          <BottonOpenTwo text="Siguiente" />
        </View>
        <View style={styles.contentItems}>
           <View style={styles.selectSecond}></View>
           <View style={styles.selectFirst}></View>
           <View style={styles.selectThird}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  form: {
    position: "relative",
    padding: 20,
    zIndex: 10,
  },
  titleform: {
    fontSize: 30,
    fontFamily: MyFont.bold,
    textAlign: "center",
    marginTop: 20,
    color: "white",
  },
  parraForm: {
    fontSize: 14,
    fontFamily: MyFont.regular,
    textAlign: "center",
    marginTop: 20,
    color: "white",
    width: 350,
    position: "relative",
    right: 4,
    lineHeight: 20,
  },
  textColor: {
    color: MyColors.primary,
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

export default SecondScreen;
