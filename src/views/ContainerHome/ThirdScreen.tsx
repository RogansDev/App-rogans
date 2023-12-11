import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MyColors, MyFont } from "../../theme/AppTheme";
import ScreenThrid from "../../components/ScreenThrid";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../App";

const ThirdScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>()


  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/doctores-third.png")}
        style={styles.background}
      />
      <View style={styles.form}>
        <Text style={styles.titleform}>¡Comencemos!</Text>
        <Text style={styles.parraForm}>
             <Text style={styles.parraText}>Completa tu perfil </Text>
             para estar al tanto de tus <Text style={styles.parraText}>citas y tratamientos.</Text> 
        </Text>
        <View style={{ marginTop: 20 }}>
          <ScreenThrid text="¡Comencemos!" />
        </View>
        <View style={styles.contentItems}>
          <Text 
             style={styles.selectSecond}
             onPress={() => navigation.navigate("FIrstScreen")}
          ></Text>
          <Text 
            style={styles.selectThird}
            onPress={() => navigation.navigate("Martin")}
          ></Text>
          <View style={styles.selectFirst}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      position: 'relative',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    background: {
      position: 'absolute',
      width: "100%",
      height: "100%",
      opacity: 0.7,
    },
    form: {
      position: "relative",
      width: '100%',
      padding: 20,
      zIndex: 10,
    },
    titleform: {
      fontSize: 30,
      fontFamily: MyFont.bold,
      textAlign: "center",
      marginTop: 20,
      color: "white",
      fontWeight: "bold"
    },
    parraForm: {
      fontSize: 15,
      fontFamily: MyFont.regular,
      textAlign: "center",
      marginTop: 20,
      color: "white",
      width: "95%",
      position: "relative",
      left: 8,
      lineHeight: 25,
    },
    parraText: {
        color: MyColors.primary
    },
    contentItems: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      gap: 20,
      marginTop: 28,
    },
    selectFirst: {
      width: 50,
      height: 10,
      backgroundColor: MyColors.base,
      borderRadius: 10,
    },
    selectSecond: {
      width: 30,
      height: 10,
      backgroundColor: MyColors.gray,
      borderRadius: 10,
    },
    selectThird: {
      width: 30,
      height: 10,
      backgroundColor: MyColors.gray,
      borderRadius: 10,
    }
  });
  

export default ThirdScreen;
