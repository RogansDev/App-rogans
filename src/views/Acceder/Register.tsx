import React from "react";
import { ViewComponent, View, Text, Image, StyleSheet } from "react-native";

const Register = () => {
  return (
    <View style={styles.conatiner}>
      <Image
        source={require("../../../assets/logo-black.svg")}
        style={styles.logoBlack}
      />
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
