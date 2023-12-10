import React from "react";
import { ViewComponent, View, Text, Image, StyleSheet, TextInput } from "react-native";
import LogoBlack from '../../../assets/logo-black.svg'

const Register = () => {
  return (
    <View style={styles.conatiner}>
      <LogoBlack style={styles.logoBlack} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logoBlack: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
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
    width: "100%",
    height: "40%",
  }
});
export default Register;
