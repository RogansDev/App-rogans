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
        <View style={{ marginTop: 0 }}>
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
    position: "relative",
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.7,
    zIndex: -1,
  },
  form: {
    position: "absolute",
    bottom: 0,
    width: "100%",
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
    lineHeight: 25,
  },
});


