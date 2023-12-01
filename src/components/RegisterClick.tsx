import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MyColors } from "../theme/AppTheme";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../App";



const RegisterClick = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity 
       style={styles.roundedBottom}
       onPress={() => navigation.navigate('Acceder')}
    >
      <View style={styles.flexBttom}>
        <Text style={styles.textBottom}>Registrate</Text>
        <Image 
           source={require("../../assets/register.png")}
           style={styles.logoRegister}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedBottom: {
    width: 340,
    height: 40,
    alignItems: "center",
    backgroundColor: MyColors.black,
    justifyContent: "center",
    borderRadius: 15,
  },
  flexBttom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  textBottom: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 40,
    bottom: 4,
  },
  logoRegister: {
    width: 20,
    height: 20,
  }
});

export default RegisterClick;
