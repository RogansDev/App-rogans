import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import BottomLogin from "../../components/BottomLogin";
import LogoBlack from "../../../assets/logo-black.svg";
import Forget from "../../../assets/password-check.svg";
import { MyColors, MyFont } from "../../theme/AppTheme";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoBlack width={140} height={100} />
      </View>
      <View style={styles.form}>
        {/* imput de login */}
        <View>
          <View style={styles.titleModalButton}>
            <Text style={styles.text1TitleModalButton}> Nombre de usuario </Text>
            <Text style={styles.text2TitleModalButton}>(Requerido)</Text>
          </View>
          <TextInput 
            placeholder="Correo electronico" 
            keyboardType="default" 
            style={styles.formTextInput}
          />
        </View>
        {/* Input de contraseña */}
        <View>
          <View style={styles.titleModalButton}>
            <Text style={styles.text1TitleModalButton}>Contraseña </Text>
            <Text style={styles.text2TitleModalButton}>(Requerido)</Text>
          </View>
          <TextInput 
            placeholder="Ingresa tu contraseña" 
            keyboardType="default" 
            style={styles.formTextInput}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.base,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "20%",
  },
  form: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 250,
    padding: 20,
  },
  formTextInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#909090",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  titleModalButton: {
    flexDirection: "row",
    position: "absolute",
    top: 2,
    left: 18,
    padding: 2,
    backgroundColor: "white",
    zIndex: 10,
  },
  text1TitleModalButton: {
    fontSize: 11,
    fontFamily: MyFont.regular,
    color: "#404040",
  },
  text2TitleModalButton: {
    fontSize: 10,
    fontFamily: MyFont.regular,
    color: "#C0C0C0",
  },
});

export default Login;
