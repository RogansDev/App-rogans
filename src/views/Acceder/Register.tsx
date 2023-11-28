import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ViewComponent, View, Text, Image, StyleSheet } from "react-native";

const Register = () => {
  const navigation = useNavigation();
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
    backgroundColor: "black",
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
