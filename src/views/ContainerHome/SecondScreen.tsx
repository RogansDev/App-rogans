import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BottonOpenTwo from "../../components/BottonOpenTwo";

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
          Programa citas médicas en línea, realiza consultas virtuales con
          especialistas, compra productos para tus tratamientos.
        </Text>
        <View style={{ marginTop: 20 }}>
          <BottonOpenTwo text="Siguiente" />
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
    bottom: 40,
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
    left: 20,
    lineHeight: 25,
  },
});

export default SecondScreen;
