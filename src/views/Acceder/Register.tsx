import React from "react";
import { ViewComponent, View, Text, Image, StyleSheet } from "react-native";
import LogoBlack from '../../../assets/logo-black.svg'
import Icons from "../../theme/Icons";

const Register = () => {
  const { LogoBlack } = Icons;

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
  }
});
export default Register;
