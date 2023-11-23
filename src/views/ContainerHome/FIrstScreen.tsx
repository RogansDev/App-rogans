import React from "react";
import { Image, StyleSheet, Text, ToastAndroid, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottonNext from "../../components/BottonNext";


export const FIrstScreen = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Open1.png")} style={styles.background} />
      <View style={styles.form}>
        <Text style={styles.titleform}>Bienvenidos a rogans</Text>
        <Text style={styles.parraForm}>
          Con Rogans, puedes acceder a servicios médicos en línea y obtener
          tratamientos personalizados para tus necesidades.
        </Text>
        <View style={{ marginTop: 20 }}>
              <BottonNext
                text="Siguiente"
                
              />
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
    bottom: 0,
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
