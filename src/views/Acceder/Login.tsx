import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import BottomLogin from "../../components/BottomLogin";
import Icons from "../../theme/Icons";

const Login = () => {
  const { LogoBlack, Forget } = Icons;

  return (
    <View style={styles.container}>
      <LogoBlack  style={styles.background} />
      <View></View>
      <View style={styles.contentForm}>
        <View style={styles.form}>
          <View style={styles.inputName}>
            <TextInput
              placeholder="Ingresa tus nombres"
              style={styles.textInput}
              keyboardType="default"
            />
            <Text style={styles.textNames}>Usuario</Text>
          </View>
          <View style={styles.inputName}>
            <TextInput
              placeholder="Ingresa tus nombres"
              style={styles.textInput}
              keyboardType="default"
              secureTextEntry={true}
            />
            <Text style={styles.textNames}>Contraseña</Text>
          </View>
          <View style={styles.terms}>
            <Text style={styles.termsText}>Acepto las condiciones</Text>
          </View>
          <View>
             <BottomLogin />
          </View>
          <View style={styles.forget}>
            <Forget width={20} height={20} />
            <Text>Olvide mi contraseña</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  background: {
    display: "flex",
    alignSelf: "center",
    top: 110,
  },
  contentForm: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    margin: 80,
    top: 80,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
  },
  inputName: {
    width: 340,
    height: 50,
    borderColor: "#D2D2D2",
    borderWidth: 1,
    borderRadius: 5,
  },
  textInput: {
    height: 50,
    marginLeft: 10,
  },
  textNames: {
    position: "relative",
    bottom: 62,
    left: 14,
  },
  terms: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  termsText: {
    marginLeft: 8,
  },
  forget: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    gap: 10,
  }
});

export default Login;
